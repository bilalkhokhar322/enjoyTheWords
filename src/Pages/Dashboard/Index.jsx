import React from "react";
import MainCard from "../../Shared/mianCard/Index";
import { Col, Row } from "reactstrap";
import {
  notVerified,
  Customer,
  songs,
  verified,
  user,
} from "../../Assets/icons/index";
const Dashboard = () => {
  const cardItems = [
    {
      icon: user,
      name: "Users",
      num: 5,
    },
    {
      icon: Customer,
      name: "Users Logs",
      num: 7,
    },
    {
      icon: songs,
      name: "Songs",
      num: 1,
    },
    {
      icon: verified,
      name: "Verified",
      num: 4,
    },
    {
      icon: notVerified,
      name: "Not Verified",
      num: 0,
    },
  ];

  return (
    <>
      <Row className="m-0">
        {cardItems.map((items) => (
          <Col lg={4} md={6} sm={12}>
            <div className="w-100">
              <MainCard icon={items.icon} title={items.name} num={items.num} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
