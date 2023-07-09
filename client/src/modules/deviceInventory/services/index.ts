import { IDevice } from "modules/deviceInventory/models/device.model";
import { BehaviorSubject, Observable } from "rxjs";

export enum SocketServiceEvents {
  CONNECTED = "connected",
  DISCONNECTED = "disconnected",
  ERROR = "error",
}

export class SocketService {
  private static _instance: SocketService;
  private static _connection: WebSocket;
  private static _isConnected = false;

  public static getInstance(): SocketService {
    if (!SocketService._instance) {
      SocketService._instance = new SocketService();
    }
    return SocketService._instance;
  }

  private _handleSocketConnection = () => {
    SocketService._isConnected = true;
  };

  private _handleSocketDisconnection = () => {
    SocketService._isConnected = false;
  };

  get isConnected(): boolean {
    return SocketService._isConnected;
  }

  get getConnection(): WebSocket {
    return SocketService._connection;
  }

  createSocketConnection = () => {
    if (!SocketService._connection) {
      SocketService._connection = new WebSocket(
        process.env.REACT_APP_SOCKET_BASE_URL as string
      );
    }
    return SocketService._connection;
  };

  subscribeForDevices = (): {
    observable: Observable<IDevice | undefined>;
    unsubscribe: () => void;
    closeConnection: () => void;
  } => {
    const subject = new BehaviorSubject<IDevice | undefined>(undefined);
    SocketService._connection = new WebSocket(
      process.env.REACT_APP_SOCKET_BASE_URL as string
    );

    SocketService._connection.addEventListener(
      "open",
      this._handleSocketConnection
    );
    SocketService._connection.addEventListener(
      "close",
      this._handleSocketDisconnection
    );

    const messageHandler = (message: MessageEvent<any>) => {
      try {
        const data = JSON.parse(message.data);
        subject.next(data);
      } catch (error) {
        SocketService._connection.removeEventListener(
          "message",
          messageHandler,
          false
        );
        subject.error(error);
      }
    };

    SocketService._connection.addEventListener("message", messageHandler);

    return {
      observable: subject.asObservable(),
      unsubscribe: () => {
        SocketService._connection.removeEventListener(
          "message",
          messageHandler,
          false
        );
        subject.complete();
      },
      closeConnection: () => {
        SocketService._connection.close();
        subject.complete();
      },
    };
  };
}
