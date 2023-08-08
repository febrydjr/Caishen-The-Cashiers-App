import { Flex, GridItem, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";
import ProductCard from "./ProductCard";

function ProductCards({ products, setUpdateCarts, isEdit }) {
    return products.map((product, index) => (
        <ProductCard product={product} setUpdateCarts={setUpdateCarts} isEdit={isEdit} key={index}/>
    ));
}

export default ProductCards;
