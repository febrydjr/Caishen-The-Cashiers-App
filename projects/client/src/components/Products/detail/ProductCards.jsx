import { Flex, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";
import EditProductModal from "./EditProductModal";

const gridOptions = {
  w: "160px",
  h: "160px",
  pos: "relative",
  borderRadius: "4px",
  bgPos: "center",
  bgSize: "cover",
  overflow: "hidden",
};

const titleOptions = {
  color: customColors.textPrimary,
  fontFamily: "Fira Code",
  fontWeight: "semibold",
  textAlign: "center",
  noOfLines: 2,
};

const backdrop = {
  w: "100%",
  h: "28%",
  pos: "absolute",
  alignItems: "center",
  justifyContent: "center",
  bgColor: "#00000066",
  backdropFilter: "blur(2px)",
};

function ProductCards({ products }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return products.map((product, index) => (
    <>
      <GridItem
        {...gridOptions}
        id={product["id"]}
        key={index}
        bgImage={getImage(product["image"])}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Flex bottom={0} {...backdrop}>
          <Text {...titleOptions}>{product["name"]}</Text>
        </Flex>
      </GridItem>
      <EditProductModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        productId={product["id"]}
      />
    </>
  ));
}

export default ProductCards;
