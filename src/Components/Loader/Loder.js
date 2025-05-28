import React from 'react'
import {ClockLoader} from "react-spinners"
function Loader() {
  return (
    <div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
    }} >
      <ClockLoader />
    </div>
  );
}
export default Loader