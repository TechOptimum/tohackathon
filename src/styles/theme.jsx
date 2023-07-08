import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: {
      50: "#f7fafc",
      100: "#edf2f7",
      // Define other dark mode colors
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: useColorModeValue("#fdfdfc", "#252525"),
        fontFamily: "Darker Grotesque, sans-serif",
      },
    }),
  },
});

export default theme;
