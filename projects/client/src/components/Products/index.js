import { Divider, Grid, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
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

function Products({ category = 0, page = 0, setPage, isEdit = false }) {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [filter, setFilter] = useState("name");
    const [maxPage, setMaxPage] = useState(1);

    const productsRef = useRef();

    function onProductsScroll() {
        if (productsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                productsRef.current;
            // console.log(scrollWidth, scrollLeft, clientWidth)
            if (scrollLeft + clientWidth === scrollWidth && page < maxPage)
                setPage(page + 1);
        }
    }

    async function fetchProducts() {
        const queries = {
            order_by: filter,
            order,
            page,
            limit: 6,
        };
        if (category !== 0) queries["id_category"] = category;
        const { data } = await getProducts(queries);
        setMaxPage(data["pages"]);
        setProducts(
            page <= 1 ? data["products"] : [...products, ...data["products"]]
        );
    }

    useEffect(() => {
        fetchProducts({});
        console.log(products);
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
                    setPage={setPage}
                />
            </HStack>
            <Grid {...options} onScroll={onProductsScroll} ref={productsRef}>
                <ProductCards products={products} isEdit={isEdit}/>
            </Grid>
        </>
    );
}

export default Products;
