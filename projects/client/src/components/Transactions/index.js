import { Flex } from "@chakra-ui/react";
import Cart from "./detail/Cart";
import Checkout from "./detail/Checkout";
import customColors from "../../themes/customColors";

const fontOptions = {
    color: customColors.textPrimary,
    fontFamily: "Fira Code",
    fontWeight: "semibold",
}

const containerOptions = {
    bgColor: customColors.secondary,
    direction: "column",
}

function Transactions(){
    return (
        <Flex {...containerOptions} {...fontOptions}>
            <Cart />
            <Checkout />
        </Flex>
    )
}

export default Transactions;