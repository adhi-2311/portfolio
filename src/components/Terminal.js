import React from "react";
import { Text, Box, Circle, Flex, useColorModeValue } from "@chakra-ui/react";
import TerminalEntry from "./TerminalEntry";
import infos from "../data/infos.js";
const Terminal = () => {
  return (
    <Flex
      id="about"
      direction="column"
      justifyContent="center"
      paddingLeft={"3em"}
      paddingRight={"3em"}
    >
      <Flex justify={"center"}>
        <Box
          width={"70vw"}
          p={4}
          border={"1px"}
          borderColor={"#e4e3e5"}
          bg={useColorModeValue("gray.300", "#88B8BD")}
          borderRadius="0.6em 0.6em 0 0"
          display={"flex"}
        >
          <Circle size={"0.8em"} bg="red"></Circle>
          <Circle size={"0.8em"} bg="yellow.300" marginLeft={"0.8em"}></Circle>
          <Circle size={"0.8em"} bg="green" marginLeft={"0.8em"}></Circle>
        </Box>
      </Flex>
      <Flex justify={"center"}>
        <Box
          borderBottomRadius={"0.6em"}
          height={"60vh"}
          width={"70vw"}
          bg={useColorModeValue("#88B8BD", "gray.700")}
          p={4}
          border={"1px"}
          borderColor={"#88B8BD"}
          display={"flex"}
        >
          <Flex width={"70vw"}>
            <Text fontFamily={"monospace"} fontSize="1.4vw">
              {infos.map((info) => {
                return (
                  <>
                    <TerminalEntry
                      id={info.id}
                      command={info.command}
                      output={info.output}
                    />
                    <span>&nbsp;</span>
                  </>
                );
              })}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Terminal;
