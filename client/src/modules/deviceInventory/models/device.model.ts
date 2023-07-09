export interface IDevice {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string | null;
}

export enum FILTER_VALUES {
  ALL = "all",
  CONNECTED = "connected",
  DISCONNECTED = "disconnected",
}
