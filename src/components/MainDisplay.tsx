import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

import Miworgif from "../assets/miworgif.gif";

const BigImage = () => {
  return (
    <HStack>
      <Box marginLeft="20%" display={"grid"}>
        <Image src={Miworgif} />
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
        <Text fontSize={18} fontFamily="Montserrat" color="black">
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
