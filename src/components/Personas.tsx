import { Box, Center, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";

const Personas = () => {
  return (
    <>
      <Center marginTop={5}>
        <Text fontSize={24}>
          <b>Personas</b>
        </Text>
      </Center>
      <Center marginTop={5}>
        <Text>
          We created four personas that would represent the end users of our
          product. <br /> From this we decided a <b>recommendation feature</b>{" "}
          needed be central to our design.
        </Text>
      </Center>

      <HStack marginTop={5} paddingTop={10}>
        <Spacer />
        <Box>
          <Image src={person1} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={person2} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={person3} boxSize={200} />
        </Box>
        <Spacer />

        <Box>
          <Image src={person4} boxSize={200} />
        </Box>
        <Spacer />
      </HStack>

      <HStack marginTop={5} paddingBottom={10}>
        <Spacer />
        <Box>
          <Text>
            Matt falls into the same <b>routine</b> of wearing <br />
            his NY yankees cap everyday and wants <br /> something new.
          </Text>
        </Box>
        <Spacer />

        <Box>
          <Text>
            Steve's office just recently got a new dresscode <br />
            and he wants to improve his <b>style</b>.
          </Text>{" "}
        </Box>
        <Spacer />

        <Box>
          <Text>
            Melissa's a college student and her rooms always very messy, <br />
            she wants to get her wardrobe <b>organized</b>.
          </Text>{" "}
        </Box>
        <Spacer />

        <Box>
          <Text>
            Anita is a mother of two young kids and doesn't have <br />
            <b>time</b> to customize an outfit every morning for herself.
          </Text>{" "}
        </Box>
        <Spacer />
      </HStack>
    </>
  );
};

export default Personas;
