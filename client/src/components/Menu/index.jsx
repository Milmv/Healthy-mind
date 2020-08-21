import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/actions/menu";
import { Block, LoadingBlock } from "../index";

import "./index.css";

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ menu }) => menu.items);
  const isLoaded = useSelector(({ menu }) => menu.isLoaded);
  const bmi = useSelector(({ result }) => result.obj.bmi);

  React.useEffect(() => {
    dispatch(fetchMenu(bmi));
  }, [bmi, dispatch]);

  return (
    <div className="menu-category">
      <div className="menu-category-title">Ваше меню</div>
      <div className="menu__cart">
        {isLoaded
          ? items.map((obj) => <Block key={obj.id} isLoaded={true} {...obj} />)
          : Array(7)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};
export default Menu;
