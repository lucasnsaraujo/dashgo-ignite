import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="pink.600" ml="1">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        px="8"
        py="4"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      ></Flex>
    </Flex>
  );
}
