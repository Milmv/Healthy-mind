import React from "react";
import "./index.css";

function ResultList({ obj }) {
  return (
    <div className="result__item">
      <div className="result__item-title">
        Таблица значений
        <span></span>
      </div>
      <div className="result__item-content">
        {obj.map((obj) => (
          <ul key={obj.id}>
            <li>{obj.term}</li>
            <li>{obj.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ResultList;
