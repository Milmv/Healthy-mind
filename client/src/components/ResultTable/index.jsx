import React from "react";

import "./index.css";

const ResultTable = ({ onEnter, obj }) => {
  return (
    <div className="result-category">
      <div className="result-category-title">Ваш результат</div>
      <div className="result">
        <h2>{obj.bmi}</h2>
        <p>{obj.type}</p>
        <button onClick={onEnter} className="button button--result">
          Подобрать оптимальное меню
        </button>
      </div>
    </div>
  );
};

export default ResultTable;
