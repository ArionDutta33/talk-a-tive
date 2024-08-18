import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
const Homepage = () => {
    return (
        <Container maxW={"xl"} centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius='lg' // Use 'lg' for large border radius
                borderWidth='1px'
            >
                <Text fontSize="4xl" color="black" textAlign="center"> Talk-A-Tive</Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
                <Tabs variant='soft-rounded'  >
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Signup</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default Homepage;
