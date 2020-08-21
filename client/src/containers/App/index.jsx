import React from "react";

import "./styles.css";

import { Header, Menu, Result, Footer, Calculator } from "../../components";

const App = () => {
  const [visibleResult, setVisibleResult] = React.useState(false);
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const toggleVisibleMenu = () => setVisibleMenu(true);
  const hideMenu = () => setVisibleMenu(visibleMenu);

  const toggleVisibleResult = () => setVisibleResult(!visibleResult);
  const hideResult = () => setVisibleResult(visibleResult);

  return (
    <div>
      <Header />
      <Calculator
        hideMenu={hideMenu}
        hideResult={hideResult}
        toggleVisibleResult={toggleVisibleResult}
      />
      {visibleResult && <Result toggleVisibleMenu={toggleVisibleMenu} />}
      {visibleMenu && <Menu />}
      <Footer />
    </div>
  );
};

export default App;
