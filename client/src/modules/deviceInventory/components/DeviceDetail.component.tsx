import { FunctionComponent, ChangeEvent, memo } from "react";
import styled from "@emotion/styled";
import { Box, Heading, Text, HStack, Badge, Switch } from "@chakra-ui/react";
import { themeGet } from "@styled-system/theme-get";
import { useSelector } from "react-redux";
import { getDevice } from "modules/deviceInventory/selectors/device.selector";
import { SocketService } from "modules/deviceInventory/services";

interface IProps {
  className?: string;
  id: string;
}

const DeviceDetailComponent: FunctionComponent<IProps> = ({
  className,
  id,
}) => {
  const device = useSelector(getDevice(id));
  const socketService = SocketService.getInstance();

  const _handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    let payload: { command: string; id: string } = {
      command: "",
      id: device.id,
    };
    if (!event.target.checked) {
      payload.command = "disconnect";
    } else {
      payload.command = "connect";
    }
    socketService.getConnection.send(JSON.stringify(payload));
  };

  return (
    <Box
      className={`${className} ${
        device.connected ? "connected" : "disconnected"
      }`}
    >
      <Box display="flex" justifyContent="space-between">
        <Heading as="h6" size="sm">
          {device.name}
        </Heading>
        <Badge bg={device.connected ? "green.400" : "red.300"} color="white">
          {device.connected ? "connected" : "disconnected"}
        </Badge>
      </Box>
      <HStack pt="xs">
        <Text fontSize="sm">Unit:</Text>
        <Text fontSize="sm">{device.unit}</Text>
      </HStack>
      <Box display="flex" justifyContent="space-between">
        <HStack pt="xs">
          <Text fontSize="sm">Value:</Text>
          <Text fontSize="sm">{device?.value ?? "-"}</Text>
        </HStack>
        <Switch
          isChecked={device.connected}
          colorScheme="orange"
          onChange={_handleToggle}
        />
      </Box>
    </Box>
  );
};

export const DeviceDetail = styled(memo(DeviceDetailComponent))`
  background: white;
  border-radius: ${themeGet("radii.md")};
  border: solid 1px ${themeGet("colors.gray.500")};
  padding: ${themeGet("space.xs")};
  &.connected {
  }
  &.disconnected {
  }
`;
