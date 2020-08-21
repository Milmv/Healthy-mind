import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="cart__item"
      speed={2}
      width={310}
      height={375}
      viewBox="0 0 310 375"
      backgroundColor="#d1cccc"
      foregroundColor="#27ae60"
    >
      <rect x="0" y="0" rx="5" ry="5" width="120" height="40" />
      <rect x="0" y="69" rx="5" ry="5" width="99" height="18" />
      <rect x="0" y="90" rx="5" ry="5" width="245" height="14" />
      <rect x="0" y="119" rx="5" ry="5" width="95" height="18" />
      <rect x="0" y="183" rx="5" ry="5" width="95" height="18" />
      <rect x="0" y="247" rx="5" ry="5" width="95" height="18" />
      <rect x="0" y="298" rx="5" ry="5" width="95" height="18" />
      <rect x="0" y="140" rx="5" ry="5" width="245" height="14" />
      <rect x="0" y="204" rx="5" ry="5" width="245" height="14" />
      <rect x="0" y="268" rx="5" ry="5" width="245" height="14" />
      <rect x="0" y="318" rx="5" ry="5" width="245" height="14" />
    </ContentLoader>
  );
}

export default LoadingBlock;
