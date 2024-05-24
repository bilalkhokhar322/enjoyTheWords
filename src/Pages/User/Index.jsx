import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { edit, del } from "../../Assets/icons/index";
import UserTable from "../../Shared/UserTable/Index";
import HeadingText from "../../Shared/MainHeading/Index";
import { deleteUser, userListing } from "../../Redux/features/User/userApi";

const User = () => {
  const dispatch = useDispatch();
  const tableHeaderData = ["#", "Name", "Number", "Email", "Status", "Actions"];

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
    const data = {
      apiEndpoint: "/admin/listUser",
    };
    dispatch(userListing(data)).then((res) => {
      if (res.type === "userListing/fulfilled") {
        setUsersData(res?.payload?.data?.Total_user?.rows);
      }
    });
  };

  return (
    <>
      <HeadingText className={"text-white display-5"} Text={"Users"} />
      <UserTable headerData={tableHeaderData} bodyData={tableData} />
    </>
  );
};

export default User;
