import React, { useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import { edit, del } from "../../Assets/icons/index";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/features/User/userApi";
const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); // Adjust based on your Redux state shape

  useEffect(() => {
    const userListData = {
      apiEndpoint: "/admin/listUser",
    };
    dispatch(listUser(userListData)).then((res) => {
      console.log(res);
    });
  }, [dispatch]);

  const tableHeadingArr = [
    {
      num: "#",
      title: "Title",
      status: "Status",
      createdAt: "CreatedAt",
      category: "Category",
      actions: "Actions",
    },
  ];
  const tableDataArr = [
    {
      title: "necessitatibus quo temporibus atque quia optio Sint repellendus.",
      status: "published",
      createdAt: "November 14, 2022 5:06 AM",
      category: "At Labore Lit",
      actions: "Actions",
    },
  ];

  return (
    <>
      <div id="userTable">
        <Table responsive className="table bg-transparent">
          <br />
          <thead>
            <tr>
              {tableHeadingArr.map((HeadingArr) => (
                <>
                  <th>{HeadingArr.num}</th>
                  <th>{HeadingArr.title}</th>
                  <th>{HeadingArr.status}</th>
                  <th>{HeadingArr.createdAt}</th>
                  <th>{HeadingArr.category}</th>
                  <th>{HeadingArr.actions}</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableDataArr.map((DataArr, index) => (
              <tr>
                <>
                  <th scope="row">{index + 1}</th>
                  <td>{DataArr.title}</td>
                  <td>{DataArr.status}</td>
                  <td>{DataArr.createdAt}</td>
                  <td>{DataArr.category}</td>
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
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {del}
                      </i>
                    </div>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserTable;
