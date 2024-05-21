import React from "react";

const MainCard = (props) => {
  return (
    <>
      <div
        className="card rounded-4 mb-4"
        style={{
          backgroundColor: "#0B8ABC",
          background: "linear-gradient(121.34deg, #0B8ABC 0%, rgba(255, 119, 135, 0.4) 100%)",

          WebkitBoxShadow: "0px 0px 26px -1px rgba(0,0,0,1)",
          MozBoxShadow: "0px 0px 26px -1px rgba(0,0,0,1)",
          boxShadow: "0px 0px 26px -1px rgba(0,0,0,1)",
        }}
      >
        <div className="card-body d-flex ">
          <i className="">{props.icon}</i>
          <div className="content d-flex flex-column align-items-center w-100">
            <p className="m-0 pe-4 card-title fw-bold fs-4 text-white">
              {props.title}
            </p>
            <p className="mb-0 pe-4 card-text fw-bold fs-3 text-white">
              {props.num}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
