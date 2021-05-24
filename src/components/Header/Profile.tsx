import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData: boolean;
}

export function Profile({showProfileData}: ProfileProps){
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
            
          <Text>Joseph Martins</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            martins.jose@gmail.com
          </Text>
        </Box>
      )}

      <Avatar 
        size="md" 
        name="Joseph Martins" 
        src="https://avatars.githubusercontent.com/u/44592740?v=4"
      />
    </Flex>  
  )
}