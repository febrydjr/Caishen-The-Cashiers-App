import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";

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
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
