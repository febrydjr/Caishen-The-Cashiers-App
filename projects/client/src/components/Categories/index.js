import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryCards from "./detail/CategoryCards";
import { getCategories } from "../../api/product";

const options = {
  w: "fit-content",
  gap: 4,
  autoFlow: "row",
  templateColumns: "repeat(6, 1fr)",
};
function setOptions(editCategory) {
  if (editCategory) options["templateColumns"] = "repeat(6, 1fr)";
  else options["templateRows"] = "repeat(2, 1fr)";
  options["autoFlow"] = editCategory ? "row" : "column";
}
async function fetchCategories(setCategories) {
  const { data } = await getCategories();
  setCategories(data);
}

function Categories({ editCategory = false, isOpen, onClose, onOpen }) {
  const [categories, setCategories] = useState([]);
  setOptions(editCategory);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <Grid {...options}>
      <CategoryCards
        categories={categories}
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
      />
    </Grid>
  );
}

export default Categories;
