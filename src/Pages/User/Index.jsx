import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { edit, del } from "../../Assets/icons/index";
import UserTable from "../../Shared/UserTable/Index";
import HeadingText from "../../Shared/MainHeading/Index";
import { deleteUser, userListing } from "../../Redux/features/User/userApi";
import ReactPaginate from "react-paginate";
import { PER_PAGE_SIZE } from "../../utils/constants";

const User = () => {
  const dispatch = useDispatch();
  const tableHeaderData = ["#", "Name", "Number", "Email", "Status", "Actions"];
  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  useEffect(() => {
    setTableData(
      <>
        {usersData?.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{data?.name}</td>
            <td>{data?.phoneNo}</td>
            <td>{data?.email}</td>
            <td>
              <span
                class={
                  data.isVerified
                    ? `border border-success fw-light badge badge-pill bg-success`
                    : `border border-danger fw-light badge badge-pill bg-danger `
                }
              >
                {data.isVerified ? "Verified" : "No Verified"}
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
                  onClick={() => {
                    handleDelete(data.id);
                  }}
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
    const pageNumber = currentPage + 1;

    const data = {
      apiEndpoint: `/admin/listUser?page=${pageNumber}&size=${PER_PAGE_SIZE}`,
    };
    dispatch(userListing(data)).then((res) => {
      if (res.type === "userListing/fulfilled") {
        setUsersData(res?.payload?.data?.users);
        setPageCount(res?.payload?.data?.totalUser / PER_PAGE_SIZE);
      }
    });
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <UserTable headerData={tableHeaderData} bodyData={tableData} />

      {usersData.length && (
        <ReactPaginate
          pageCount={Math.ceil(pageCount)} // Total number of pages
          pageRangeDisplayed={3} // Number of page links to display
          marginPagesDisplayed={3} // Number of pages to display at the margins
          onPageChange={handlePageClick} // Function to handle page click
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default User;
