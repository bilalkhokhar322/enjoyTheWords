import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="h-75 text-center align-content-center">
      <Spinner color="info" />
    </div>
  );
};

export default Loader;
