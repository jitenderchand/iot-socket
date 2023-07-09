import { FunctionComponent } from "react";
import { Box, Stack, Skeleton as ChakraSkeleton } from "@chakra-ui/react";

interface IProps {
  count: number;
  isLoaded: boolean;
}

export const Skeleton: FunctionComponent<IProps> = ({
  count = 1,
  isLoaded,
}) => {
  const numberOfSkeleton = Array.from(Array(count).keys());
  return (
    <Box>
      <Stack direction="row" spacing="md">
        {numberOfSkeleton.map((index) => {
          return (
            <ChakraSkeleton
              isLoaded={isLoaded}
              key={index}
              width="220px"
              height="120px"
            />
          );
        })}
      </Stack>
    </Box>
  );
};
