import { Flex, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import EditCategoryModal from "./EditCategoryModal";

const gridOptions = {
  w: "160px",
  h: "160px",
  bgColor: "green",
  borderRadius: "4px",
};

const flexOptions = {
  w: "100%",
  h: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const textOptions = {
  color: customColors.textPrimary,
  fontFamily: "Fira Code",
  fontWeight: "bold",
  fontSize: "1.6em",
};

function CategoryCards({ categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return categories.map((category, index) => (
    <>
      <GridItem
        {...gridOptions}
        id={category["id"]}
        key={index}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Flex {...flexOptions}>
          <Text {...textOptions}>{category["name"]}</Text>
        </Flex>
      </GridItem>
      <EditCategoryModal
        isOpen={isOpen}
        onClose={onClose}
        category={category}
      />
    </>
  ));
}

export default CategoryCards;
