import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Card = () => {
  return (
    <Accordion allowMultiple borderColor={"transparent"}>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                border="none"
                _hover={{ backgroundColor: "transparent" }}
              >
                <Box flex="1" textAlign="left">
                  <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem colSpan={1} bg="tomato">
                      <Center
                        justifyItems={"center"}
                        alignItems={"center"}
                        p={"6"}
                      >
                        <Image
                          borderRadius="full"
                          boxSize="150px"
                          src="https://i.pravatar.cc/150"
                          alt="user"
                        />
                      </Center>
                    </GridItem>

                    <GridItem colSpan={3} bg="papayawhip" pl="4" py={"6"}>
                      <Heading pb="5">User Name</Heading>
                      <Text>Username: Test username</Text>
                      <Text>Email: Test email</Text>
                      <Text>Website: Test website</Text>
                      <Text>Company: Test Compnay</Text>
                      <Tag mt="4" size="sm">
                        Sample Tag
                      </Tag>
                    </GridItem>

                    {/* <GridItem></GridItem> */}
                  </Grid>
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" mt={"1"} />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid templateColumns="repeat(4, 1fr)" flex="1">
                <GridItem colSpan="1" />
                <GridItem colSpan="3" pl="4">
                  <Text>Street: Sample Street</Text>
                  <Text>Suite: Sample Suite</Text>
                  <Text>City: Sample City</Text>
                  <Text>Zipcode:Sample Zipcode</Text>
                </GridItem>
              </Grid>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Card;
