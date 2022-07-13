import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  IconButton,
  Link,
  Progress,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Products from "./components/Products";
import Head from "next/head";

import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { motion } from "framer-motion";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Hellix';
        src: url("/fonts/Hellix-Regular.woff2") format("woff2"),
       url("/fonts/Hellix-Regular.woff") format("woff");
      }
      `}
  />
);

const theme = extendTheme({
  fonts: {
    heading: `'Hellix', sans-serif`,
    body: `'Hellix', sans-serif`,
  },
  colors: {
    primary: "#0062FF",
    text: "#B5B5BE",
    brand: {
      500: "#0062FF",
    },
  },
});

const Home: NextPage = () => {
  const productList = [
    {
      title: "Petrol",
      products: [
        {
          banner: "/banner1.png",
          price: 5,
          content:
            "50% discount for every $100 top-up on your Shell Petrol Card",
        },
        {
          banner: "/banner3.png",
          price: 1000,
          content: "70% discount top-up on your Shell Petrol Card",
        },
        {
          banner: "/banner1.png",
          price: 5,
          content:
            "50% discount for every $100 top-up on your Shell Petrol Card",
        },
        {
          banner: "/banner3.png",
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
          banner: "/banner1.png",
          price: 15,
          content: "Get $500 Rental rebate",
        },
        {
          banner: "/banner3.png",
          price: 20,
          content: "Get $20 Rental rebate",
        },
        {
          banner: "/banner1.png",
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
          banner: "/banner3.png",
          price: 5,
          content: "Free Cold Stone Sundae at any flavour!",
        },
        {
          banner: "/banner5.png",
          price: 25,
          content: "NTUC Fairprice $50 Voucher",
        },
        {
          banner: "/banner3.png",
          price: 5,
          content: "Free Cold Stone Sundae at any flavour!",
        },
      ],
    },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box>
        <Head>
          <title>Lumens</title>
          <meta name="description" content="Lumens" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box position="relative" p={6} bg="#171725" h="428px">
          <IconButton
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
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
            as={motion.h2}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut" }}
            lineHeight="40px"
            fontWeight={600}
            margin={0}
            fontSize="32px"
            color="white"
            mb={2}
          >
            Silver Tier
          </Heading>
          <Text
            as={motion.p}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut" }}
            sx={textStyled}
          >
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Text>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
            p={6}
            w="calc(100% - 48px)"
            left="24px"
            backgroundColor="white"
            backgroundImage='url("/box-background.png")'
            borderRadius="8px"
            boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
            position="absolute"
            top="216px"
          >
            <Text
              fontSize="14px"
              color="text"
              lineHeight="24px"
              fontWeight={600}
              mb={2}
            >
              Available Coin balance
            </Text>
            <Heading sx={numberHeading}>340</Heading>
            <Progress
              my={8}
              value={65}
              h="5px"
              size="sm"
              colorScheme="brand"
              borderRadius="2.5px"
            />

            <Text w="278px" sx={textStyled}>
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </Text>
            <Link mt={4} mb={6} display="flex" alignItems="center" href="#">
              <Text
                sx={{
                  color: "primary",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                View tier benefits
              </Text>
              <ChevronRightIcon color="primary" boxSize={6} />
            </Link>

            <Button
              mb={4}
              borderRadius="4px"
              w="full"
              h="60px"
              bg="#171725"
              colorScheme="blue"
            >
              My Coupons
            </Button>
            <Text
              fontWeight={400}
              lineHeight="20px"
              fontSize="sm"
              color="#B5B5BE"
              textAlign="center"
            >
              Updated : 02/11/2021
            </Text>
          </Box>
        </Box>
        <Box mb="120px" mt="200px" p={6} bg="white" h="1000px">
          {productList?.map((e, index) => (
            <Products key={index} title={e.title} products={e.products} />
          ))}
        </Box>
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          p={6}
          bg="white"
          zIndex={1999}
          borderTop="2px solid #E2E2EA"
          justifyContent="space-between"
        >
          <Button bg="transparent">
            <Image src="/home-icon.png" alt="home icon" />
          </Button>
          <Button bg="transparent">
            <Box position="relative">
              <Image src="/noti-icon.png" alt="noti icon" />
              <Box
                position="absolute"
                top="4px"
                right="4px"
                w="12px"
                h="12px"
                borderRadius="50%"
                bg="#FC5A5A"
              />
            </Box>
          </Button>
          <Button bg="transparent">
            <Image src="/news-icon.png" alt="news icon" />
          </Button>
          <Button bg="transparent">
            <Image src="/profile-icon.png" alt="profile icon" />
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Home;

export const textStyled = {
  fontSize: "16px",
  fontWeight: 400,
  color: "#B5B5BE",
  margin: 0,
  lineHeight: "24px",
};

const numberHeading = {
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "56px",
};
