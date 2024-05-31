import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { userLogs } from "../../Redux/features/User/userApi";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { PER_PAGE_SIZE } from "../../utils/constants";

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
  const [tableData, setTableData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchLogs();
  }, [dispatch, currentPage]);

  useEffect(() => {
    setTableData(
      logsData.map((data, index) => (
        <tr key={index}>
          <td style={{ fontSize: "13px" }}>{data?.userName}</td>
          <td style={{ fontSize: "13px" }}>{data?.method}</td>
          <td style={{ fontSize: "13px", width: "10px" }}>{data?.url}</td>
          <td style={{ fontSize: "13px" }}>{data?.responseTime}</td>
          <td style={{ fontSize: "13px" }}>
            {moment(data?.timeInGST).format("DD-MMM-YYYY")}
          </td>
          <td style={{ fontSize: "13px" }}>{data?.userIp}</td>
          <td style={{ fontSize: "13px" }}>
            {moment(data?.createdAt).format("DD-MMM-YYYY")}
          </td>
          <td>
            <span
              className={
                data?.status >= 200 && data?.status <= 299
                  ? "border border-success fw-light badge badge-pill bg-success"
                  : "border border-danger fw-light badge badge-pill bg-danger"
              }
            >
              {data?.status}
            </span>
          </td>
        </tr>
      ))
    );
  }, [logsData]);

  const fetchLogs = () => {
    const pageNumber = currentPage + 1; 
    const data = {
      apiEndpoint: `/admin/logs?page=${pageNumber}&size=${PER_PAGE_SIZE}`,
    };
    dispatch(userLogs(data)).then((res) => {
      if (res.type === "userLogs/fulfilled") {
        setLogsData(res?.payload?.data?.logs);
        setPageCount(res?.payload?.data?.totalLogs / PER_PAGE_SIZE);
      }
    });
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users Logs"} />
      <UserTable headerData={tableHeadingArr} bodyData={tableData} />

      {logsData.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(pageCount)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default UsersLogs;
