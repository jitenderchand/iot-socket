import { useEffect, useState } from "react";
import { Box, Grid, useRadioGroup, HStack, Alert } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SocketService } from "modules/deviceInventory/services";
import { updateDeviceList } from "modules/deviceInventory/slices/device.slice";
import { Skeleton } from "common/components/Skeleton.component";
import { getDevices } from "modules/deviceInventory/selectors/device.selector";
import { DeviceDetail } from "modules/deviceInventory/components/DeviceDetail.component";
import { RadioCard } from "common/components/RadioCard.component";
import { FILTER_VALUES } from "modules/deviceInventory/models/device.model";

const filterOptions = [
  { label: "All", value: FILTER_VALUES.ALL },
  { label: "Connected", value: FILTER_VALUES.CONNECTED },
  { label: "Disconnected", value: FILTER_VALUES.DISCONNECTED },
];

export const DeviceLandingPage = () => {
  const socketService = SocketService.getInstance();
  const [isSocketConnected, setConnectionState] = useState(false);
  const [selectedFilter, setFilter] = useState(FILTER_VALUES.ALL);
  const devices = useSelector(getDevices(selectedFilter));
  const dispatch = useDispatch();

  const { getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: selectedFilter,
    onChange: (value) => {
      setFilter(value as FILTER_VALUES);
    },
  });

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
      {!isSocketConnected ? <Skeleton count={4} /> : null}
      <HStack py="md" justifyContent="flex-end">
        {filterOptions.map((datum) => {
          const radio = getRadioProps({ value: datum.value });
          return (
            <RadioCard key={datum.value} {...radio}>
              {datum.label}
            </RadioCard>
          );
        })}
      </HStack>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} pt="md">
        {isSocketConnected
          ? devices.map((datum) => {
              return <DeviceDetail key={datum.id} id={datum.id} />;
            })
          : null}
      </Grid>
      {isSocketConnected && !devices.length ? (
        <Alert status="warning">No result available</Alert>
      ) : null}
    </Box>
  );
};
