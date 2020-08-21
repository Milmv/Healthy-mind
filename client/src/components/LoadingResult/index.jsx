import React from "react"
import ContentLoader from "react-content-loader"

const LoadingResult = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#d1cccc"
    foregroundColor="#27ae60"
   
  >
    <rect x="0" y="8" rx="5" ry="5" width="280" height="50" /> 
    <rect x="0" y="66" rx="5" ry="5" width="120" height="40" /> 
    <rect x="0" y="116" rx="5" ry="5" width="280" height="16" /> 
    <rect x="0" y="182" rx="5" ry="5" width="280" height="50" />
  </ContentLoader>
)

export default LoadingResult