import { Button, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack bg="#2F3134">
      <Image src={logo} boxSize="60px" />
      <Spacer />

      <Link to="/">
        <Button marginRight="20px">Projects</Button>
      </Link>
      <Link to="/about">
        <Button marginRight="20px">About</Button>
      </Link>
    </HStack>
  );
};

export default NavBar;
