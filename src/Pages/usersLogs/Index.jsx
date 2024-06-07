import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import { useDispatch } from "react-redux";
import { userLogs } from "../../Redux/features/User/userApi";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { PER_PAGE_SIZE } from "../../utils/constants";
import { next, previous } from "../../Assets/icons";
import { Button, Col, Input, Row } from "reactstrap";
import { toast } from "react-toastify";

const UsersLogs = () => {
  const tableHeadingArr = [
    "Name",
    "Method",
    "URL",
    "Res/Time",
    "User IP",
    "Created At",
    "Status",
  ];
  const dispatch = useDispatch();
  const [logsData, setLogsData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
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
          {/* <td style={{ fontSize: "13px" }}>
            {moment(data?.timeInGST).format("DD-MMM-YYYY")}
          </td> */}
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
      apiEndpoint: `/admin/logs?page=${pageNumber}&size=${PER_PAGE_SIZE}&startDate=${selectedStartDate}&endDate=${selectedEndDate}`,
    };
    dispatch(userLogs(data)).then((res) => {
      if (res.type === "userLogs/fulfilled") {
        setLogsData(res?.payload?.data?.logs);
        setPageCount(res?.payload?.data?.totalLogs / PER_PAGE_SIZE);
      } else {
        toast.error(res?.payload?.data?.message);
      }
    });
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handleButtonClick = () => {
    if (!selectedStartDate && !selectedEndDate) {
      toast.error("Start Date and End Date are Required");
    } else if (!selectedStartDate && selectedEndDate) {
      toast.error("Start Date is Required");
    } else if (selectedStartDate && !selectedEndDate) {
      toast.error("End Date is Required");
    } else {
      fetchLogs();
    }
  };

  console.log("selectedStartDate ---------->", selectedStartDate);
  console.log("selectedEndDate ---------->", selectedEndDate);

  return (
    <>
      <Row>
        <Col lg={6} md={12} className="">
          <HeadingText className={"text-white display-5"} Text={"Users Logs"} />
        </Col>
        <Col lg={2} md={5} sm={4}>
          <label htmlFor="datePicker" className="text-white">
            Start Date
          </label>
          <Input
            type="date"
            id="datePicker"
            className="bg-transparent text-white"
            value={selectedStartDate}
            onChange={(e) => setSelectedStartDate(e.target.value)}
          />
        </Col>
        <Col lg={2} md={5} sm={4}>
          <label htmlFor="datePicker" className="text-white">
            End Date
          </label>
          <Input
            type="date"
            id="datePicker"
            className="bg-transparent text-white"
            value={selectedEndDate}
            onChange={(e) => setSelectedEndDate(e.target.value)}
          />
        </Col>
        <Col
          md={2}
          sm={4}
          className="d-flex justify-content-end align-content-end "
        >
          <div className="w-100 d-flex justify-content-end align-content-end flex-column">
            <Button
              onClick={handleButtonClick}
              className="mb-1 mt-sm-0 mt-3 d-block w-100 bg-transparent border border-success"
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>
      <UserTable headerData={tableHeadingArr} bodyData={tableData} />

      {logsData.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(pageCount)} // Total number of pages
          pageRangeDisplayed={3} // Number of page links to display
          marginPagesDisplayed={2} // Number of pages to display at the margins
          onPageChange={handlePageClick} // Function to handle page click
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={previous} // Define previous label
          nextLabel={next} // Define next label
        />
      )}
    </>
  );
};

export default UsersLogs;
