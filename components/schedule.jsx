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
  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };

  const schedule = [
    {
      day: "Friday",
      time: "5 PM - 5:30 PM",
      event: "Opening Ceremony",
      leads: "Siddharth, Pranith, Adi, Arnav",
    },
    {
      day: "Friday",
      time: "8 PM - 9 PM",
      event: "Workshop 1 | Padding v Margin",
      leads: "Arnav",
    },
    {
      day: "Friday",
      time: "9:30 PM - 10:30 PM",
      event: "Bedwars Tourney (With Golden)",
      leads: "Arnav and Adi",
    },
    {
      day: "Friday/Saturday",
      time: "10:30 PM - 9 AM",
      event: "Code you mfs | Live Stream",
      leads: "",
    },
    {
      day: "Saturday",
      time: "9:30 AM - 10:30 AM",
      event: "Workshop 2 | Intro to Next.js",
      leads: "Siddharth",
    },
    {
      day: "Saturday",
      time: "10:30 AM - 1 PM",
      event: "Coding time  | Live Stream",
      leads: "",
    },
    {
      day: "Saturday",
      time: "1 PM - 2 PM",
      event: "Chess Tourney",
      leads: "Adi",
    },
    {
      day: "Saturday",
      time: "2:30 PM - 3:30 PM",
      event: "Workshop 3",
      leads: "Another rando",
    },
    {
      day: "Saturday",
      time: "4 PM - 5:30 PM",
      event: "Slides Karaoke",
      leads: "Adi/Arnav",
    },
    {
      day: "Saturday",
      time: "6 PM - 7 PM",
      event: "Workshop 4",
      leads: "A third rando",
    },
    {
      day: "Saturday",
      time: "7:30 PM - 9 PM",
      event: "Q&A",
      leads: "All organizers",
    },
    {
      day: "Saturday/Sunday",
      time: "9:30 PM - 8 AM",
      event: "Finish up projects | Live Stream",
      leads: "",
    },
    {
      day: "Sunday",
      time: "8 AM - 8:15 AM",
      event: "Grace period for submissions",
      leads: "All organizers",
    },
    {
      day: "Sunday",
      time: "8:15 AM - 1 PM",
      event: "Judging Period",
      leads: "Judges",
    },
    {
      day: "Sunday",
      time: "5 PM - 6 PM",
      event: "Closing Ceremony",
      leads: "Siddharth, Pranith, Adi, Arnav",
    },
  ];

  return (
    <Box
      borderRadius={"lg"}
      margin="auto"
      maxW="80%"
      bgColor={bgColor[colorMode]}
      color={textColor[colorMode]}
      p={5}
    >
      <Text textAlign={"center"} fontSize="3xl" mb={5}>
        Schedule
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Day and Time</Th>
            <Th>Event Name</Th>
            <Th>Who's running it</Th>
          </Tr>
        </Thead>
        <Tbody>
          {schedule.map((item, index) => (
            <Tr key={index}>
              <Td>
                {item.day}
                <br />
                {item.time}
              </Td>
              <Td>{item.event}</Td>
              <Td>{item.leads}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Schedule;