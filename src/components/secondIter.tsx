import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Miworgif from "../assets/miworgif.gif";

const secondIter = () => {
  return (
    <HStack>
      <Spacer />

      <Box>
        <Text>
          This is the first iteration of the prototype <br />
          which has all the key features we brainstormed.
        </Text>
        <Text>
          The features we had identified as most important were:
          <br /> <br />
          <b>
            Recommendations, User support, Wardrobe, Search, Shopping and Blur.
          </b>
        </Text>
      </Box>
      <Spacer />
      <Spacer />
      <Image src={Miworgif} w="700px" h="550px" />
      <Spacer />
      <Spacer />
    </HStack>
  );
};

export default secondIter;
