import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem("token");
const CART_URL = `${BASE_URL}/cart`;
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function addCartItem(id_product) {
    try {
        const response = await axios.post(
            CART_URL,
            {
                id_product,
            },
            HEADERS
        );
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getCartItems() {
    try {
        const response = await axios.get(CART_URL, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function editCartItem(id_cart_item, id_product, qty) {
    try {
        const response = await axios.patch(
            CART_URL,
            {
                id_cart_item,
                id_product,
                qty,
            },
            HEADERS
        );
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function deleteCartItem(id_cart_item) {
    try {
        const response = await axios.delete(
            `${CART_URL}/${id_cart_item}`,
            HEADERS
        );
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function resetCart() {
    try {
        const response = await axios.delete(CART_URL, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getCartTotal() {
    try {
        const response = await axios.get(`${CART_URL}/total`, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export {
    addCartItem,
    getCartItems,
    editCartItem,
    deleteCartItem,
    resetCart,
    getCartTotal,
};
