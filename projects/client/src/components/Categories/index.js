import { Divider, Grid, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryCards from "./detail/CategoryCards";
import { getCategories } from "../../api/product";

const options = {
    w: "fit-content",
    maxW: "calc(100vw - ((100vw - 32px) / 6)) ",
    gap: 4,
    overflowX: "scroll",
    css: {
        "&::-webkit-scrollbar": { display: "none" },
    },
};

const titleOptions = {
    fontSize: "1.2em",
};

function setOptions(editCategory) {
    if (editCategory) options["templateColumns"] = "repeat(6, 1fr)";
    else options["templateRows"] = "repeat(2, 1fr)";
    options["autoFlow"] = editCategory ? "row" : "column";
}

function Categories({ editCategory = false, setCategory, setPage }) {
    const [categories, setCategories] = useState([{ id: 0, name: "All" }]);

    async function fetchCategories() {
        const { data } = await getCategories();
        setCategories([...categories, ...data]);
    }

    setOptions(editCategory);

    useEffect(() => {
        fetchCategories(setCategories);
    }, []);

    return (
        <>
            <HStack>
                <Text {...titleOptions}>Categories</Text>
                <Divider />
            </HStack>
            <Grid {...options}>
                <CategoryCards
                    categories={categories}
                    setCategory={setCategory}
                    setPage={setPage}
                />
            </Grid>
        </>
    );
}

export default Categories;
