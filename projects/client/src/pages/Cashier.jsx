import { Flex, Grid } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import customColors from "../themes/customColors";
import { useState } from "react";

const mainOptions = {
    bgColor: customColors.primary,
    color: customColors.textPrimary,
    fontFamily: "Fira Code",
    fontWeight: "semibold",
    w: "100vw",
    h: "100vh",
    p: "16px",
    templateColumns: "5fr 1fr",
    gap: "16px",
};

const menuOptions = {
    direction: "column",
    w: "100%",
    gap: 4,
};

function Cashier() {
    const [category, setCategory] = useState(0);
    return (
        <Grid {...mainOptions}>
            <Flex {...menuOptions}>
                <Categories setCategory={setCategory}/>
                <Products category={category}/>
            </Flex>
            <Transactions />
        </Grid>
    );
}

export default Cashier;
