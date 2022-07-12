import { Flex, Text } from "@chakra-ui/react";
import Product from "../Product";
import React from "react";

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
      <Text mt={12} mb={6} fontWeight={600} fontSize="18px">
        {title}
      </Text>
      <Flex
        sx={{
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
