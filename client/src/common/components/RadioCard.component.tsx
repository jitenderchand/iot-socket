import { ReactNode, FunctionComponent } from "react";
import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

interface RadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioCard: FunctionComponent<RadioCardProps> = (
  props: RadioCardProps
) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "orange.500",
          color: "white",
          borderColor: "orange.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
