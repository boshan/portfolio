import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";

import miworgif from "../assets/miworgif.gif";

const BigImage = () => {
  return (
    <HStack>
      <Spacer />
      <Box display={"grid"}>
        <Image src={miworgif} w="300px" h="240px" />
      </Box>
      <Box marginLeft="5%">
        <Text
          fontSize={72}
          fontFamily="Impact"
          color="#FF614B"
          paddingBottom={50}
        >
          MIWOR
        </Text>
        <Text color="black">
          Course name: INST406 - Cross Disciplinary Communication Lab
          <br />
          Date: 8/28/2023 to 12/15/2023, 15 weeks
          <br />
          Team Members: Timothy Chun
          <br />
          Role: Visual design
        </Text>
      </Box>
      <Spacer />
    </HStack>
  );
};

export default BigImage;
