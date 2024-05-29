import React, { useState } from "react";
import { Button, Col, Input, Label } from "reactstrap";

const Permissions = () => {
  const [permissionData, setPermissionData] = useState([]);

  const PermissionsArr = [
    "Permission",
    "Staff",
    "Users",
    "User Logs",
    "Upload",
  ];

  console.log(permissionData);

  // const handleCheckboxChange = (event) => {     // this code save inputs Values
  //   const value = event.target.value;
  //   const isChecked = event.target.checked;

  //   if (isChecked) {
  //     setPermissionData([...permissionData, value]);
  //   } else {
  //     setPermissionData(permissionData.filter((item) => item !== value));
  //   }
  // };

  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setPermissionData([...permissionData, index]);
    } else {
      setPermissionData(permissionData.filter((item) => item !== index));
    }
  };

  return (
    <>
      <Col md={12} className="">
        <div>
          <br />
          <h2 className="text-white">Roles & Permissions</h2>
          <br />
          <br />
          {PermissionsArr.map((item, index) => (
            <div key={index + 1} className="ms-3">
              <Input
                id={`checkbox-${index + 1}`}
                type="checkbox"
                value={item}
                // onChange={handleCheckboxChange} // values getting
                onChange={(e) => handleCheckboxChange(e, index + 1)}
                checked={permissionData.includes(index + 1)}
              />
              <Label
                className="ms-3 text-white"
                htmlFor={`checkbox-${index + 1}`}
              >
                {item}
              </Label>
              <br />
            </div>
          ))}
        </div>
        <br />
        <br />
        <Button className="bg-transparent ms-3 px-4"> Submit </Button>
      </Col>
    </>
  );
};

export default Permissions;
