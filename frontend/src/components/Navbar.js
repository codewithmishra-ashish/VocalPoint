import { Flex, Box, Heading, Button, HStack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      p={4}
      bg="brand.500"
      color="white"
      justify="space-between"
      align="center"
    >
      <Heading size="md">🚀 MyApp</Heading>
      <HStack spacing={4}>
        <Button as={Link} to="/" variant="ghost" color="white">
          Home
        </Button>
        <Button as={Link} to="/about" variant="ghost" color="white">
          About
        </Button>
        <Button as={Link} to="/dashboard" variant="ghost" color="white">
          Dashboard
        </Button>
        <Button size="sm" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "☀️"}
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
