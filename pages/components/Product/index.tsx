import React from "react";
import { IProduct } from "../Products";
import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";
import { textStyled } from "../..";
interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { price, banner, content } = product || {
    price: 0,
    banner: "",
    content: "",
  };
  const userBallance = 200;
  const isInsufficient = userBallance < price;
  return (
    <Box
      w={200}
      minHeight={240}
      border="1px solid #F1F1F5"
      borderRadius="4px"
      overflow="hidden"
      boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
      flexShrink={0}
      mr={6}
    >
      <Image h={98} src={banner} alt="banner" />
      <Box p={4} h="full">
        {isInsufficient ? (
          <Flex mb={2} alignItems="center">
            <Box mr={1}>
              <Image src="/limitCoin.png" alt="limitCoin" />
            </Box>
            <Text sx={coinPrice} color="#696974">
              {price} Coins
            </Text>
          </Flex>
        ) : (
          <Text sx={coinPrice} mb={2} color="primary">
            {price} Coins
          </Text>
        )}

        <Text sx={textStyled}>{content}</Text>
        {isInsufficient && (
          <Link href="#">
            <Text
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              color="primary"
            >
              Insufficient coins
            </Text>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Product;

const coinPrice = {
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 600,
};
