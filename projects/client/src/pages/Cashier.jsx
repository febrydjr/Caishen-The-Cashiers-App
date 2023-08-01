import { Divider, Flex, Grid } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import customColors from "../themes/customColors";

const mainOptions = {
    bgColor: customColors.primary,
    w: "100vw",
    p: "12px",
};

const menuOptions = {
    direction: "column",
    gap: 4,
};

function Cashier() {
    return (
        <Grid {...mainOptions}>
            <Flex {...menuOptions}>
                <Categories />
                <Divider />
                <Products />
            </Flex>
            <Transactions />
        </Grid>
    );
}

export default Cashier;
