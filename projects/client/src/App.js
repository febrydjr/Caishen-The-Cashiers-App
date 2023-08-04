import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";
import ResetPassword from "./pages/ResetPassword";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"100vw"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
