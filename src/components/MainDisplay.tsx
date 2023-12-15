import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

import miwor from "../assets/miwor.webp";

const BigImage = () => {
  return (
    <HStack>
      <Box marginLeft="30%" display={"grid"}>
        <Image src={miwor} />
      </Box>
      <Box marginTop="20%" marginLeft={12}>
        <Text fontSize={18} fontFamily="Poppins" color="Black">
          Project: MIWOR
          <br />
          Course name: INST406 - Cross Disciplinary Communication Lab
          <br />
          Time: 8/28/2023 to 12/15/2023, 15 weeks
          <br />
          Team Members: Timothy Chun
          <br />
          Role: Visual design
        </Text>
      </Box>
    </HStack>
  );
};

export default BigImage;
