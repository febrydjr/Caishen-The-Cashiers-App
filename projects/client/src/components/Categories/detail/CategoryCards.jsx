import { Flex, GridItem, Text } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";

const gridOptions = {
    w: "180px",
    h: "180px",
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
    return categories.map((category, index) => (
        <GridItem {...gridOptions} id={category["id"]} key={index}>
            <Flex {...flexOptions}>
                <Text {...textOptions}>{category["name"]}</Text>
            </Flex>
        </GridItem>
    ));
}

export default CategoryCards;
