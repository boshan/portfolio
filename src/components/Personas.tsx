import { Box, Center, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import first_iter from "../assets/first_iter.webp";

const Personas = () => {
  return (
    <>
      <Center>
        <Text>Personas</Text>
        <Text>We brainstormed </Text>
      </Center>
      <HStack>
        <Spacer />
        <Box>
          <Image src={first_iter} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={first_iter} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={first_iter} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={first_iter} boxSize={200} />
        </Box>
        <Spacer />
      </HStack>
    </>
  );
};

export default Personas;
