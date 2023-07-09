import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SocketService } from "modules/deviceInventory/services";
import { updateDeviceList } from "modules/deviceInventory/slices/device.slice";
import { Skeleton } from "common/components/skeleton.component";

export const DeviceLandingPage = () => {
  const socketService = SocketService.getInstance();
  const [isSocketConnected, setConnectionState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { observable, closeConnection, unsubscribe } =
      socketService.subscribeForDevices();

    socketService.getConnection.addEventListener("open", () => {
      setConnectionState(true);
    });

    observable.subscribe((data) => {
      if (data) {
        dispatch(updateDeviceList(data));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box p="lg">
      <Skeleton count={4} isLoaded={isSocketConnected} />
    </Box>
  );
};
