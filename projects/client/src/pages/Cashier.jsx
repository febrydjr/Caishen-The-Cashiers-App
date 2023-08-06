import { Flex } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import customColors from "../themes/customColors";
import { useState } from "react";
import Navbar from "../components/Navbar";

const mainOptions = {
    bgColor: customColors.primary,
    w: "100vw",
    h: "fit-content",
    minW: "100vw",
    minH: "100vh",
    p: "16px",
    gap: "16px",
};

const menuOptions = {
    direction: "column",
    w: "100%",
    maxW: {
        md: "56vw",
        lg: "70vw",
    },
    gap: 4,
};

function Cashier() {
    const [category, setCategory] = useState(0);
    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const [updateCarts, setUpdateCarts] = useState("");

    return (
        <>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Flex {...mainOptions}>
                <Flex {...menuOptions}>
                    <Categories setCategory={setCategory} setPage={setPage} />
                    <Products
                        category={category}
                        page={page}
                        title={searchQuery}
                        setPage={setPage}
                        setUpdateCarts={setUpdateCarts}
                    />
                </Flex>
                <Transactions
                    updateCarts={updateCarts}
                    setUpdateCarts={setUpdateCarts}
                />
            </Flex>
        </>
    );
}

export default Cashier;
