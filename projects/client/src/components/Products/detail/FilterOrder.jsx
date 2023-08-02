import { BsSortAlphaDownAlt, BsSortAlphaUp } from "react-icons/bs";

const options = {
    size: "24px",
    cursor: "pointer",
};

function FilterOrder({ order, setOrder }) {
    if (order === "ASC") return <BsSortAlphaUp {...options} onClick={() => setOrder("DESC")} />;
    return <BsSortAlphaDownAlt {...options} onClick={() => setOrder("ASC")} />;
}

export default FilterOrder;
