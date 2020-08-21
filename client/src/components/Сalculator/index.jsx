import React from "react";
import "./index.css";

import {Counter, HeadBanner} from "../index";

const Calculator = ({toggleVisibleResult, hideMenu, hideResult}) => {
    const counterRef = React.useRef();
    
    return (
        <div ref={counterRef} className="calc-wrap">
            <HeadBanner />
            <Counter counterRef={counterRef} hideResult={hideResult} hideMenu ={hideMenu} toggleVisibleResult={toggleVisibleResult} />
        </div>
    )
};


export default Calculator;
