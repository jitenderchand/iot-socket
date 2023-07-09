import { createSelector } from "reselect";
import { DeviceListById } from "modules/deviceInventory/slices/device.slice";
import { IAppState } from "store";
import { FILTER_VALUES } from "modules/deviceInventory/models/device.model";

export const devicesSelector = (state: IAppState) => {
  return state.devices.byId;
};

export const getDevices = (filterValue: FILTER_VALUES) =>
  createSelector(devicesSelector, (devices: DeviceListById) => {
    return Object.values(devices).filter((datum) => {
      if (filterValue === FILTER_VALUES.CONNECTED) {
        return datum.connected;
      } else if (filterValue === FILTER_VALUES.DISCONNECTED) {
        return !datum.connected;
      } else {
        return true;
      }
    });
  });

export const getDevice = (id: string) =>
  createSelector(devicesSelector, (devices: DeviceListById) => {
    return devices[id];
  });
