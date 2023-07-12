import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  chakra,
  useColorMode,
  Button,
  Divider,
  Flex,
  Stack,
  Tooltip,
} from "@chakra-ui/react";

import Navbar from "./navbar";
import Countdown from "./countdown";

import RegisterButton from "./Buttons/register";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ImageBG = () => {
  return (
    <>
      <Box
        position="fixed"
        zIndex={-1}
        bg={useColorMode === "light" ? "black" : "black"}
        opacity={1}
        filter={"brightness(0.22)"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
      >
        <Image src="/heroBG.jpg" alt="hero background" className="heroBGblur" />
      </Box>
    </>
  );
};

const TimeDisplay = () => {
  const startTime = new Date();
  startTime.setUTCHours(0, 0, 0, 0);
  startTime.setUTCHours(0); // Set the hour to 0 (midnight) in UTC

  const endTime = new Date();
  endTime.setUTCHours(0, 0, 0, 0);
  endTime.setUTCHours(1); // Set the hour to 1 (1am) in UTC

  const userStartTime = startTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Use the user's timezone
  });

  const userEndTime = endTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Use the user's timezone
  });

  // Display userStartTime and userEndTime

  return (
    <Stack
      direction="row"
      h={{ base: "120px", lg: "100px" }}
      p={"1"}
      mt={"15px"}
    >
      <Divider orientation="vertical" />
      <Stack direction={"column"}>
        <Text
          fontSize={"22px"}
          fontWeight={"700"}
          fontFamily={"oxanium, cursive"}
        >
          August 18th - August 20th
        </Text>
        <Tooltip
          placement={"bottom"}
          label="Times are adjusted to your timezone"
          display={{ base: "none", lg: "flex" }}
          mr={"40px"}
          hasArrow
        >
          <Text fontSize={"22px"}>
            {userStartTime} - {userEndTime}
          </Text>
        </Tooltip>
        <Text display={{ base: "block", lg: "none" }}>
          Times adjusted to your timezone
        </Text>
      </Stack>
    </Stack>
  );
};

export default function Hero() {
  return (
    <>
      <Navbar />
      <ImageBG />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        color="white"
        pt={28} // Adjust the margin as desired
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box pl={{ base: "30px", lg: "150px" }} pr={{ base: "30px", lg: 0 }} position="relative" zIndex={1}>
          <Heading as="h1" size={{base: "2xl", lg: "3xl"}} fontFamily={"oxanium, cursive"}>
            Tech Optimum Hacks
          </Heading>
          <chakra.span
            fontSize="4xl"
            fontWeight="bold"
            bgGradient={`linear(to-r, #3d89d5, #797ce8 50%, #ed4e86)`}
            bgClip="text"
            display="inline-block"
            pl={1}
          >
            SZN 2
          </chakra.span>
          <Text fontSize="xl" fontWeight="medium" maxW={"600px"} pl={1}>
            Code, collaborate, and innovate with fellow teen coders in an
            exhilarating weekend of hacking and unleashing your creativity.
          </Text>
          <Flex pt={5} mb={2} gap={{base: 0, sm: "10px"}} direction={{ base: "column", sm: "row" }} alignItems={"center"}>
            <RegisterButton />
            <Box w={"5px"} h={"20px"} color={"white"}></Box>
            <Button
              h={"55px"}
              // _hover={{ textDecoration: "underline", color: "blue.400" }}
              variant={"ghost"}
              _hover={{ bgColor: "#5865f23e" }}
              rightIcon={<ArrowForwardIcon />}
              fontSize={"22px"}
              transition={"all 0.3s ease-in-out"}
              color={useColorMode === "light" ? "white" : "white"}
            >
              Discord Server
            </Button>
          </Flex>
          {/* TIME */}

          <TimeDisplay />

          {/* TIME */}
        </Box>
        <chakra.div
          h={"24rem"}
          w={"24rem"}
          alignSelf="center"
          display={{ base: "none", lg: "block" }} // Hide on mobile
        >
          <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@0.9.379/build/spline-viewer.js"
          ></script>
          <spline-viewer
            loading-anim
            url="https://prod.spline.design/9zAf2RbRCdNVXDrQ/scene.splinecode"
          ></spline-viewer>
        </chakra.div>
      </Box>
      <Stack pb={"200px"} justifyContent={"center"} alignItems={"center"}>
        <Box
          h={"2px"}
          w={{ base: "250px", lg: "1200px" }}
          bgColor={"#ffffff51"}
        ></Box>
        <Countdown />
      </Stack>
    </>
  );
}
