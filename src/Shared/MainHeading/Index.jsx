import React from "react";

const HeadingText = (props) => {
  return (
    <>
      <h1 className={props.className}>{props.Text}</h1>
    </>
  );
};

export default HeadingText;
