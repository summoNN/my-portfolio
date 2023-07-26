import {
    Box,
    Image,
    VStack,
    Text,
    Grid,
    Button,
    useColorMode,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Typewriter } from "react-simple-typewriter"
import LogoBlack from "../images/logo_black.png"
import LogoWhite from "../images/logo_white.png"
import { useNavigate } from "react-router-dom"

  
export const Hero = () =>{
    const { colorMode } = useColorMode();
    const navigate = useNavigate();
    
    return(
        <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Image src={colorMode === 'light' ? LogoBlack : LogoWhite} />
            <Text fontSize={"2xl"}>
              Hi, I'm a Junior 
              <Typewriter
              words={[' Developer', ' Problem solver']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
            </Text>
            <Button variant={'outline'} colorScheme={'teal'} onClick={() => navigate("/works")}>Works</Button>
          </VStack>
        </Grid>
      </Box>
    )
}