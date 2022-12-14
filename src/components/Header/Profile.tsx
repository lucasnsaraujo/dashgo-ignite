import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (  
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Nascimento</Text>
          <Text color="gray.300" fontSize="small">
            lucasnsaraujo0310@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lucas Nascimento"
        src="https://github.com/lucasnsaraujo.png"
      />
    </Flex>
  );
}
