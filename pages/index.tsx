import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  IconButton,
  Link,
  Progress,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Products from "./components/Products";
import Head from "next/head";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    primary: "#0062FF",
    brand: {
      500: "#0062FF",
    },
  },
});

const productList = [
  {
    title: "Petrol",
    products: [
      {
        banner: "/banner1.png",
        price: 5,
        content: "50% discount for every $100 top-up on your Shell Petrol Card",
      },
      {
        banner: "/banner2.png",
        price: 1000,
        content: "70% discount top-up on your Shell Petrol Card",
      },
      {
        banner: "/banner1.png",
        price: 5,
        content: "50% discount for every $100 top-up on your Shell Petrol Card",
      },
      {
        banner: "/banner2.png",
        price: 1000,
        content: "70% discount top-up on your Shell Petrol Card",
      },
    ],
  },
  {
    title: "Rental Rebate",
    products: [
      {
        banner: "/banner3.png",
        price: 20,
        content: "Get $20 Rental rebate",
      },
      {
        banner: "/banner4.png",
        price: 15,
        content: "Get $500 Rental rebate",
      },
      {
        banner: "/banner3.png",
        price: 20,
        content: "Get $20 Rental rebate",
      },
      {
        banner: "/banner4.png",
        price: 15,
        content: "Get $500 Rental rebate",
      },
    ],
  },
  {
    title: "Food and Beverage",
    products: [
      {
        banner: "/banner5.png",
        price: 25,
        content: "NTUC Fairprice $50 Voucher",
      },
      {
        banner: "/banner6.png",
        price: 5,
        content: "Free Cold Stone Sundae at any flavour!",
      },
      {
        banner: "/banner5.png",
        price: 25,
        content: "NTUC Fairprice $50 Voucher",
      },
      {
        banner: "/banner6.png",
        price: 5,
        content: "Free Cold Stone Sundae at any flavour!",
      },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Head>
          <title>Lumens</title>
          <meta name="description" content="Lumens" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box position="relative" p={6} bg="#171725" h="428px">
          <IconButton
            bg="white"
            borderRadius="50%"
            border="none"
            w={10}
            h={10}
            aria-label="Back"
            mb={4}
            icon={<ChevronLeftIcon boxSize={6} />}
          />
          <Heading
            lineHeight="40px"
            fontWeight={600}
            margin={0}
            fontSize="lg"
            color="white"
          >
            Silver Tier
          </Heading>
          <Text sx={textStyled}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Text>
          <Box
            p={6}
            w="343px"
            bg="white"
            borderRadius="8px"
            boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
            h="416px"
            position="absolute"
            top="216px"
          >
            <Text sx={textStyled}>Available Coin balance</Text>
            <Heading sx={numberHeading}>340</Heading>
            <Progress
              my={8}
              value={80}
              size="sm"
              colorScheme="brand"
              borderRadius="2.5px"
            />

            <Text w="278px" sx={textStyled}>
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </Text>

            <Flex mt={4} mb={6} alignItems="center">
              <Link href="#">
                <Text
                  sx={{
                    color: "primary",
                    fontWeight: 400,
                  }}
                >
                  View tier benefits
                </Text>
              </Link>
              <ChevronRightIcon color="primary" boxSize={6} />
            </Flex>

            <Button mb={4} w="full" h="60px" bg="#171725" colorScheme="blue">
              My Coupons
            </Button>
            <Text fontSize="sm" color="#B5B5BE" textAlign="center">
              Updated : 02/11/2021
            </Text>

            {/* <Box
            position="absolute"
            top={0}
            left={0}
            w="343px"
            h="416px"
            bg='url("/box-background.png")'
          /> */}
          </Box>
        </Box>
        <Box mt="208px" p={6} bg="white" h="1000px">
          {productList.map((e, index) => (
            <Products key={index} title={e.title} products={e.products} />
          ))}
        </Box>
        <Box h="40px" />
      </Box>
    </ChakraProvider>
  );
};

export default Home;

export const textStyled = {
  fontSize: "md",
  fontWeight: "normal",
  color: "#B5B5BE",
  margin: 0,
};

const numberHeading = {
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "56px",
};
