import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  useColorModeValue,
  Button,
  useColorMode,
  Divider,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.200", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
    { name: "Sponsors", href: "#sponsors" },
  ];
  return (
    <Box bg={bgColor} py={4}>
      <Flex align="center" justify="space-between" px={8}>
        <Text fontSize="md">
          © {new Date().getFullYear()} Tech Optimum All rights reserved.
        </Text>

        <Flex gap={"20px"} alignItems={"center"}>
          <Link>Main Website</Link>
          <Link>Dashboard</Link>

          <Link>Privacy Policy</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
