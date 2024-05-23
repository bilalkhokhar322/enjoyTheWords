import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { listUser } from "../../Redux/features/User/userApi";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);

  const dispatch = useDispatch();

  const tableHeadingArr = ["#", "Name", "Number", "Email", "Status", "Actions"];

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  const fetchUsers = () => {
    const userListData = {
      apiEndpoint: "/admin/listUser",
    };
    dispatch(listUser(userListData)).then((res) => {
      if (res.type === "listUser/fulfilled") {
        setUserInfo(res?.payload?.data?.Total_user?.rows);
      }
    });
  };
  const arrayOfNames = userInfo.map((obj) => obj.name);
  console.log(userInfo);
  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <UserTable
        tableHeadingArr={tableHeadingArr}
        userInfo={arrayOfNames}
        fetchUsers={fetchUsers}
      />{" "}
    </>
  );
};

export default User;
