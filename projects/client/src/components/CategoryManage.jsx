import { Flex, Link, useDisclosure } from "@chakra-ui/react";
import Categories from "./Categories";
import { TbLayoutGridAdd } from "react-icons/tb";
import AddCategoryModal from "../components/Categories/detail/AddCategoryModal";
import { useState } from "react";

function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateCategory, setUpdateCategory] = useState();

  return (
    <Flex w={"100%"}>
      <Flex direction={"column"} gap={4} w={"100%"}>
        <Categories updateCategory={updateCategory} setUpdateCategory={setUpdateCategory} isEdit={true}/>
      </Flex>
      <Link
        onClick={() => {
          onOpen();
        }}
      >
        <Flex
          position={"fixed"}
          zIndex={60000}
          _hover={{ cursor: "pointer", bgColor: "#FAC1D9" }}
          bottom={8}
          right={8}
          p={6}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"full"}
          w={"6%"}
          bgColor={"#FFFFFF"}
        >
          <TbLayoutGridAdd size={"25px"} />
        </Flex>
      </Link>
      <AddCategoryModal isOpen={isOpen} onClose={onClose} setUpdateCategory={setUpdateCategory}/>
    </Flex>
  );
}

export default ProductManage;
