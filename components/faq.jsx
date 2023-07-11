import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is the hackathon about?",
      answer:
        "The hackathon is a coding competition where participants collaborate to build innovative projects within 48-hours",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to only students in high school or college.",
    },
  ];

  const headingColor = useColorModeValue("gray.200", "gray.800");
  const panelColor = useColorModeValue("gray.200", "gray.700");

  const bgColor = useColorModeValue("#ffffff9a", "#2d2d2dc9");
  const bgColorDark = useColorModeValue("#ffffffc3", "#2d2d2d");

  return (
    <>
      <Center mt={"100px"} mb={"25px"}>
        <Heading fontFamily={"oxanium, cursive"}>FAQ</Heading>
      </Center>
      <Box mx="auto" maxW="80%" mt={8} mb={10}>
        <Accordion allowMultiple>
          {faqData.map((item, index) => (
            <AccordionItem my="1rem" border="none" key={index}>
              <AccordionButton
                bgColor={bgColor}
                _hover={{ bg: bgColorDark }}
                _active={{ bg: bgColorDark }}
                color="inherit"
                borderRadius="md"
              >
                <Box flex="1" textAlign="left" fontSize={"25px"}>
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                bg={bgColor}
                p={4}
                borderBottomLeftRadius="md"
                borderBottomRightRadius="md"
                fontSize={"18px"}
              >
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default FAQSection;
