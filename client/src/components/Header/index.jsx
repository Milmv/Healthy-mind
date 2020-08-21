import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchLogo } from "../../redux/actions/logo.js";

import "./index.css";
import Loading from "./Loading";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ logo }) => logo.items);
  const isLoaded = useSelector(({ logo }) => logo.isLoaded);

  React.useEffect(() => {
    dispatch(fetchLogo());
  }, [dispatch]);

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          {isLoaded ? (
            <div dangerouslySetInnerHTML={{ __html: items }} />
          ) : (
            <Loading />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Header;
