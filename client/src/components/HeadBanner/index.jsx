import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "../../redux/actions/content";

import Loading from "./Loading";

import "./index.css";

import fb from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import vk from "../../assets/img/vk.svg";

const HeadBanner = () => {
  const social = [fb, twitter, vk];
  const dispatch = useDispatch();
  const { title, description } = useSelector(({ content }) => content.items);
  const isLoaded = useSelector(({ content }) => content.isLoaded);

  React.useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  return (
    <div className="banner">
      {isLoaded ? (
        <>
          <h1 className="title">{title}</h1>
          <p className="desc">{description}</p>
        </>
      ) : (
        <Loading />
      )}

      <div className="social">
        {social.map((item) => (
          <a href="/" key={item}>
            <img src={item} key={item} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeadBanner;
