import { Table } from "reactstrap";
const UserTable = (props) => {
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
      </div>
    </>
  );
};

export default UserTable;
