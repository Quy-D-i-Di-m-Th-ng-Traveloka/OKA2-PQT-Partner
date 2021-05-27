import { React } from "react";
import { Nav } from "react-bootstrap";

import "./NavPartner1.css";
import Button from "react-bootstrap/Button";
import images from "../../images/importImages";
import { Link } from "react-router-dom";

const NavPartner1 = (props) => {
  return (
    // <div className='NavBar' >
    //     <div className="navBarChinh" style={{ top: 0, backgroundColor: 'white', height: '60px' }}>

    //         <Nav className="row justify-content-start" >
    //             <Nav.Item>
    //                 <Nav.Link>
    //                     <Link to ="/"><img id='logo' src={images.traveloka} /></Link>
    //                     </Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item style={{ padding: '200px' }}></Nav.Item>

    //             <Nav.Item className="NavItem">
    //                 <Dropdown>
    //                     <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#f6f6f6', color: 'blue', border: 'none', borderRadius: '15px 15px' }} >

    //                         <span class="fas fa-portrait"></span>
    //                     Việt Nam (Tiếng Việt)
    //                 </Dropdown.Toggle>
    //                     <Dropdown.Menu style={{ width: '300px', backgroundColor: '#f6f6f6', color: 'blue', border: 'none', borderRadius: '15px 15px' }}>

    //                         <ListGroup className="listgroup">
    //                             <ListGroup.Item>English</ListGroup.Item>
    //                             <ListGroup.Item>Indonesia</ListGroup.Item>
    //                         </ListGroup>

    //                     </Dropdown.Menu>
    //                 </Dropdown>
    //             </Nav.Item>
    //             <Nav.Item  >
    //                 <Nav.Link >
    //                     <Link to="/register">
    //                     <Button id='btnDangky' onClick="getRegister()"  > Đăng ký tài khoản</Button>
    //                     </Link>

    //                 </Nav.Link>
    //                 <Nav.Link>
    //                     <Link to="/login">
    //                     <Button id='btnDangKyNoiNghi' onClick="getLogin()">Đăng nhập</Button>
    //                     </Link>
    //                 </Nav.Link>
    //                 <Nav.Link>
    //                     <Link to="/showlistvoucher">
    //                     <Button id='btn' onClick="getListVoucher()">Danh sách Voucher</Button>
    //                     </Link>
    //                 </Nav.Link>

    //                 <Nav.Link>
    //                     <Link to="/voucherform">
    //                     <Button id='btnvoucher' onClick="getListVoucher()">Thêm Voucher</Button>
    //                     </Link>
    //                 </Nav.Link>

    //             </Nav.Item>
    //         </Nav>

    //     </div>
    //     </div>

    <div className="NavBar">
      <div className="navBarChinh">
        <Nav className="row justify-content">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                <img id="logo" src={images.traveloka} alt="traveloka" />
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="khuyenMai">
              <Link to="/login">
                <Button>Đăng nhập</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/showlistvoucher">
                <Button>Danh sách Gift Voucher</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/voucherform">
                <Button>Thêm Voucher</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {props.children}
    </div>
  );
};

export default NavPartner1;
