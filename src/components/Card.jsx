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
  Input,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Card = ({ user }) => {
  return (
    <Accordion allowMultiple borderColor={"transparent"}>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                border="none"
                _hover={{ backgroundColor: "transparent" }}
                _focus={{ outline: "none" }}
              >
                <Box flex="1" textAlign="left">
                  <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem colSpan={1}>
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

                    <GridItem colSpan={3} pl="4">
                      <Heading pb="3">{user.name}</Heading>
                      <Text>Username: {user.username}</Text>
                      <Text>Email: {user.email}</Text>
                      <Text>Website: {user.website}</Text>
                      <Text>Company: {user.company.name}</Text>
                      <Tag mt="4" size="sm">
                        Sample Tag
                      </Tag>
                      <Input
                        type="text"
                        mt="4"
                        display="block"
                        width="300px"
                        placeholder="Add a tag"
                        onClick={(e) => e.preventDefault()}
                      />
                    </GridItem>
                  </Grid>
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" mt={"1"} />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb="3">
              <Grid templateColumns="repeat(4, 1fr)" flex="1">
                <GridItem colSpan="1" />
                <GridItem colSpan="3" pl="4">
                  <Text>Street: {user.address.street}</Text>
                  <Text>Suite: {user.address.suite}</Text>
                  <Text>City: {user.address.city}</Text>
                  <Text>Zipcode: {user.address.zipcode}</Text>
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
