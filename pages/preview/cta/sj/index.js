import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Sj() {
  return (
    <Flex
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={20}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg={useColorModeValue("gray.50", "gray.800")}>
        <Box
          maxW="7xl"
          w="5xl"
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            textShadow="2px 0 currentcolor"
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.600", "gray.500")}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <Flex mt={{ base: 8, lg: 0 }} shrink={{ lg: 0 }}>
            <Box display="inline-flex" borderRadius="md" boxShadow="md">
              <chakra.a
                href="#"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                borderRadius="md"
                color={useColorModeValue("white")}
                bg={useColorModeValue("brand.600", "brand.500")}
                _hover={{
                  bg: useColorModeValue("brand.700", "brand.600"),
                }}
              >
                Get started
              </chakra.a>
            </Box>
            <Box ml={3} display="inline-flex" borderRadius="md" boxShadow="md">
              <chakra.a
                href="#"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                borderRadius="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Learn more
              </chakra.a>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}