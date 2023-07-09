import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
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

  return (
    <Box mx="auto" maxW="80%" mt={8}>
      <Accordion allowMultiple>
        {faqData.map((item, index) => (
          <AccordionItem my=".5rem" border="none" key={index}>
            <AccordionButton
              bg={headingColor}
              _hover={{ bg: headingColor }}
              color="inherit"
              borderRadius="md"
            >
              <Box flex="1" textAlign="left">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              bg={panelColor}
              p={4}
              borderBottomLeftRadius="md"
              borderBottomRightRadius="md"
            >
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQSection;
