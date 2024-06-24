import React, { useEffect, useState } from "react";
import HeadingText from "../../Shared/MainHeading/Index";
import UserTable from "../../Shared/UserTable/Index";
import ReactPaginate from "react-paginate";
import { next, previous } from "../../Assets/icons";
import { Button, Col, Input, Row, Table } from "reactstrap";
import moment from "moment";

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

  const logsData = [
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "404",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "404",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "404",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "300",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "202",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "500",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
    {
      userName: "mical",
      method: "GET",
      url: "/api/v1/admin/logs?page=1&size=15&startDate=&endDate=",
      responseTime: "0.615 ms",
      userIp: "::ffff:192.168.0.111",
      createdAt: "2024-06-24T14:04:21.688Z",
      status: "200",
    },
  ];

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
            value={""}
            onChange={""}
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
            value={""}
            onChange={""}
          />
        </Col>
        <Col
          md={2}
          sm={4}
          className="d-flex justify-content-end align-content-end "
        >
          <div className="w-100 d-flex justify-content-end align-content-end flex-column">
            <Button
              onClick={""}
              className="mb-1 mt-sm-0 mt-3 d-block w-100 bg-transparent border border-success"
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>

      <div id="tableWrapper">
        <Table responsive className="table bg-transparent">
          <thead>
            <tr>
              {tableHeadingArr.map((heading, index) => (
                <th
                  key={index}
                  className={heading === "Actions" ? "text-center" : ""}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {logsData.map((data, index) => (
              <tr key={index}>
                <td style={{ fontSize: "13px" }}>{data?.userName}</td>
                <td style={{ fontSize: "13px" }}>{data?.method}</td>
                <td style={{ fontSize: "13px", width: "10px" }}>{data?.url}</td>
                <td style={{ fontSize: "13px" }}>{data?.responseTime}</td>
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
            ))}
          </tbody>
        </Table>
      </div>

      {logsData.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(5)} // Total number of pages
          pageRangeDisplayed={3} // Number of page links to display
          marginPagesDisplayed={2} // Number of pages to display at the margins
          onPageChange={5} // Function to handle page click
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
