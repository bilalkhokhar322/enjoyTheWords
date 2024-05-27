import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { edit, del } from "../../Assets/icons/index";
import { deleteUser, userLogs } from "../../Redux/features/User/userApi";

const Index = () => {
  const tableHeadingArr = [
    "Name",
    "Method",
    "URL",
    "Status",
    "Res/Time",
    "GST",
    "User Ip",
    "Created At",
  ];
  const dispatch = useDispatch();

  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState("");
  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  useEffect(() => {
    setTableData(
      <>
        {usersData?.map((data, index) => (
          <tr>
            <td>{data?.userName}</td>
            <td>{data?.method}</td>
            <td>{data?.url}</td>
            <td>{data?.status}</td>
            <td>{data?.responseTime}</td>
            <td>{data?.timeInGST}</td>
            <td>{data?.userIp}</td>
            <td>{data?.createdAt}</td>
          </tr>
        ))}
      </>
    );
  }, [usersData]);

  const handleDelete = (userId) => {
    const user = {
      apiEndpoint: `/admin/deleteUser?userId=${userId}`,
    };
    dispatch(deleteUser(user)).then((res) => {
      if (res.type === "deleteUser/fulfilled") {
        fetchUsers();
      }
    });
  };

  const fetchUsers = () => {
    const data = {
      apiEndpoint: "/admin/logs",
    };
    dispatch(userLogs(data)).then((res) => {
      if (res.type === "userLogs/fulfilled") {
        setUsersData(res?.payload?.data);
      }
    });
  };

  console.log(usersData);
  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <UserTable headerData={tableHeadingArr} bodyData={tableData} />
    </>
  );
};

export default Index;
