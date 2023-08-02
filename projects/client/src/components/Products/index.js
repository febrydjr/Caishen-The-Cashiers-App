import { Divider, Grid, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import ProductCards from "./detail/ProductCards";
import Filter from "./detail/Filter";

const options = {
    w: "fit-content",
    maxW: "calc(100vw - ((100vw - 32px) / 6)) ",
    gap: 4,
    autoFlow: "column",
    templateRows: "repeat(2, 1fr)",
    overflowX: "scroll",
    css: {
        "&::-webkit-scrollbar": { display: "none" },
    },
};

const titleOptions = {
    fontSize: "1.2em",
};

function Products({ category }) {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [filter, setFilter] = useState("name");
    const [page, setPage] = useState(1);

    async function fetchProducts() {
        const queries = {
            order_by: filter,
            order,
            page,
        };
        if (category !== 0) queries["id_category"] = category;
        const { data } = await getProducts(queries);
        setProducts(data.products);
    }

    useEffect(() => {
        fetchProducts();
    }, [category, filter, order, page]);

    return (
        <>
            <HStack>
                <Text {...titleOptions}>Products</Text>
                <Divider />
                <Filter
                    order={order}
                    setOrder={setOrder}
                    setFilter={setFilter}
                />
            </HStack>
            <Grid {...options}>
                <ProductCards products={products} />
            </Grid>
        </>
    );
}

export default Products;
