import { Grid, Image } from "@chakra-ui/react";

const sponsors = [
  { id: 1, imageUrl: "sponsor1.jpg" },
  { id: 2, imageUrl: "sponsor2.jpg" },
  { id: 3, imageUrl: "sponsor3.jpg" },
  // Add more sponsors as needed
];

const SponsorGrid = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {sponsors.map((sponsor) => (
        <Image
          key={sponsor.id}
          src={sponsor.imageUrl}
          boxSize="100%"
          objectFit="contain"
          alt="sponsor-image"
        />
      ))}
    </Grid>
  );
};

export default SponsorGrid;
