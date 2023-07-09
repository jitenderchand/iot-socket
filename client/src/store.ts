import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "modules/deviceInventory/slices/device.slice";
// ...
const store = configureStore({
  reducer: {
    devices: deviceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
