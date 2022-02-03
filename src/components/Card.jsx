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
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import AddTagForm from "./AddTagForm";

const Card = ({ user }) => {
  return (
    <Accordion allowMultiple borderColor={"transparent"} mb="20">
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
                        p={"4"}
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
                      {(user?.tags || []).map((tag, index) => (
                        <Tag key={index} mt="4" size="sm" mr="2">
                          {tag}
                        </Tag>
                      ))}

                      {/* ADD TAG FORM */}
                      <AddTagForm userId={user.id} />
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
