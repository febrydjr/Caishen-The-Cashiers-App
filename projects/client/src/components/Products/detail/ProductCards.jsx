import { Flex, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";
import EditProductModal from "./EditProductModal";

const gridOptions = {
    w: "180px",
    h: "180px",
    pos: "relative",
    borderRadius: "4px",
    bgPos: "center",
    bgSize: "cover",
    overflow: "hidden",
    cursor: "pointer",
};

const titleOptions = {
    color: customColors.textPrimary,
    textAlign: "center",
    noOfLines: 2,
};

const backdrop = {
    w: "100%",
    h: "32%",
    px: "4px",
    pos: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bgColor: "#00000066",
    backdropFilter: "blur(2px)",
};

function ProductCards({ products, isEdit }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleClick() {
        if (isEdit) onOpen();
    }

    return products.map((product, index) => (
        <>
            <GridItem
                {...gridOptions}
                id={product["id"]}
                key={index}
                bgImage={getImage(product["image"])}
                onClick={() => handleClick()}
            >
                <Flex bottom={0} {...backdrop}>
                    <Text {...titleOptions}>{product["name"]}</Text>
                </Flex>
            </GridItem>
            <EditProductModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                product={product}
            />
        </>
    ));
}

export default ProductCards;
