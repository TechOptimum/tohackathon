import "@/styles/globals.css";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";

import { theme } from "@/styles/theme";
import Layout from "../../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <CSSReset />
      <Layout>
        {/* <CustomBackground /> */}
        <Component {...pageProps} />
        {/* <ColorModeToggle /> */}
      </Layout>
    </ChakraProvider>
  );
}
