import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import ProductCards from "./detail/ProductCards";

const options = {
    w: "fit-content",
    gap: 4,
    autoFlow: "column",
    templateRows: "repeat(3, 1fr)",
};

async function fetchProducts(setProducts) {
    const {data} = await getProducts();
    setProducts(data);
}

function Products() {
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    return <Grid {...options}>
        <ProductCards data={products}/>
    </Grid>;
}

export default Products;
