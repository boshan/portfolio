import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";

import mobile from "../assets/mobile_miwor.webp";

const Feedback = () => {
  return (
    <HStack>
      <Spacer />

      <Box>
        <Text>
          After presenting our prototype to the class our most valuable feedback{" "}
          <br />
          revolved around the{" "}
          <b>
            impracticality of touching the mirror all the time <br />
            to interact with it
          </b>
          . The solution we found to this issue is to create
          <br />a <b>mobile application</b> that can interface with the mirror
          and have
          <br />
          access to all the features.
        </Text>
        <br />
        <Text>
          We also got feedback that the wardrobe icon was confusing so we fixed
          that <br />
          and added a home button and a scan feature that can scan in clothes
          from <br />
          your wardrobe.
        </Text>
      </Box>
      <Spacer />
      <Spacer />
      <Image src={mobile} w="300px" h="600px" />
      <Spacer />
      <Spacer />
    </HStack>
  );
};

export default Feedback;
