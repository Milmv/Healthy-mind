import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Block = ({
  name,
  breakfast,
  breakfastContent,
  brunch,
  brunchContent,
  lunch,
  lunchContent,
  dinner,
  dinnerContent,
  supper,
  supperContent,
}) => {
  return (
    <div className="cart__item">
      <div className="cart__item-title">
        {name}
        <span></span>
      </div>
      <div className="cart__item-content">
        <div className="cart__item-content-breakfast">
          <h3>{breakfast}</h3>
          <p>{breakfastContent}</p>
        </div>
        <div className="cart__item-content-brunch">
          <h3>{brunch}</h3>
          <p>{brunchContent}</p>
        </div>
        <div className="cart__item-content-lunch">
          <h3>{lunch}</h3>
          <p>{lunchContent}</p>
        </div>
        <div className="cart__item-content-dinner">
          <h3>{dinner}</h3>
          <p>{dinnerContent}</p>
        </div>
        <div className="cart__item-content-supper">
          <h3>{supper}</h3>
          <p>{supperContent}</p>
        </div>
      </div>
    </div>
  );
};

Block.propTypes = {
  name: PropTypes.string.isRequired,
  breakfast: PropTypes.string.isRequired,
  breakfastContent: PropTypes.string.isRequired,
  brunch: PropTypes.string.isRequired,
  brunchContent: PropTypes.string.isRequired,
  lunch: PropTypes.string.isRequired,
  lunchContent: PropTypes.string.isRequired,
  dinner: PropTypes.string.isRequired,
  dinnerContent: PropTypes.string.isRequired,
  supper: PropTypes.string.isRequired,
  supperContent: PropTypes.string.isRequired,
};

Block.defaultProps = {
  name: "---",
  breakfast: "---",
  breakfastContent: "---",
  brunch: "---",
  brunchContent: "---",
  lunch: "---",
  lunchContent: "---",
  dinner: "---",
  dinnerContent: "---",
  supper: "---",
  supperContent: "---",
};

export default Block;
