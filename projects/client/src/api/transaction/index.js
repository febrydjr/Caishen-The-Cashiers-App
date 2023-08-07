import axios from "axios";
import Notification from "../Notification";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem("token");
const TRANSACTION_URL = `${BASE_URL}/transactions`;
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function addTransaction(toast) {
    try {
        const response = await axios.post(TRANSACTION_URL, {}, HEADERS);
        Notification(toast, {
            title: response.data.message,
            status: response.status,
        });
        return response.data;
    } catch (error) {
        Notification(toast, {
            title: error.response.data.message,
            status: error.response.status,
        });
    }
}

export { addTransaction };
