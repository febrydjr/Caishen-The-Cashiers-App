import { Flex, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";
import { addCartItem } from "../../../api/cart";
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

function ProductCards({ products, setUpdateCarts, isEdit }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function addCart(id_product) {
        await addCartItem(id_product);
        setUpdateCarts(uuidv4());
    }

    function handleClick(id) {
        if (isEdit) return onOpen();
        return addCart(id);
    }

    return products.map((product, index) => (
        <GridItem
            {...gridOptions}
            id={product["id"]}
            key={`product-${index}`}
            bgImage={getImage(product["image"])}
            onClick={() => handleClick(product["id"])}
        >
            <Flex bottom={0} {...backdrop}>
                <Text {...titleOptions}>{product["name"]}</Text>
            </Flex>
            <EditProductModal
                key={index}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                product={product}
            />
        </GridItem>
    ));
}

export default ProductCards;
