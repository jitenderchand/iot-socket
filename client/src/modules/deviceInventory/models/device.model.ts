export interface IDevice {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string | null;
}
