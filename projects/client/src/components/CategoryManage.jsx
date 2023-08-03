import { Button, Flex, Link, useDisclosure } from "@chakra-ui/react";
import Categories from "./Categories";
import { BsPersonPlusFill } from "react-icons/bs";
import AddCategoryModal from "../components/Categories/detail/AddCategoryModal";

function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Categories />
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
          <BsPersonPlusFill size={"25px"} />
        </Flex>
      </Link>
      <AddCategoryModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default ProductManage;
