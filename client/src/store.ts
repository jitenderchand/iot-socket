import { configureStore } from "@reduxjs/toolkit";
import deviceReducer, {
  IDeviceListState,
} from "modules/deviceInventory/slices/device.slice";

export interface IAppState {
  devices: IDeviceListState;
}

const store = configureStore({
  reducer: {
    devices: deviceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
