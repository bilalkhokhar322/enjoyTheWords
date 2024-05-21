import React from "react";
import MainCard from "../../Shared/mianCard/Index";
import { Col, Row } from "reactstrap";
import { Site, Customer, Employee, Staff } from "../../Assets/icons/index";
const Dashboard = () => {
  const cardItems = [
    {
      icon: Site,
      name: "Sites",
      num: 2,
    },
    {
      icon: Customer,
      name: "Customer",
      num: 3,
    },
    {
      icon: Employee,
      name: "Employee",
      num: 3,
    },
    {
      icon: Staff,
      name: "Staff",
      num: 2,
    },
  ];
  return (
    <>
      <Row className="m-0">
        {cardItems.map((items) => (
          <Col lg={3} md={6} sm={6} xs={12}>
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
