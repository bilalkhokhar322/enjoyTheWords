import { Table } from "reactstrap";
import { edit, del } from "../../Assets/icons/index";
import { listUser, deleteUser } from "../../Redux/features/User/userApi";
import { useDispatch } from "react-redux";
const UserTable = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (userId) => {
    const user = {
      apiEndpoint: `/admin/deleteUser?userId=${userId}`,
    };
    dispatch(deleteUser(user)).then((res) => {
      if (res.type === "deleteUser/fulfilled") {
        props.fetchUsers();
      }
    });
  };

  return (
    <>
      <div id="userTable">
        <Table responsive className="table bg-transparent">
          <br />
          <thead>
            <tr>
              {props.tableHeadingArr.map((HeadingArr) => (
                <>
                  <th className={HeadingArr === "Actions" ? "text-center" : ""}>
                    {HeadingArr}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.userInfo?.map((DataArr, index) => (
              <tr key={DataArr.id}>
                <>
                  <th scope="row">{index + 1}</th>
                  <td>{DataArr}</td>

                  <td>
                    <span
                      class={
                        DataArr.isVerified
                          ? `border border-success fw-light badge badge-pill bg-success`
                          : `border border-danger fw-light badge badge-pill bg-danger `
                      }
                    >
                      {DataArr.isVerified ? "Verified" : "No Verified"}
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
                          handleDelete(DataArr.id);
                        }}
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
