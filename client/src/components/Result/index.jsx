import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import "./index.css";
import { ResultList, ResultTable, LoadingListResult, LoadingResult } from "../index";

import { fetchResult } from "../../redux/actions/result.js";
import { fetchList } from "../../redux/actions/list.js";

const Result = ({ toggleVisibleMenu }) => {
  const dispatch = useDispatch();
  const items = useSelector(({ list }) => list.items);
  const isLoaded = useSelector(({ list }) => list.isLoaded);
  const isLoading = useSelector(({ result }) => result.isLoaded);
  const { Weight, Height } = useSelector(({ params }) => params);
  const obj = useSelector(({ result }) => result.obj);

  const resultRef = React.useRef();

  React.useEffect(() => {
    if (Weight !== null) {
      dispatch(fetchList());
      dispatch(fetchResult(Weight, Height));
    }
  }, [Weight, Height, dispatch]);

  const onEnter = () => {
    toggleVisibleMenu();
    let biase = resultRef.current.getBoundingClientRect().bottom;
    scroll.scrollMore(biase);
  };

  return (
    <div ref={resultRef} className="result-container">
      {isLoading ? (
        <ResultTable obj={obj} onEnter={onEnter} />
      ) : (
        <LoadingResult />
      )}
      <div className="result-cart">
        {isLoaded ? (
          <ResultList obj={items} isLoaded={true} />
        ) : (
          <LoadingListResult />
        )}
      </div>
    </div>
  );
};

export default Result;
