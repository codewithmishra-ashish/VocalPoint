import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: "#E3F2F9",
      500: "#3182CE",
      700: "#2B6CB0",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
});

export default theme;
