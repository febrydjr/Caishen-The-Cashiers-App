import { Flex, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import EditCategoryModal from "./EditCategoryModal";


const gridOptions = {
    w: "180px",
    h: "180px",
    bgColor: "green",
    borderRadius: "4px",
    cursor: "pointer",
};

const flexOptions = {
    w: "100%",
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
};

const textOptions = {
    fontSize: "1.4em",
};

function CategoryCards({ categories, isEdit=false, setCategory, setPage }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    function changeCategory(id_category) {
        setCategory(id_category);
        setPage(1);
    }

    function handleClick(id_category) {
        if (isEdit) return onOpen();
        return changeCategory(id_category);
    }

    return categories.map((category, index) => (
      <>
        <GridItem
            {...gridOptions}
            id={category["id"]}
            key={index}
            onClick={() => handleClick(category["id"])}
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
