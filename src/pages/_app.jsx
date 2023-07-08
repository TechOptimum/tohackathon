import "@/styles/globals.css";
import {
  ChakraProvider,
  CSSReset,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { theme } from "@/styles/theme";
import Layout from "../../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        {/* <CustomBackground /> */}
        <Component {...pageProps} />
        {/* <ColorModeToggle /> */}
      </Layout>
    </ChakraProvider>
  );
}
