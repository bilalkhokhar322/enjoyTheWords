import React, { useState } from "react";
import HamBurgerButton from "../HamBurgerButton";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  dashboard,
  permissions,
  management,
  userIcon,
  userLogs,
  upload,
  userControl,
} from "../../../../Assets/icons/index";

const NavBar = ({ toggle, onClick }) => {
  let { pathname } = useLocation();
  const LinkItems = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: dashboard,
    },
    {
      name: "Permissions",
      to: "/permissions",
      icon: permissions,
    },
    {
      name: "Management",
      to: "/management",
      icon: management,
    },
    {
      name: "Users  ",
      to: "/user",
      icon: userIcon,
    },
    {
      name: "Users Logs  ",
      to: "/userLogs",
      icon: userLogs,
    },

    {
      name: "Upload Logo  ",
      to: "/uploadLogo",
      icon: upload,
    },
    {
      name: "User Control",
      to: "/userControl",
      icon: userControl,
    },
  ];

  return (
    <>
      <div id="Nav">
        <div
          className={
            !toggle
              ? "hamBurgerButton mb-3 d-flex justify-content-end text-end"
              : "hamBurgerButton mb-3 d-flex justify-content-center "
          }
        >
          <HamBurgerButton onClick={onClick} toggle={toggle} />
        </div>
        <div className="navItems">
          {LinkItems.map((item) => (
            <>
              <Link className={"link"} to={item?.to}>
                <div className={item.to === pathname ? "isActive" : ""}>
                  <div
                    className={!toggle ? "list" : "list justify-content-center"}
                  >
                    <i className={!toggle ? "d-flex pe-2" : "d-flex"}>
                      {item.icon}
                    </i>
                    <div className={toggle && ""}>
                      <main
                        className={
                          !toggle ? "ShowOpacity d-block" : "HideOpacity d-none"
                        }
                      >
                        {item.name}
                      </main>
                    </div>
                    <br />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
