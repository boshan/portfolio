import React from "react";
import NavBar from "../components/NavBar";
import { Box, Center, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="dodgerblue" height="80em">
      <NavBar />
      <Center fontSize={50}>Hey, I'm Bohan.</Center>
      <Center marginTop={5}>
        I love building applications and I have a passion for beautiful designs.
      </Center>
    </Box>
  );
};

export default About;
