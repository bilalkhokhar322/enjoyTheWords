import React, { useEffect, useState } from "react";
import MainCard from "../../Shared/mianCard/Index";
import { Col, Row } from "reactstrap";
import {
  notVerified,
  Customer,
  songs,
  verified,
  user,
} from "../../Assets/icons/index";
import { useDispatch } from "react-redux";
import { allSongs } from "../../Redux/features/User/userApi";
import { toast } from "react-toastify";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState();
  const [usersLogs, setUsersLogs] = useState();
  const [song, setSong] = useState();
  const [verifiedUsers, setVerifiedUsers] = useState();
  const [notVerifiedUsers, setNotVerifiedUsers] = useState();

  const cardItems = [
    {
      icon: user,
      name: "Users",
      num: users,
    },
    {
      icon: Customer,
      name: "User Logs",
      num: usersLogs,
    },
    {
      icon: songs,
      name: "Songs",
      num: song,
    },
    {
      icon: verified,
      name: "Verified",
      num: verifiedUsers,
    },
    {
      icon: notVerified,
      name: "Not Verified",
      num: notVerifiedUsers,
    },
  ];

  const handleUsersList = () => {
    const data = {
      apiEndpoint: `admin/dashboardCounts`,
    };
    dispatch(allSongs(data)).then((res) => {
      if (res.type === "allSongs/fulfilled") {
        console.log("allSongs", res?.payload?.data);
        setUsers(res?.payload?.data?.user);
        console.log(res?.payload?.data?.user);
        setUsersLogs(res?.payload?.data?.log);
        setSong(res?.payload?.data?.songs);
        setVerifiedUsers(res?.payload?.data?.verifiedUser);
        setNotVerifiedUsers(res?.payload?.data?.unVerifiedUser);
      }
    });
  };

  useEffect(() => {
    handleUsersList();
  }, [users]);
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
