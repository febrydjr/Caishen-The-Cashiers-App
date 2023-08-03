import { Button, Flex, Link, useDisclosure } from "@chakra-ui/react";
import Products from "./Products";
import { BsPersonPlusFill } from "react-icons/bs";
import AddProductModal from "../components/Products/detail/AddProductModal";
import Categories from "./Categories";
import { useState } from "react";

function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [page, setPage] = useState(0);
  const [category, setCategory] = useState(0); 

  return (
    <Flex>
      <Flex direction={"column"} gap={4}>
        <Categories setCategory={setCategory} setPage={setPage}/>
        <Products isEdit={true} category={category} page={page} setPage={setPage}/>
      </Flex>
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
          <BsPersonPlusFill size={"25px"} />
        </Flex>
      </Link>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default ProductManage;
