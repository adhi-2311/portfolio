import { Heading } from "@chakra-ui/react";
const Header = ({ heading }) => {
  return (
    <Heading
      alignSelf={"center"}
      marginTop={"1em"}
      fontSize={"3em"}
      fontWeight={"bold"}
      marginBottom={"4em"}
    >
      {heading}
      <Heading
        width="5rem"
        height="0.25rem"
        marginBottom="1.25rem"
        background="#88B8BD"
        marginLeft="auto"
        marginRight="auto"
      ></Heading>
    </Heading>
  );
};
export default Header;
