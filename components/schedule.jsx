import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorMode,
} from "@chakra-ui/react";

const Schedule = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "#ffffff9a", dark: "#2d2d2db9" };
  const textColor = { light: "black", dark: "white" };

  const schedule = [
    {
      day: "Friday",
      time: "5 PM - 5:30 PM",
      event: "Opening Ceremony",
      leads: "Siddharth, Pranith, Aditya",
    },
    {
      day: "Friday",
      time: "8 PM - 9 PM",
      event: "Workshop 1 | Padding v Margin",
      leads: "Siddharth",
    },
    {
      day: "Friday",
      time: "9:30 PM - 10:30 PM",
      event: "Bedwars Tourney",
      leads: "Aditya",
    },
    {
      day: "Friday/Saturday",
      time: "10:30 PM - 9 AM",
      event: "Code | Live Stream on Twitch",
      leads: "Aditya",
    },
    {
      day: "Saturday",
      time: "9:30 AM - 10:30 AM",
      event: "Workshop 2 | Intro to Next.js",
      leads: "Pranith & Siddharth",
    },
    {
      day: "Saturday",
      time: "10:30 AM - 1 PM",
    event: "Code | Live Stream on Twitch",
      leads: "Aditya",
    },
    {
      day: "Saturday",
      time: "1 PM - 2 PM",
      event: "Chess Tourney",
      leads: "Aditya",
    },
    {
      day: "Saturday",
      time: "2:30 PM - 3:30 PM",
      event: "Workshop 3 | TBD",
      leads: "TBD",
    },
    {
      day: "Saturday",
      time: "4 PM - 5:30 PM",
      event: "Slides Karaoke",
      leads: "Adityav",
    },
    {
      day: "Saturday",
      time: "6 PM - 7 PM",
      event: "Workshop 4 | TBD",
      leads: "TBD",
    },
    {
      day: "Saturday",
      time: "7:30 PM - 9 PM",
      event: "Q&A",
      leads: "Aditya, Siddharth, And Pranith",
    },
  
    {
      day: "Sunday",
      time: "1 PM - 2 PM",
      event: "Grace period for submissions",
     leads: "Aditya, Siddharth, And Pranith",
    },
    {
      day: "Sunday",
      time: "2:15 PM - 6 PM",
      event: "Judging Period",
      leads: "Judges",
    },
    {
      day: "Sunday",
      time: "7 PM",
      event: "Closing Ceremony",
      leads: "Siddharth, Pranith, Aditya",
    },
  ];

  return (
    <Box
      borderRadius={"lg"}
      margin="auto"
      maxW={{ base: "97%", md: "80%"}}
      bgColor={bgColor[colorMode]}
      color={textColor[colorMode]}
      p={{ base: 1, md: 5 }}
    >
      <Text textAlign={"center"} fontSize="3xl" mb={5}>
        Schedule (times are in EST)
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th p={{ base: 3, md: 6 }}>Day and Time</Th>
            <Th p={{ base: 3, md: 6 }}>Event Name</Th>
            <Th p={{ base: 3, md: 6 }}>Who&apos;s running it</Th>
          </Tr>
        </Thead>
        <Tbody>
          {schedule.map((item, index) => (
            <Tr key={index}>
              <Td p={{ base: 3, md: 6 }}>
                {item.day}
                <br />
                {item.time}
              </Td>
              <Td p={{ base: 3, md: 6 }}>{item.event}</Td>
              <Td p={{ base: 3, md: 6 }}>{item.leads}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Schedule;
