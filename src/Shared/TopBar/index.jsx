import React, { useState } from "react";
import { bellIcon } from "../../Assets/icons/index";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MainModal from "../Modal/Modal";
const logoImage = require("../../Assets/gallery/icon.png");
const TopBar = () => {
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
  console.log("modal", modal);
  return (
    <>
      <div id="Topbar" className="">
        <div className="user">
          <div className="logo">
            <p className="text-white fw-bold ps-2 m-0 d-sm-block d-none">ENJOY THE WORDS</p>
          </div>
          <div className="image ms-2">
            <i className="bellIcon">{bellIcon}</i>

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
        cancelToggle={() => setModal(false)}
        modal={modal}
        CancelBtn={"Logout"}
      />
    </>
  );
};

export default TopBar;
