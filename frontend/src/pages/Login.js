import { useState } from "react";
import { Box, Button, Input, Heading, VStack, useToast } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    // 🔗 Connect to your backend API here
    if (email && password) {
      login({ email }); // dummy login for now
      toast({ title: "Login successful!", status: "success" });
      navigate("/dashboard");
    } else {
      toast({ title: "Invalid credentials", status: "error" });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
      <Heading mb={6}>Login</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="blue" w="full" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
