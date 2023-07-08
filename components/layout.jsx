import Navbar from "./navbar";
import Footer from "./footer";
import { useColorMode } from "@chakra-ui/react";
import React from "react";
const CustomBackground = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#252525" : "#fdfdfc";

  return (
    <style jsx global>{`
      body {
        background-color: ${bgColor};
      }
    `}</style>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
