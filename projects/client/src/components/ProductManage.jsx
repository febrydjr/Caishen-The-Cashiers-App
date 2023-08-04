import { Button, Flex, Link, useDisclosure } from "@chakra-ui/react";
import Products from "./Products";
import { BiAddToQueue } from "react-icons/bi";
import AddProductModal from "../components/Products/detail/AddProductModal";

function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Products />
      <Link
        onClick={() => {
          onOpen();
        }}
      >
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
          <BiAddToQueue size={"25px"} />
        </Flex>
      </Link>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default ProductManage;
