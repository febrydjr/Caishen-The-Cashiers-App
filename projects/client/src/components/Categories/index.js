import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryCards from "./detail/CategoryCards";
import { getCategories } from "../../api/product";

const options = {
    w: "fit-content",
    gap: 4,
    autoFlow: "column",
    templateRows: "repeat(2, 1fr)",
};

async function fetchCategories(setCategories) {
    const { data } = await getCategories();
    setCategories(data);
}

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories(setCategories);
    }, []);

    return (
        <Grid {...options}>
            <CategoryCards categories={categories} />
        </Grid>
    );
}

export default Categories;
