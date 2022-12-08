import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontSize="large" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["1", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th pl={["2", "6"]}>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w={["2", "8"]}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["1", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={["2", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Roberto do Gás</Text>
                    <Text fontSize="sm" color="gray.300">
                      betinho.do.gas@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de dezembro de 2022</Td>}
                {isMobileVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                ) : (
                  <Td p="0">
                    <IconButton
                      icon={<Icon as={RiPencilLine} />}
                      aria-label="Editar usuário"
                      colorScheme="purple"
                    />
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["1", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={["2", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Roberto do Gás</Text>
                    <Text fontSize="sm" color="gray.300">
                      betinho.do.gas@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de dezembro de 2022</Td>}
                {isMobileVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                ) : (
                  <Td p="0">
                    <IconButton
                      icon={<Icon as={RiPencilLine} />}
                      aria-label="Editar usuário"
                      colorScheme="purple"
                    />
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["1", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={["2", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Roberto do Gás</Text>
                    <Text fontSize="sm" color="gray.300">
                      betinho.do.gas@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de dezembro de 2022</Td>}
                {isMobileVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                ) : (
                  <Td p="0">
                    <IconButton
                      icon={<Icon as={RiPencilLine} />}
                      aria-label="Editar usuário"
                      colorScheme="purple"
                    />
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["1", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={["2", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Roberto do Gás</Text>
                    <Text fontSize="sm" color="gray.300">
                      betinho.do.gas@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de dezembro de 2022</Td>}
                {isMobileVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                ) : (
                  <Td p="0">
                    <IconButton
                      icon={<Icon as={RiPencilLine} />}
                      aria-label="Editar usuário"
                      colorScheme="purple"
                    />
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
