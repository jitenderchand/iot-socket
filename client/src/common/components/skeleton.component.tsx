import { FunctionComponent } from "react";
import { Box, HStack, Skeleton as ChakraSkeleton } from "@chakra-ui/react";

interface IProps {
  count: number;
}

export const Skeleton: FunctionComponent<IProps> = ({ count = 1 }) => {
  const numberOfSkeleton = Array.from(Array(count).keys());
  return (
    <Box>
      <HStack spacing="md">
        {numberOfSkeleton.map((index) => {
          return <ChakraSkeleton key={index} width="220px" height="120px" />;
        })}
      </HStack>
    </Box>
  );
};
