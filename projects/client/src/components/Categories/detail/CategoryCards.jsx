import CategoryCard from "./CategoryCard";

function CategoryCards({ categories, setCategory, setPage, isEdit }) {
    return categories.map((category, index) => (
        <CategoryCard
            category={category}
            setCategory={setCategory}
            setPage={setPage}
            isEdit={isEdit}
            key={index}
        />
    ));
}

export default CategoryCards;
