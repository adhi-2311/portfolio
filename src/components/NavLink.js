import React from "react";
import { Text } from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const NavLink = ({ link }) => {
  const { id, url, text } = link;

  return (
    <AnchorLink id={id} href={url}>
      <Text fontSize="large" fontWeight={"10px"}>
        {text}
      </Text>
    </AnchorLink>
  );
};
export default NavLink;
