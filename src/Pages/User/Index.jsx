import React from "react";
import { edit, del, previous, next } from "../../Assets/icons/index";
import HeadingText from "../../Shared/MainHeading/Index";
import ReactPaginate from "react-paginate";
import { Table } from "reactstrap";

const User = () => {
  const tableHeaderData = ["#", "Name", "Number", "Email", "Status", "Actions"];
  const usersData = [
    {
      name: "Bilal",
      phoneNo: "03011625654",
      email: "test123456@gmail.com",
      isVerified: true,
    },
    {
      name: "Hamza",
      phoneNo: "0341625654",
      email: "test123456@gmail.com",
      isVerified: true,
    },
    {
      name: "Haroon",
      phoneNo: "03011625654",
      email: "qwerty3456@gmail.com",
      isVerified: true,
    },
    {
      name: "Waleed",
      phoneNo: "03788625654",
      email: "offuca555@gmail.com",
      isVerified: true,
    },
    {
      name: "Chota Don",
      phoneNo: "0356225654",
      email: "testtest54546@gmail.com",
      isVerified: false,
    },
    {
      name: "Uzair",
      phoneNo: "03571625654",
      email: "test123456@gmail.com",
      isVerified: true,
    },
  ];

  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <div id="tableWrapper">
        <Table responsive className="table bg-transparent">
          <thead>
            <tr>
              {tableHeaderData.map((heading, index) => (
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
            {usersData?.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.name}</td>
                <td>{data?.phoneNo}</td>
                <td>{data?.email}</td>
                <td>
                  <span
                    className={
                      data.isVerified
                        ? "border border-success fw-light badge badge-pill bg-success"
                        : "border border-danger fw-light badge badge-pill bg-danger"
                    }
                  >
                    {data.isVerified ? "Verified" : "Not Verified"}
                  </span>
                </td>
                <td>
                  <div className="d-flex justify-content-evenly">
                    <i
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {edit}
                    </i>
                    <i
                      onClick={() => {}}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {del}
                    </i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {usersData.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(5)} // Total number of pages
          pageRangeDisplayed={3} // Number of page links to display
          marginPagesDisplayed={3} // Number of pages to display at the margins
          onPageChange={5}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={previous} // Define previous label
          nextLabel={next} // Define next label
        />
      )}
    </>
  );
};

export default User;
