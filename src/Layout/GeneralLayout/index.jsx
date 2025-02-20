import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TopBar from "../../Shared/TopBar/index";
import NavBar from "../../Shared/SideBar/HamBurger/NavBar/Index";
import { useSelector } from "react-redux";
const GeneralLayout = (props) => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const Show = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Container
        fluid
        className={user ? "p-3 vh-100" : "vh-100"}
        id="GeneralLayout"
      >
        <Row id="GeneralRow" className="">
          {user ? (
            <>
              <Col
                id="sidebar"
                lg={isOpen ? 1 : 2}
                md={isOpen ? 1 : 3}
                sm={isOpen ? 1 : 3}
                xs={isOpen ? 2 : 3}
                className={!isOpen ? "open" : "close"}
              >
                <div>
                  <NavBar onClick={Show} toggle={isOpen} />
                </div>
              </Col>
              <Col sm={""} xs={9}>
                <Row id="contentRow" className="">
                  <Col xs={12}>
                    <TopBar />
                  </Col>
                  <Col xs={12} className="">
                    <div id="content">
                      <>{props.children}</>
                    </div>
                  </Col>
                </Row>
              </Col>{" "}
            </>
          ) : (
            <>
              <Col md={12} className="vh-100">
                <>{props.children}</>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default GeneralLayout;
