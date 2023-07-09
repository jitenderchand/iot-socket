import styled from "@emotion/styled";
import { themeGet } from "@styled-system/theme-get";

export const Header = styled.header`
  padding: ${themeGet("space.sm")};
  padding-left: ${themeGet("space.lg")};
  background: ${themeGet("colors.orange.500")};
`;
