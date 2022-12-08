import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

import { useForm, SubmitHandler } from "react-hook-form";

import * as y from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = y.object().shape({
  email: y.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: y.string().required("Senha obrigatória"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        direction="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={errors?.email}
            {...register("email")}
          />
          <Input
            type="password"
            label="Password"
            error={errors?.password}
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
