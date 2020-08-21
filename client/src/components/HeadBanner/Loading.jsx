import React from "react"
import ContentLoader from "react-content-loader"

const Loading = () => (
  <ContentLoader 
  speed={2}
  width={320}
  height={200}
  viewBox="0 0 320 200"
  backgroundColor="#d1cccc"
  foregroundColor="#27ae60"
>
  <rect x="0" y="52" rx="0" ry="0" width="200" height="7" /> 
  <rect x="0" y="5" rx="7" ry="7" width="250" height="40" /> 
  <rect x="0" y="70" rx="15" ry="15" width="320" height="80" />
  </ContentLoader>
)

export default Loading