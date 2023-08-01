import { GridItem, Text } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import { useState } from "react";

const gridOptions = {
    w: "180px",
    h: "180px",
    bgColor: customColors.secondary,
    borderRadius: "4px",
};

function ProductCards({ data }) {
    if (!data["products"]) return <></>;
    return data["products"].map((product, index) => (
        <GridItem {...gridOptions} id={product["id"]} key={index} >
            {/* {product["name"]} */}
            {/* <Text>{product["name"]}</Text> */}
        </GridItem>
    ));
}

export default ProductCards;
