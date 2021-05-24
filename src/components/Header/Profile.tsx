import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bianca Martins</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          Krasota.b@gmail.com
        </Text>
      </Box>

      <Avatar 
        size="md" 
        name="Bianca Martins" 
        src="https://avatars.githubusercontent.com/u/44592740?v=4"
      />
    </Flex>  
  )
}