import React from "react";

import "./index.css";

const Input = () => {
    return (
            <div className="radio">
                <input type="radio" value="option1" defaultChecked className="radioInput" name="gender" id="woman"/>
                <label htmlFor="woman"><span>Женский</span></label>

                <input type="radio" value="option2" className="radioInput" name="gender" id="man"/>
                <label htmlFor="man"><span>Мужской</span></label>
            </div>
    )
};

export default Input;
