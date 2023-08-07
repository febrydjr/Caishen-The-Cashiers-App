import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem("token");
const TRANSACTION_URL = `${BASE_URL}/transactions`;
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function addTransaction(total, products) {
    try {
        const response = await axios.post(TRANSACTION_URL, {}, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export { addTransaction };
