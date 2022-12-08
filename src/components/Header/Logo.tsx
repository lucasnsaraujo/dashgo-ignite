import { Text } from '@chakra-ui/react'

export function Logo() {
    return (
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
        dash
        <Text as="strong" color="pink.600">
        board
        </Text>
      </Text>
    )
}