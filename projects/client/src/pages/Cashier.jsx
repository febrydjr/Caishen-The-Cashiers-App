import { Flex, Grid } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import customColors from "../themes/customColors";
import { useState } from "react";
import Navbar from "../components/Navbar"

const mainOptions = {
    bgColor: customColors.primary,
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
    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Grid {...mainOptions}>
                <Flex {...menuOptions}>
                    <Categories setCategory={setCategory} setPage={setPage} />
                    <Products
                        category={category}
                        page={page}
                        title={searchQuery}
                        setPage={setPage}
                    />
                </Flex>
                <Transactions />
            </Grid>
        </>
    );
}

export default Cashier;
