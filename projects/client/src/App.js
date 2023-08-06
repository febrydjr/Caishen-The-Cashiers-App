import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import AdminDashboard from "./pages/AdminDashboard";
import { Box } from "@chakra-ui/react";
import {breakpoints} from "./themes/theme"

const theme = extendTheme({breakpoints});

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
    <ChakraProvider theme={theme}>
      <Box w={"100vw"} overflowX="hidden">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cashier" element={<Cashier/>}/>
        <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
