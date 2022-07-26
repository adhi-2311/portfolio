import React from "react";
import projects from "../data/projects.js";
import SingleProject from "./SingleProject.js";
import {Flex} from "@chakra-ui/react";
import Header from "./Header.js";
const Projects = () => {
  return (
    <Flex
      id="projects"
      justifyContent={"center"}
      direction="column"
      gap="1em"
      margin="0 1.2em 0 1.2em"
    >
      <Header heading={"Projects"} />
      <Flex direction="column" marginTop={"-10em"} gap="2em">
        {projects.map((eachProject) => {
          return <SingleProject id={eachProject.id} project={eachProject} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Projects;
