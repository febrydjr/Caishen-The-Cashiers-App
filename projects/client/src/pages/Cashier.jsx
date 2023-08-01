import { Divider, Flex, Grid } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import customColors from "../themes/customColors";

const mainOptions = {
    bgColor: customColors.primary,
    w: "100vw",
}

const menuOptions = {
    direction: "column",
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
