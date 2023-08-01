import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem("token");

async function getProducts() {
    try {
        const response = await axios.get(`${BASE_URL}/products`, {
            headers : {
                Authorization: `Bearer ${TOKEN}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

async function getProduct(id) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

async function getCategories() {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

export { getProducts, getProduct, getCategories };
