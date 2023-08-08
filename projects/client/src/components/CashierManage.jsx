import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";
import AddCashierModal from "./AddCashierModal";
import getImage from "../api/getImage";
import axios from "axios";
import EditInfoCashier from "./EditInfoCashier";
import { FiEdit } from "react-icons/fi";
import CashierCards from "./CashierCards";

export default function CashierManage({ cashiers }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        rowGap={6}
        w={"100%"}
        overflowX={"hidden"}
        fontFamily={"Fira Code"}
        py={6}
      >
        {cashiers?.map((cashier) => (
          <CashierCards cashier={cashier} key={cashier.username} />
        ))}
      </Flex>
      <Link onClick={onOpen}>
        <Flex
          position={"fixed"}
          _hover={{ cursor: "pointer", bgColor: "#FAC1D9" }}
          zIndex={60000}
          bottom={8}
          right={8}
          p={6}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"full"}
          w={"6%"}
          bgColor={"#FFFFFF"}
        >
          <BsPersonPlusFill size={"25px"} />
        </Flex>
      </Link>
      <AddCashierModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
