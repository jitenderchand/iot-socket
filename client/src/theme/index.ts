import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import sizes, { baseSizes } from "./sizes";
import colors from "open-color";

const fromOpenColorPaletteToThemeColorPalette = (
  openColorPalette: string[]
) => {
  return {
    50: openColorPalette[0],
    100: openColorPalette[1],
    200: openColorPalette[2],
    300: openColorPalette[3],
    400: openColorPalette[4],
    500: openColorPalette[5],
    600: openColorPalette[6],
    700: openColorPalette[7],
    800: openColorPalette[8],
    900: openColorPalette[9],
  };
};

const themeColors = {
  gray: {
    "50": "#F1F2F4",
    "100": "#D7DBDF",
    "200": "#BEC4CB",
    "300": "#A5ADB6",
    "400": "#8B96A2",
    "500": "#727F8D",
    "600": "#5B6671",
    "700": "#444C55",
    "800": "#2D3339",
    "900": "#17191C",
  },
  green: {
    "50": "#EBF9ED",
    "100": "#C7F0CE",
    "200": "#A3E6AE",
    "300": "#7FDC8F",
    "400": "#5BD26F",
    "500": "#37C84F",
    "600": "#2CA03F",
    "700": "#217830",
    "800": "#165020",
    "900": "#0B2810",
  },
  yellow: {
    "50": "#FFF9E6",
    "100": "#FEEDB9",
    "200": "#FDE18B",
    "300": "#FDD65E",
    "400": "#FCCA31",
    "500": "#FCBE03",
    "600": "#C99803",
    "700": "#977202",
    "800": "#654C01",
    "900": "#322601",
  },
  orange: {
    "50": "#FFF2E5",
    "100": "#FFDAB8",
    "200": "#FFC38A",
    "300": "#FFAB5C",
    "400": "#FF932E",
    "500": "#FF7C00",
    "600": "#CC6300",
    "700": "#994A00",
    "800": "#663200",
    "900": "#331900",
  },
  red: {
    "50": "#FFE5E5",
    "100": "#FFB8B8",
    "200": "#FF8A8A",
    "300": "#FF5C5C",
    "400": "#FF2E2E",
    "500": "#FF0000",
    "600": "#CC0000",
    "700": "#990000",
    "800": "#660000",
    "900": "#330000",
  },
  teal: {
    "50": "#E9FBF6",
    "100": "#C1F5E6",
    "200": "#9AEFD6",
    "300": "#72E9C6",
    "400": "#4BE2B5",
    "500": "#23DCA5",
    "600": "#1CB084",
    "700": "#158463",
    "800": "#0E5842",
    "900": "#072C21",
  },
  cyan: {
    "50": "#E9F9FB",
    "100": "#C2EEF5",
    "200": "#9AE3EE",
    "300": "#73D8E8",
    "400": "#4BCEE2",
    "500": "#24C3DB",
    "600": "#1D9CAF",
    "700": "#167583",
    "800": "#0E4E58",
    "900": "#07272C",
  },
  blue: {
    "50": "#E7F3FD",
    "100": "#BCDEFA",
    "200": "#92C9F7",
    "300": "#67B4F4",
    "400": "#3C9FF1",
    "500": "#1189EE",
    "600": "#0E6EBE",
    "700": "#0A528F",
    "800": "#07375F",
    "900": "#031B30",
  },
  purple: {
    "50": "#ECE7FE",
    "100": "#CBBBFC",
    "200": "#AA8FF9",
    "300": "#8864F7",
    "400": "#6738F5",
    "500": "#450CF3",
    "600": "#380AC2",
    "700": "#2A0792",
    "800": "#1C0561",
    "900": "#0E0231",
  },
  pink: {
    "50": "#FDE8EF",
    "100": "#F9BED2",
    "200": "#F594B5",
    "300": "#F16A99",
    "400": "#EC407C",
    "500": "#E8175F",
    "600": "#BA124C",
    "700": "#8B0E39",
    "800": "#5D0926",
    "900": "#2E0513",
  },
};

const space: ThemeOverride["space"] = {
  ...baseSizes,
};

space["2xs"] = space[1];
space["xs"] = space[2];
space["sm"] = space[3];
space["md"] = space[4];
space["lg"] = space[6];
space["xl"] = space[8];
space["2xl"] = space[10];
space["3xl"] = space[12];
space["4xl"] = space[16];
space["5xl"] = space[20];
space["6xl"] = space[24];

const theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
  space,
  fonts: {
    heading: `'IBM Plex Sans', sans-serif`,
    body: `'IBM Plex Sans', sans-serif`,
    mono: `'IBM Plex Mono', mono`,
  },
  colors: {
    ...themeColors,
    brand: fromOpenColorPaletteToThemeColorPalette(colors.red),
    gray: fromOpenColorPaletteToThemeColorPalette(colors.gray),
  },
  styles: {
    global: (props: StyleFunctionProps) => {
      return {
        body: {
          bg: props.theme.colors.gray["50"],
        },
      };
    },
  },
});

export default theme;
