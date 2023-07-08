import { IDevice } from "common/model/device.model";
import { SocketService } from "common/services/socket";

export class DeviceService {
  private static socketService = SocketService.getInstance();
  static subscribeForDevices = () => {};
}
