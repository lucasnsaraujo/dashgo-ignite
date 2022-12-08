import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type NewUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const newUserFormSchema = y.object().shape({
  name: y.string().required("Nome obrigatório"),
  email: y.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: y
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  password_confirmation: y
    .string()
    .oneOf([null, y.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const { handleSubmit, formState, register } = useForm<NewUserFormData>({
    resolver: yupResolver(newUserFormSchema),
  });
  const { errors } = formState;
  const handleCreateUser: SubmitHandler<NewUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(values);
  };
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Nome completo"
                type="text"
                {...register("name")}
                error={errors.name}
              />
              <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Senha"
                type="password"
                {...register("password")}
                error={errors.password}
              />
              <Input
                label="Confirmação da senha"
                type="password"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
