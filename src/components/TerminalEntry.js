import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
const TerminalEntry = ({ command, output }) => {
  return (
    <>
      <Text color={useColorModeValue("black", "#88B8BD")} display="flex" flexWrap={"wrap"}>{command}</Text>
      <Text color={useColorModeValue("purple.800", "yellow.300")} display="flex" flexWrap={"wrap"}>
        {output}
      </Text>
    </>
  );
};

export default TerminalEntry;
