import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";

const SingleProject = ({ project }) => {
  const { title, link, sourceCode, techStack, about, imageSrc } = project;
  return (
    <Flex justifyContent="center" paddingLeft={"3em"} paddingRight={"3em"}>
      <Box
        maxW={"500em"}
        minH={"20em"}
        w={"auto"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={6}
        overflow={"hidden"}
        border={"1px"}
        borderColor={"#88B8BD"}
        shadow="md"
      >
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text maxW={"40em"}>{about}</Text>

          <ButtonGroup
            paddingTop="6em"
            display={"flex"}
            flexWrap={"wrap"}
            rowGap="0.5em"
          >
            {techStack.map((eachStack) => {
              return (
                <Button variant="outline" colorScheme="cyan">
                  {eachStack}
                </Button>
              );
            })}
          </ButtonGroup>

          <ButtonGroup>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href={sourceCode}
              target="_blank"
            >
              <Button
                width="9em"
                leftIcon={<AiFillGithub />}
                colorScheme="purple"
                variant="outline"
              >
                Source Code
              </Button>
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href={link}
              target="_blank"
            >
              <Button
                width="9em"
                leftIcon={<RiExternalLinkFill />}
                colorScheme="purple"
                variant="solid"
              >
                Demo
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SingleProject;
