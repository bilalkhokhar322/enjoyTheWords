import React from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";

const User = () => {
  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"User"} />
      <UserTable />
    </>
  );
};

export default User;
