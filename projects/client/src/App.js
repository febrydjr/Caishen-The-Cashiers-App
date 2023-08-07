import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";
import ResetPassword from "./pages/ResetPassword";
import NotAuthorized from "./pages/NotAuthorized";
import NotFound from "./pages/NotFound";
import { Box } from "@chakra-ui/react";
import { breakpoints } from "./themes/theme";

const theme = extendTheme({ breakpoints });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w={"100vw"} overflowX="hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/403" element={<NotAuthorized />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
