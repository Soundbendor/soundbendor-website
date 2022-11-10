import React from "react";
import { Outlet } from "react-router-dom";

function Publications() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Publications page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Publications;