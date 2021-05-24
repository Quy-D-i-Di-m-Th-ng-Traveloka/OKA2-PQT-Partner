import { React } from 'react'
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import './NavPartner1.css'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import images from '../../images/importImages';
import Register from '../../Pages/Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resgister from '../../Pages/Register/Register.js';


const NavPartner1 = props => {

    return (
        <div className='NavBar' >
            <div className="navBarChinh" style={{ top: 0, backgroundColor: 'white', height: '60px' }}>

                <Nav className="row justify-content-start" >
                    <Nav.Item>
                        <Nav.Link>
                            <Link to ="/"><img id='logo' src={images.traveloka} /></Link>
                            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ padding: '200px' }}></Nav.Item>


                    <Nav.Item className="NavItem">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#f6f6f6', color: 'blue', border: 'none', borderRadius: '15px 15px' }} >

                                <span class="fas fa-portrait"></span>
                            Việt Nam (Tiếng Việt)
                        </Dropdown.Toggle>
                            <Dropdown.Menu style={{ width: '300px', backgroundColor: '#f6f6f6', color: 'blue', border: 'none', borderRadius: '15px 15px' }}>

                                <ListGroup className="listgroup">
                                    <ListGroup.Item>English</ListGroup.Item>
                                    <ListGroup.Item>Indonesia</ListGroup.Item>
                                </ListGroup>

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                    <Nav.Item  >
                        <Nav.Link >
                            <Link to="/register">
                            <Button id='btnDangky' onClick="getRegister()"  > Đăng ký tài khoản</Button>
                            </Link>

                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login">
                            <Button id='btnDangKyNoiNghi' onClick="getLogin()">Đăng nhập</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/showlistvoucher">
                            <Button id='btn' onClick="getListVoucher()">Danh sách Voucher</Button>
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/voucherform">
                            <Button id='btnvoucher' onClick="getListVoucher()">Thêm Voucher</Button>
                            </Link>
                        </Nav.Link>

                    </Nav.Item>
                </Nav>





            </div>
            </div>
            );
}

export default  NavPartner1;