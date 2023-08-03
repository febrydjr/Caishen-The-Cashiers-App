import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  BsArrowUpRight,
  BsHeartFill,
  BsHeart,
  BsPersonPlusFill,
} from "react-icons/bs";
import { IoTrashBinOutline, IoTrashBinSharp } from "react-icons/io5";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import AddCashierModal from "./AddCashierModal";
import getImage from "../api/getImage";
import axios from "axios";

export default function CashierManage({ cashiers }) {
  const toast = useToast();
  const [liked, setLiked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async (username) => {
    try {
      await axios.delete(`http://localhost:8000/api/profile/user/${username}`);
      toast({
        title: "User deleted!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error deleting user!",
        description: error.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleActivate = async (username) => {
    try {
      await axios.patch(`http://localhost:8000/api/profile/user`, {
        username: username,
      });
      toast({
        title: "User activated!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error activating user!",
        description: error.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
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
          <Box
            w="255px"
            rounded={"lg"}
            mx={[0, 2]}
            overflow={"hidden"}
            bg="#CFDDDB"
            border={"1px"}
            borderColor="black"
          >
            <Box h={"200px"} borderBottom={"1px"} borderColor="black">
              <Img
                src={getImage(cashier.avatar)}
                roundedTop={"sm"}
                objectFit="cover"
                h="full"
                w="full"
                alt={"avatar"}
              />
            </Box>
            <Box p={4}>
              <Box
                bg="black"
                display={"inline-block"}
                px={2}
                py={1}
                color="white"
                mb={2}
              >
                <Text fontSize={"xs"} fontWeight="medium">
                  {cashier.is_admin ? "Admin" : "Cashier"}
                </Text>
              </Box>
              <Box
                ml={2}
                bg={cashier.is_active ? "green" : "red"}
                display={"inline-block"}
                px={2}
                py={1}
                color="white"
                mb={2}
              >
                <Text fontSize={"xs"} fontWeight="medium">
                  {cashier.is_active ? "Active" : "Inactive"}
                </Text>
              </Box>
              <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                {cashier.name}
              </Heading>
              <Text fontSize={"13px"} color={"gray.500"} noOfLines={2}>
                <Text mt={3}>Email&nbsp;&nbsp;: {cashier.email}</Text>
                <Text>Phone &nbsp;: {cashier.phone}</Text>
              </Text>
            </Box>
            <HStack borderTop={"1px"} color="black">
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                w="full"
              >
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  {cashier.username.slice(0, 16)}
                </Text>
                {/* <AiOutlineEdit size={"25px"} /> */}
              </Flex>
              {cashier.is_active ? (
                <Flex
                  p={4}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  borderLeft={"1px"}
                  cursor="pointer"
                  onClick={() => handleDelete(cashier.username)}
                >
                  <FaTimes fontSize={"26px"} />
                </Flex>
              ) : (
                <Flex
                  p={4}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  borderLeft={"1px"}
                  cursor="pointer"
                  onClick={() => handleActivate(cashier.username)}
                >
                  <FaCheck fontSize={"24px"} />
                </Flex>
              )}
            </HStack>
          </Box>
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
