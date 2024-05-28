import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { edit, del } from "../../Assets/icons/index";
import { deleteUser, userLogs } from "../../Redux/features/User/userApi";
import moment from "moment";

const Index = () => {
  const tableHeadingArr = [
    "Name",
    "Method",
    "URL",
    "Res/Time",
    "GST",
    "User Ip",
    "Created At",
    "Status",
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
          <tr className="">
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {data?.userName}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {data?.method}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {data?.url}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {data?.responseTime}
              {/* {moment(data?.responseTime, "HH:mm").format("hh:mm A")} */}
              {/* {moment(data.responseTime, ["HH:mm:ss", "HH:mm:ss.SSS"]).format( */}
              {/* "hh:mm A" )} */}
              {console.log(data?.responseTime)}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {moment(data?.timeInGST).format("DD-MMM-YYYY")}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {data?.userIp}
            </td>
            <td
              style={{
                fontSize: "13px",
              }}
            >
              {moment(data?.createdAt).format("DD-MMM-YYYY")}
            </td>

            <span
              className={
                data?.status >= 200 && data?.status <= 299
                  ? "border border-success fw-light badge badge-pill bg-success"
                  : "border border-danger fw-light badge badge-pill bg-danger"
              }
            >
              <td>{data?.status}</td>
            </span>
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
