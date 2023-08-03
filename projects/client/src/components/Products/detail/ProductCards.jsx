import { Flex, GridItem, Text } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";

const gridOptions = {
    w: "180px",
    h: "180px",
    pos: "relative",
    borderRadius: "4px",
    bgPos: "center",
    bgSize: "cover",
    overflow: "hidden",
};

const titleOptions = {
    color: customColors.textPrimary,
    textAlign: "center",
    noOfLines: 2,
};

const backdrop = {
    w: "100%",
    h:"32%",
    px: "4px",
    pos: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bgColor: "#00000066",
    backdropFilter: "blur(2px)"
};

function ProductCards({ products }) {
    return products.map((product, index) => (
        <GridItem
            {...gridOptions}
            id={product["id"]}
            key={index}
            bgImage={getImage(product["image"])}
        >
            <Flex bottom={0} {...backdrop}>
                <Text {...titleOptions}>{product["name"]}</Text>
            </Flex>
        </GridItem>
    ));
}

export default ProductCards;
