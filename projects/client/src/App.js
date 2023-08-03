import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import AdminDashboard from "./pages/AdminDashboard";
import CashierManage from "./components/CashierManage";
import ProfilePage from "./pages/ProfilePage";
import { Box } from "@chakra-ui/react";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/greetings`
  //     );
  //     setMessage(data?.message || "");
  //   })();
  // }, []);
  return (
    <>
      <Box w={"100vw"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
