import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";

const Countdown = () => {
  const countdownDate = new Date("August 25, 2023 17:00:00 PST").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  const times = [
    {
      name: "DAYS",
      value: timeLeft.days,
    },
    {
      name: "HOURS",
      value: timeLeft.hours,
    },
    {
      name: "MIN",
      value: timeLeft.minutes,
    },
    {
      name: "SEC",
      value: timeLeft.seconds,
    },
  ];

  return (
    <Box>
      {/* <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Countdown
      </Text> */}
      <Flex direction={"row"} gap={{base: 5, sm: 10}} py={"25px"}>
        {times.map((time) => (
          <Flex key={time.name} direction={"column"} alignItems={"center"}>
            <Text
              fontSize={"35px"}
              fontWeight={"700"}
              fontFamily={"oxanium, cursive"}
              color={"#fff"}
            >
              {time.value}
            </Text>
            <Text fontSize={"32px"} fontWeight={"600"} color={"#fff8"}>
              {time.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Countdown;
