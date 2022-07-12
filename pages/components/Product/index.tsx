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
      border="1px solid #F1F1F5"
      boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
      borderRadius="4px"
      flexShrink={0}
      mr={6}
    >
      <Box w="full" h={98}>
        <Image objectFit="cover" w="full" h={98} src={banner} alt="banner" />
      </Box>
      <Box p={4}>
        {isInsufficient ? (
          <Flex mb={2} alignItems="center">
            <Box mr={1}>
              <Image src="/limitCoin.png" alt="limitCoin" />
            </Box>
            <Text fontWeight={600} color="#696974">
              {price} Coins
            </Text>
          </Flex>
        ) : (
          <Text mb={2} fontWeight={600} color="primary">
            {price} Coins
          </Text>
        )}

        <Text sx={textStyled}>{content}</Text>
        {isInsufficient && (
          <Link href="#">
            <Text sx={{ ...textStyled, color: "primary" }}>
              Insufficient coins
            </Text>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Product;
