import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Product from "../Product";

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
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Products;
