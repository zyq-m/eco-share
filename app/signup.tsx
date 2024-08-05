import React from "react";
import {
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Button,
  Center,
  Heading,
  VStack,
} from "native-base";
import { InterfaceInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

export default function SignUp() {
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormInput label="Username" options={{ type: "text" }} />
          <FormInput label="Email" options={{ type: "text" }} />
          <FormInput label="Phone Number" options={{ type: "text" }} />
          <FormInput label="Username" options={{ type: "text" }} />
          <FormInput label="Password" options={{ type: "password" }} />
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

function FormInput({
  label,
  error,
  helper,
  options,
}: {
  label: string;
  options: InterfaceInputProps;
  helper?: string;
  error?: string;
}) {
  return (
    <FormControl>
      <Stack>
        <FormControl.Label>{label}</FormControl.Label>
        <Input {...options} />
        <FormControl.HelperText>{helper}</FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
}
