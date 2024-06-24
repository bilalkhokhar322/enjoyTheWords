import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MainModal from "../Modal/Modal";

import logoImage from "../../Assets/gallery/icon.png";
import { customLogout } from "../../Redux/features/User/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleLogout = () => {
    dispatch(customLogout());
    setModal(!modal);
    navigate("/");
  };

  return (
    <>
      <div id="Topbar" className="">
        <div className="user">
          <div className="logo">
            <p className="text-white fw-bold ps-2 m-0 d-sm-block d-none">
              ENJOY THE WORDS
            </p>
          </div>
          <div className="image ms-2">
            <Dropdown
              className="dropdownList"
              onMouseOver={onMouseEnter}
              onMouseLeave={onMouseLeave}
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle caret>
                <img className="image-fluid" src={logoImage} alt="" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem divider />

                <DropdownItem onClick={toggleModal}>LogOut</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <MainModal
        modalBodyText={"Do you want to log out of your account?"}
        toggleModal={toggleModal}
        cancelToggle={handleLogout}
        modal={modal}
        CancelBtn={"Logout"}
      />
    </>
  );
};

export default TopBar;
