import { Box, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react";
import Miworgif from "../assets/miworgif.gif";

const secondIter = () => {
  return (
    <HStack>
      <Spacer />

      <Box>
        <Text>
          Our final product is a high fidelity figma prototype with working{" "}
          <br />
          buttons and all the feedback included.
          <br />
          <br />
          You can interact with the prototype{" "}
          <Link href="https://tinyurl.com/2s4ex68v" color="#0000FF">
            Here
          </Link>
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
