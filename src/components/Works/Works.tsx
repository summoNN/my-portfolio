import { Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import WorkWhite from "../../images/works_white.png"
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PokemonHero from "../../images/pokemon.png";
import "./works.css"

export const Works = () => {
    const navigate = useNavigate();
    return (
        <>  

            <Flex flexDirection={'column'} alignItems={'center'}>
            <HStack w="full" justifyContent="space-between" alignItems="center">
                <Button mx={5} onClick={() => navigate(-1)}><ArrowBackIcon/></Button>
                <Image src={WorkWhite} justifySelf="center" />
                <ColorModeSwitcher />
            </HStack>
            <SimpleGrid columns={[1,2,3]} p={5} gap={5} w={'full'}>
                <Card className="card">
                    <CardHeader>
                        <Text fontWeight={"extrabold"} fontSize={"2xl"}>Pokemon</Text>
                        <Image src={PokemonHero} />
                    </CardHeader>
                    <CardBody > 
                    <Text>
                        This is a web application built in React.js that allows users to browse and search for information about various Pokemon characters. 
                        The project utilizes the PokeAPI to fetch data and display it in a user-friendly way.
                    </Text>
                    <Flex flexDirection={'row'} justifyContent={'flex-end'} mt={5}>
                        <Link href='https://github.com/SummonHalfa/my-pokedex-app' isExternal>
                            <Button>GitHub</Button>
                        </Link>
                    </Flex>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardHeader>TwiBooter</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader>CovidTracker</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader>AnimeQuotes</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader></CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader></CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </SimpleGrid>
            <Button variant={'outline'} colorScheme={'teal'} onClick={() => navigate(-1)}>Back to Home</Button>
            </Flex>
        </>
    );
}