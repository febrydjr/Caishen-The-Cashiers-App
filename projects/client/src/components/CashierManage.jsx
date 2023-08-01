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
} from "@chakra-ui/react";
import {
  BsArrowUpRight,
  BsHeartFill,
  BsHeart,
  BsPersonPlusFill,
} from "react-icons/bs";
import { IoTrashBinOutline, IoTrashBinSharp } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import AddCashierModal from "./AddCashierModal";
export default function CashierManage({ cashiers }) {
  const [liked, setLiked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(cashiers);
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        columnGap={1}
        rowGap={6}
        // direction={"row"}
        // maxW={"60%"}
        overflowX={"hidden"}
        fontFamily={"Fira Code"}
        py={6}
      >
        {cashiers?.map((cashier) => (
          <Box
            w="263px"
            rounded={"lg"}
            mx={[0, 2]}
            overflow={"hidden"}
            bg="#CFDDDB"
            border={"1px"}
            borderColor="black"
          >
            <Box h={"200px"} borderBottom={"1px"} borderColor="black">
              <Img
                src={
                  "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
                roundedTop={"sm"}
                objectFit="cover"
                h="full"
                w="full"
                alt={"Blog Image"}
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
                cursor={"pointer"}
                w="full"
              >
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  {cashier.username}
                </Text>
                <AiOutlineEdit size={"25px"} />
              </Flex>
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                borderLeft={"1px"}
                cursor="pointer"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <IoTrashBinOutline fill="red" fontSize={"24px"} />
                ) : (
                  <IoTrashBinSharp fontSize={"24px"} />
                )}
              </Flex>
            </HStack>
          </Box>
        ))}
      </Flex>
      <Link onClick={onOpen}>
        <Flex
          position={"fixed"}
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
