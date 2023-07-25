import { Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import WorkWhite from "../images/works_white.png"
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { ArrowBackIcon } from "@chakra-ui/icons";

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
                <Card>
                    <CardHeader>Pokedex</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader>TwiBooter</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader>CovidTracker</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader>AnimeQuotes</CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody></CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
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