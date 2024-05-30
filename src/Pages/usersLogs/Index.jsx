import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { userLogs } from "../../Redux/features/User/userApi";
import moment from "moment";

const UsersLogs = () => {
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
  const [logsData, setLogsData] = useState([]);
  const [tableData, setTableData] = useState("");

  useEffect(() => {
    fetchLogs();
  }, [dispatch]);

  console.log(logsData);

  useEffect(() => {
    setTableData(
      <>
        {logsData?.map((data) => (
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
                width: "10px",
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
  }, [logsData]);
  const fetchLogs = () => {
    const data = {
      apiEndpoint: `/admin/logs?page=${1}&size=${10}`,
    };
    dispatch(userLogs(data)).then((res) => {
      if (res.type === "userLogs/fulfilled") {
        setLogsData(res?.payload?.data?.logs);
      }
    });
  };

  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users Logs"} />
      <UserTable headerData={tableHeadingArr} bodyData={tableData} />
    </>
  );
};

export default UsersLogs;
