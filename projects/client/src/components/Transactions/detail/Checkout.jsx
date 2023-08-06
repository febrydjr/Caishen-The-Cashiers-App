import { Flex, Spacer, Text } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import { getCartTotal } from "../../../api/cart";
import { useEffect, useState } from "react";

const mainOptions = {
    bgColor: customColors.secondary,
    direction: "column",
    borderRadius: "8px",
    gap: 4,
    flexGrow: 1,
    flexBasis: "fit-content",
    p: "12px",
};

const orderOptions = {
    bgColor: customColors.textSecondary,
    color: customColors.primary,
    h: "3.2em",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
};

const textOptions = {
    fontSize: "1.2em",
};

function priceFormater(price) {
    let formatted = "";
    price = String(price);
    while (price.length > 0) {
        formatted = price.slice(-3) + formatted;
        if (price.length > 3) formatted = "." + formatted;
        price = price.slice(0, -3);
    }

    return formatted;
}

function Checkout({ updateCarts }) {
    const [total, setTotal] = useState(0);

    async function getTotal() {
        const { data } = await getCartTotal();
        setTotal(data["total"]);
    }

    useEffect(() => {
        getTotal();
    }, [updateCarts]);

    return (
        <Flex {...mainOptions}>
            <Flex {...textOptions}>
                <Text>Total</Text>
                <Spacer />
                <Text>{priceFormater(total)}</Text>
            </Flex>
            <Spacer />
            <Flex {...orderOptions}>
                <Text {...textOptions}>Order</Text>
            </Flex>
        </Flex>
    );
}

export default Checkout;
