import { EventEmitter } from "eventemitter3";

export enum SocketServiceEvents {
  CONNECTED = "connected",
  DISCONNECTED = "disconnected",
  ERROR = "error",
}

export class SocketService extends EventEmitter {
  private static _instance: SocketService;
  private _connection: WebSocket;
  private _isConnected = false;

  public static getInstance(): SocketService {
    if (!SocketService._instance) {
      SocketService._instance = new SocketService();
    }
    return SocketService._instance;
  }
  private constructor() {
    super();
    this._connection = new WebSocket(
      process.env.REACT_APP_SOCKET_BASE_URL as string
    );
    console.log("this", this);
    this._connection.addEventListener("open", this._handleSocketConnection);
    this._connection.addEventListener("close", this._handleSocketDisconnection);
  }

  private _handleSocketConnection = () => {
    //this._isConnected = true;
    console.log(this);
    this.emit(SocketServiceEvents.CONNECTED, true);
  };

  private _handleSocketDisconnection = () => {
    this._isConnected = false;
    this.emit(SocketServiceEvents.DISCONNECTED, true);
  };

  get isConnected(): boolean {
    return this.isConnected;
  }
}
