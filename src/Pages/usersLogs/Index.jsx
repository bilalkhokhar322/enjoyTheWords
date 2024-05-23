import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { userLogs } from "../../Redux/features/User/userApi";

const Index = () => {
  const [userInfo, setUserInfo] = useState([]);

  const tableHeadingArr = [
    "#",
    "User Id",
    "Method",
    "URL",
    "Status",
    "Response Time",
    "TimeIn GST",
    "User Ip",
    "User Name",
    "Created At",
    "Updated At",
    "Action",
  ];

  console.log(userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  const fetchUsers = () => {
    const userListData = {
      apiEndpoint: "/admin/logs",
    };
    dispatch(userLogs(userListData)).then((res) => {
      if (res.type === "userLogs/fulfilled") {
        setUserInfo(res?.payload?.data?.All_Logs);
        // setUserInfo(res?.payload?.data?.Total_user?.rows);
      }
    });
  };
  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <UserTable
        tableHeadingArr={tableHeadingArr}
        userInfo={userInfo}
        fetchUsers={fetchUsers}
      />{" "}
    </>
  );
};

export default Index;
