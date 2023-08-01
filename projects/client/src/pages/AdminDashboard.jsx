import {
  Box,
  Text,
  Flex,
  VStack,
  Divider,
  Link,
  Button,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { TbGraph } from "react-icons/tb";
import axios from "axios";
import CashierManage from "../components/CashierManage";

const AdminDashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cashiers, setCashiers] = useState([]);

  const handleMenuClick = () => {
    setSelectedItem("THIS IS MENU");
  };

  const handleCashierManageClick = () => {
    // setSelectedItem("THIS IS CASHIER MANAGE");
    fetchCashiers();
  };

  const handleProductManageClick = () => {
    setSelectedItem("THIS IS PRODUCT MANAGE");
  };

  const handleReportClick = () => {
    setSelectedItem("THIS IS REPORT");
  };

  const fetchCashiers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/profile/cashiers"
      );
      setCashiers(response.data.data);
    } catch (error) {
      console.error("Error fetching cashiers:", error.message);
    }
  };

  useEffect(() => {
    fetchCashiers();
  }, []);

  return (
    <Box bgColor={"#2D2D2D"} borderRadius={20}>
      <Navbar />
      <Flex>
        <Box
          bg="#2A2B2E"
          color="white"
          width="220px"
          p="6"
          fontWeight="bold"
          h={"100vh"}
          fontFamily="Fira Code"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <VStack spacing="8" align="stretch">
            <Text
              bg={"white"}
              p={2}
              color="black"
              mb={4}
              borderRadius={8}
              textAlign="center"
            >
              ADMIN DASHBOARD
            </Text>
            <Link onClick={handleMenuClick}>
              <Flex
                gap={6}
                justifyContent={"left"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row"}
              >
                <BsMenuButtonWideFill size={"40px"} />
                <Text _hover={{ color: "#FAC1D9" }} color="white">
                  MENU
                </Text>
              </Flex>
            </Link>
            <Link>
              <Flex
                gap={4}
                justifyContent={"left"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row"}
              >
                <MdManageAccounts size={"60px"} />
                <Text
                  _hover={{ color: "#C2E9DD" }}
                  color="white"
                  onClick={handleCashierManageClick}
                >
                  CASHIER MANAGE
                </Text>
              </Flex>
            </Link>
            <Link>
              <Flex
                gap={6}
                justifyContent={"left"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row"}
              >
                <FiBox size={"50px"} />
                <Text
                  _hover={{ color: "#C9CAEF" }}
                  color="white"
                  onClick={handleProductManageClick}
                >
                  PRODUCT MANAGE
                </Text>
              </Flex>
            </Link>
            <Link>
              <Flex
                gap={6}
                justifyContent={"left"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row"}
              >
                <TbGraph size={"40px"} />
                <Text
                  _hover={{ color: "#E4CDED" }}
                  color="white"
                  onClick={handleReportClick}
                >
                  REPORT
                </Text>
              </Flex>
            </Link>
          </VStack>
        </Box>
        <Box ml="4">
          {/* {selectedItem && <CashierManage cashiers={cashiers} />} */}
          <CashierManage cashiers={cashiers} />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
