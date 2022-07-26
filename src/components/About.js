import React from "react";
import { Stack, Link, Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { about } from "../data/about";
import { useMediaQuery } from "@chakra-ui/media-query";
import Terminal from "./Terminal";
const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 780px)");
  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box
          mt={isNotSmallerScreen ? "0" : 16}
          ml={isNotSmallerScreen ? "0" : "1.5em"}
          align="flex-start"
        >
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, cyan.500, green.600)"
            bgClip="text"
          >
            Adhisikha Patnaik
          </Text>
          <Text>{about}</Text>
          <Link
            href={
              "https://drive.google.com/file/d/1vckpE-6EQvMwvrRCNhme5q-EbTDRe9pH/view?usp=sharing"
            }
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button mt={8} colorScheme="blue">
              Hire Me
            </Button>
          </Link>
        </Box>
        <Image
          marginLeft={"1.5em"}
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/56517351?v=4"
        />
      </Flex>
      <Terminal />
    </Stack>
  );
};

export default About;
