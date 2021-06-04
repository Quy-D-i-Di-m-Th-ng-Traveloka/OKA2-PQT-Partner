import { React, useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

import "./NavPartner1.css";
import Button from "react-bootstrap/Button";
import images from "../../images/importImages";
import { Link } from "react-router-dom";

const NavPartner1 = (props) => {
  const [navBar, setNavBar] = useState();

  useEffect(() => {
    if (props.id == undefined) {
      setNavBar(
        <>
          <Nav.Item>
            <Nav.Link id="khuyenMai">
              <Link to="/login">
                <Button>Đăng nhập</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </>
      );
    } else {
      setNavBar(
        <>
          <Nav.Item>
            <Nav.Link>
              <Link to={{ pathname: "/showlistvoucher", state: props.id }}>
                <Button>Danh sách Gift Voucher</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={{ pathname: "/voucherform", state: props.id }}>
                <Button>Thêm Voucher</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={{ pathname: "/", state: undefined }}>
                <Button>Đăng xuất</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </>
      );
    }
  }, [props.id]);

  return (
    <div className="NavBar">
      <div className="navBarChinh">
        <Nav className="row justify-content">
          <Nav.Item>
            <Nav.Link>
              <Link to={{ pathname: "/", state: props.id }}>
                <img id="logo" src={images.traveloka} alt="traveloka" />
              </Link>
            </Nav.Link>
          </Nav.Item>
          {navBar}
        </Nav>
      </div>
    </div>
  );
};

export default NavPartner1;
