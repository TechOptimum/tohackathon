import { Grid, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Box, Center, Heading } from "@chakra-ui/react";

const sponsors = [
  { id: 1, imageUrl: "CoCalc_logo.jpg", href: "https://cocalc.com/" },
  { id: 2, imageUrl: "xyz_logo.jpg", href: "https://gen.xyz/" },
  { id: 3, imageUrl: "Axure_Logo.jpg", href: "https://www.axure.com/" },
  {
    id: 4,
    imageUrl: "aops_owler_original.jpg",
    href: "https://artofproblemsolving.com/",
  },
  {
    id: 5,
    imageUrl: "cake_logo_white_on_blue.jpg",
    href: "https://www.interviewcake.com/",
  },
  { id: 6, imageUrl: "Desmos_logo.jpg", href: "https://www.desmos.com/" },
  { id: 7, imageUrl: "WolframCorporateLogo.jpg", href: "https://wolfram.com/" },
  {
    id: 8,
    imageUrl: "smileyface-transparent.jpg",
    href: "https://balsamiq.com/",
  },

  // Add more sponsors as needed
];

const SponsorGrid = () => {
  return (
    <Box maxW={{ base: "97%", md: "80%" }} margin="auto" mb={"25px"}>
      <Center mt={"100px"} mb={"25px"}>
        <Heading fontFamily={"oxanium, cursive"}>Sponsor</Heading>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {sponsors.map((sponsor) => (
          <Link href={sponsor?.href} target="_blank">
            <Image
              key={sponsor.id}
              src={sponsor.imageUrl}
              boxSize="100%"
              objectFit="contain"
              alt="sponsor-image"
            />
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default SponsorGrid;
