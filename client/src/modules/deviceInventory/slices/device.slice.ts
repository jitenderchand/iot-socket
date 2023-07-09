import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { IDevice } from "modules/deviceInventory/models/device.model";

export type DeviceListById = { [key: string]: IDevice };

export interface IDeviceListState {
  byId: DeviceListById;
}

const defaultState: IDeviceListState = {
  byId: {},
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState: defaultState,
  reducers: {
    updateDeviceList(state, action) {
      const payload = action.payload;
      state.byId[payload.id] = payload;
    },
  },
});

export const { updateDeviceList } = deviceSlice.actions;
export default deviceSlice.reducer;
