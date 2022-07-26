import {
  Flex,
  Button,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { contacts } from "../data/contacts";
import Header from "./Header";
const Contact = () => {
  return (
    <Flex
      id="contact"
      justifyContent={"center"}
      direction="column"
      gap="2em"
      margin="0 1.5em 0 1.5em"
    >
      <Header heading={"Contact Me"} />
      <ButtonGroup justifyContent={"center"} marginTop="-13em" gap="1em">
        {contacts.map((eachContact) => {
          const { id, url, icon } = eachContact;
          return (
            <Link
              id={id}
              _hover={{
                textDecoration: "none",
              }}
              href={url}
              target="_blank"
            >
              <Button
                id={id}
                width="2em"
                leftIcon={icon}
                variant="ghost"
                _hover={{
                  textDecoration: "none",
                }}
              ></Button>
            </Link>
          );
        })}
      </ButtonGroup>
    </Flex>
  );
};

export default Contact;
