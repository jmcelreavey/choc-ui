import React from "react";
import { Text, Box, Link, useColorModeValue } from "@chakra-ui/react";

export const linkStyle = {
  textDecoration: "underline",
};

export const PageHeader = (props) => {
  return (
    <Text
      fontSize="2xl"
      mb={2}
      textTransform="capitalize"
      fontWeight="700"
      {...props}
    />
  );
};

export const Section = (props) => {
  return (
    <Box
      mt={8}
      border="solid transparent"
      shadow="md"
      rounded="lg"
      {...props}
    />
  );
};
Section.Header = (props) => {
  return (
    <Box
      fontSize="xl"
      fontWeight="semibold"
      w="full"
      textTransform="capitalize"
      bg={useColorModeValue("brand.100", "gray.700")}
      roundedTop="lg"
      px={5}
      py={3}
      {...props}
    />
  );
};
Section.Content = (props) => {
  return <Box fontSize="md" mt="3" {...props} />;
};
Section.p = (props) => <Box pt={2} {...props} />;
Section.a = (props) => <Link {...props} />;
