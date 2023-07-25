import * as React from "react"
import {
  ChakraProvider,
  Box,
  Image,
  VStack,
  Text,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Typewriter } from "react-simple-typewriter"
import Logo from "./images/logo.png"

export const App = () => {

  return(
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Image src={Logo}/>
            <Text fontSize={"2xl"}>
              I'm a Junior 
              <Typewriter
              words={[' Developer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
            </Text>
            <Button variant={'outline'} colorScheme={'teal'}>Works</Button>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
