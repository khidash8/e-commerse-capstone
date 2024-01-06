import CategoryItems from "../category-items/category-items.component";
import "./directory.styles.scss";
import PropTypes from "prop-types";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems category={category} key={category.id} />
      ))}
    </div>
  );
};

//? prop validation
Directory.propTypes = {
  categories: PropTypes.array,
};

export default Directory;
