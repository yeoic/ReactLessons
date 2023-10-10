import React from "react";
import { Link } from "react-router-dom";

function RouteTest(props) {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
      <br />

      <Link to={"/new"}>New</Link>
      <br />

      <Link to={"/edit"}>edit</Link>
      <br />
    </div>
  );
}

export default RouteTest;
