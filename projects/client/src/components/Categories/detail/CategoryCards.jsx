import { Flex, GridItem, Text } from "@chakra-ui/react";

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

function CategoryCards({ categories, setCategory }) {
    function changeCategory(id_category) {
        setCategory(id_category);
    }

    function handleClick(id_category) {
        changeCategory(id_category);
    }

    return categories.map((category, index) => (
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
    ));
}

export default CategoryCards;
