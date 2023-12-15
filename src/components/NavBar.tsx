import { Button, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Spacer />
      <Button marginRight="20px">About</Button>
    </HStack>
  );
};

export default NavBar;
