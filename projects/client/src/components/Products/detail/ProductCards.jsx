import ProductCard from "./ProductCard";

function ProductCards({ products, setUpdateCarts, isEdit }) {  
    return products.map((product, index) => (
        <ProductCard product={product} setUpdateCarts={setUpdateCarts} isEdit={isEdit} key={index}/>
    ));
}

export default ProductCards;
