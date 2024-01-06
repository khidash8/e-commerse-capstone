import "./category-items.styles.scss";
import PropTypes from "prop-types";

const CategoryItems = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

// ? prop validation
CategoryItems.propTypes = {
  category: PropTypes.object,
};

export default CategoryItems;
