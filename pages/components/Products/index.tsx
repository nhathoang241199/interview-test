import { Flex, Text } from "@chakra-ui/react";
import Product from "../Product";
import React from "react";
import { motion } from "framer-motion";

export interface IProduct {
  banner: string;
  price: number;
  content: string;
}

interface IProducts {
  title: string;
  products: IProduct[];
}
const Products = ({ title, products }: IProducts) => {
  return (
    <Flex direction="column">
      <Text
        as={motion.p}
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut" }}
        lineHeight="24px"
        fontWeight={600}
        fontSize="18px"
      >
        {title}
      </Text>
      <Flex
        sx={{
          pb: 12,
          pt: 6,
          overflowX: "auto",
          maxW: "full",
        }}
      >
        {React.Children.toArray(
          products?.map((product) => {
            if (product) return <Product product={product} />;
          })
        )}
      </Flex>
    </Flex>
  );
};

export default Products;
