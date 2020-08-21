import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={180}
    height={100}
    viewBox="0 0 180 100"
    backgroundColor="#d1cccc"
    foregroundColor="#27ae60"
    {...props}
  >
    <rect x="0" y="0" rx="45" ry="45" width="160" height="100" />
  </ContentLoader>
)

export default Loading