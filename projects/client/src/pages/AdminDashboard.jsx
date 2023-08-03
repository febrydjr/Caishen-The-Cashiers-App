import {
  Box,
  Text,
  Flex,
  VStack,
  Divider,
  Link,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import {
  MdManageAccounts,
  MdOutlineAllInbox,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
// import { MdOutlineAllInbox } from "react-icons/fi";
// import { TbGraph } from "react-icons/tb";
import axios from "axios";
import CashierManage from "../components/CashierManage";
import ProductCategories from "../components/CategoryManage";
import ProductManage from "../components/ProductManage";

const AdminDashboard = () => {
  const [cashiers, setCashiers] = useState([]);
  const [activePage, setActivePage] = useState("cashier");
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderPage = () => {
    switch (activePage) {
      // case "menu":
      //   return <Text>INI LANDING PAGE</Text>;
      case "cashier":
        console.log("masuk cashier");
        return <CashierManage cashiers={cashiers} />;
      case "category":
        return (
          <Box mt={6}>
            <ProductCategories
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              editCategory={true}
            />
          </Box>
        );
      case "product":
        return (
          <Box mt={6}>
            <ProductManage searchQuery={searchQuery}/>;
          </Box>
        );
      case "report":
        return "THIS IS REPORT";
      default:
        return null;
    }
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
    <Box bgColor={"#2A2B2E"} maxW={"100vw"} borderRadius={8}>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Flex>
        <Box
          color="white"
          width="220px"
          p={6}
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
              w={"150px"}
              color="black"
              mb={4}
              borderRadius={8}
              textAlign="center"
            >
              ADMIN DASHBOARD
            </Text>
            {/* <Link onClick={() => setActivePage("menu")}>
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
            </Link> */}
            <Link>
              <Flex
                gap={4}
                justifyContent={"left"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row"}
              >
                <MdManageAccounts size={"50px"} />
                <Text
                  ml={2}
                  _hover={{ color: "#C2E9DD" }}
                  color="white"
                  onClick={() => setActivePage("cashier")}
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
                <MdOutlineAllInbox size={"50px"} />
                <Text
                  _hover={{ color: "#C9CAEF" }}
                  color="white"
                  onClick={() => setActivePage("product")}
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
                <BiCategoryAlt size={"50px"} />
                <Text
                  _hover={{ color: "#C9CAEF" }}
                  color="white"
                  onClick={() => setActivePage("category")}
                >
                  CATEGORY MANAGE
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
                <MdOutlineAutoGraph size={"31px"} />
                <Text
                  _hover={{ color: "#E4CDED" }}
                  color="white"
                  onClick={() => setActivePage("report")}
                >
                  REPORT
                </Text>
              </Flex>
            </Link>
          </VStack>
        </Box>
        <Box maxW={"100%"}>{renderPage()}</Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
