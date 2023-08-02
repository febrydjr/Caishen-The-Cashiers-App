import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem("token");

function createQuery(queries){
    // title, id_category, order_by, order, page=1, limit=10
    if(!queries["page"]) queries["page"] = 1;
    if(!queries["limit"]) queries["limit"] = 10;
    let query = "";
    for (const key in queries) {
        query += `${key}=${queries[key]}&`;
    }
    return query.replace(/&$/, "");
}

async function getProducts(queries) {
    const query = createQuery(queries);

    try {
        const response = await axios.get(
            `${BASE_URL}/products?${query}`, 
            {
            headers : {
                Authorization: `Bearer ${TOKEN}`,
            }
        });
        return response.data;
    } catch (error) {
    }
}

async function getProduct(id) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
    }
}

async function getCategories() {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    } catch (error) {
    }
}

export { getProducts, getProduct, getCategories };
