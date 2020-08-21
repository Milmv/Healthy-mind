import React from "react"
import ContentLoader from "react-content-loader"

const LoadingListResult = () => (
  <ContentLoader 
    speed={2}
    width={370}
    height={375}
    viewBox="0 0 370 375"
    backgroundColor="#d1cccc"
    foregroundColor="#27ae60"
  >
    <rect x="30" y="30" rx="5" ry="5" width="120" height="40" /> 
    <rect x="30" y="99" rx="5" ry="5" width="99" height="18" /> 
    <rect x="160" y="99" rx="5" ry="5" width="150" height="14" /> 
    <rect x="30" y="149" rx="5" ry="5" width="95" height="18" /> 
    <rect x="30" y="213" rx="5" ry="5" width="95" height="18" /> 
    <rect x="30" y="277" rx="5" ry="5" width="95" height="18" /> 
    <rect x="30" y="328" rx="5" ry="5" width="95" height="18" /> 
    <rect x="160" y="149" rx="5" ry="5" width="150" height="14" /> 
    <rect x="160" y="213" rx="5" ry="5" width="150" height="14" /> 
    <rect x="160" y="277" rx="5" ry="5" width="150" height="14" /> 
    <rect x="160" y="328" rx="5" ry="5" width="150" height="14" />
  </ContentLoader>
)

export default LoadingListResult