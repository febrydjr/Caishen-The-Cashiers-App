import { Flex } from "@chakra-ui/react";
import Cart from "./detail/Cart";
import Checkout from "./detail/Checkout";

const containerOptions = {
    bgColor: "white",
    // flexDirection: "column",
}

function Transactions(){
    return (
        <Flex {...containerOptions}>
            <Cart />
            <Checkout />
        </Flex>
    )
}

export default Transactions;