import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setHeight, setWeight } from "../../redux/actions/params";
import { animateScroll as scroll } from "react-scroll";

import { Input, Modal  } from "../index";

import "./index.css";
import { customStyles, options } from "./customStyles";

const Counter = ({ toggleVisibleResult, hideMenu, hideResult, counterRef }) => {
  const dispatch = useDispatch();
  const [valueWeight, setValueWeight] = useState("");
  const [valueHeight, setValueHeight] = useState("");
  const [valueAge, setValueAge] = useState("");
  const [isClose, setIsClose] = useState(true);

  const onCancel = () => {
    setIsClose(true)
  };

  const handleChangeWeight = (event) => {
    setValueWeight(event.target.value);
  };

  const handleChangeHeight = (event) => {
    setValueHeight(event.target.value);
  };

  const handleChangeAge = (event) => {
    setValueAge(event.target.value);
  };

  const clearInput = () => {
    setValueHeight("");
    setValueWeight("");
    setValueAge("");
  };


  const onSelectWeightHeight = React.useCallback((Height, Weight, Age) => {
    if (Height !== "" && Weight !== "" && Age !== "") {
      dispatch(setHeight(Height));
      dispatch(setWeight(Weight));
      let biase = counterRef.current.getBoundingClientRect().bottom;
      scroll.scrollMore(biase);
      toggleVisibleResult();
      hideMenu();
    } else if (Height === "" || Weight === "" || Age === "") {
      setIsClose(false);
      hideMenu();
      hideResult();
      scroll.scrollToTop();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let Height = valueHeight;
    let Weight = valueWeight;
    let Age = valueAge;

    onSelectWeightHeight(Weight, Height, Age);
    clearInput();
  };

  return (
    <div className="counter-wrap">
      <Modal onCancel={onCancel} isClose={isClose}/>
      <h2 className="subtitle">Рассчитать ИМТ</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="number"
            className="input"
            placeholder="Вес в кг"
            value={valueWeight}
            onChange={handleChangeWeight}
          />
          <input
            type="number"
            className="input"
            placeholder="Рост в см"
            value={valueHeight}
            onChange={handleChangeHeight}
          />
          <input
            type="number"
            className="input"
            placeholder="Возраст"
            value={valueAge}
            onChange={handleChangeAge}
          />
          <Select
            options={options}
            styles={customStyles}
            className="input"
            placeholder="Физическая активность"
          />
        </div>
        <Input />
        <button className="button">Рассчитать</button>
      </form>
    </div>
  );
};

export default Counter;
