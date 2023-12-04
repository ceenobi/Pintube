import { useState } from "react";
import { Icon } from "@iconify/react";
import { Image, Offcanvas } from "react-bootstrap";
import { links } from "../../utils";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../config";
import { userService } from "../../services";

const SidebarMobile = () => {
  const [show, setShow] = useState(false);
  const { loggedInUser } = useStateContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Icon
        icon="ant-design:menu-outlined"
        className="display-3 d-xl-none text-secondary cursor"
        onClick={handleShow}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-capitalize">
            <NavLink
              to={`/profile/${loggedInUser.userName}`}
              className="text-black"
              onClick={handleClose}
            >
              <Image
                src={loggedInUser.profilePhoto}
                roundedCircle
                className="me-2 object-fit-cover"
                style={{ width: "40px", height: "40px" }}
                alt={loggedInUser.userName}
              />
              Hi, {loggedInUser.userName}{" "}
            </NavLink>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center">
            {links.map((link, i) => (
              <NavLink
                to={`/${link.path}`}
                key={i}
                className={({ isActive }) =>
                  isActive ? "activeIcon" : "no-activeIcon"
                }
                title={link.label}
                onClick={handleClose}
              >
                <div className="fs-2 mb-0">{link.icon}</div>
                <p style={{ fontSize: "14px" }}>{link.label}</p>
              </NavLink>
            ))}
            <Icon
              icon="ic:outline-power-settings-new"
              className="fs-1 mt-4 logout"
              title="logout"
              onClick={() => userService.logout()}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMobile;
