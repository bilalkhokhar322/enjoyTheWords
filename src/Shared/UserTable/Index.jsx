import { Table } from "reactstrap";
import Loader from "../Loader/Index";
import { useSelector } from "react-redux";

const UserTable = (props) => {
  const { loading } = useSelector((state) => state.user);

  return (
    <>
      <div id="tableWrapper">
        <Table responsive className="table bg-transparent">
          <br />
          <thead>
            <tr>
              {props.headerData.map((HeadingArr) => (
                <>
                  <th className={HeadingArr === "Actions" ? "text-center" : ""}>
                    {HeadingArr}
                  </th>
                </>
              ))}
            </tr>
          </thead>

          <tbody>{props?.bodyData}</tbody>
        </Table>
        {loading === "pending" && <Loader />}
      </div>
    </>
  );
};

export default UserTable;
