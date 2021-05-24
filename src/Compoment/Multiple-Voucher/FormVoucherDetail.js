import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import './FormVoucherDetail.css'
import { DatePicker } from 'material-ui';
import {DropDown} from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';



export class FormVoucherDetail extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values , handleChange}= this.props;
     
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                  <h1><center>Thông Tin Voucher</center></h1>                 
                      
                    <div className="row">
                        <div className="column">
                            <h3>Loại Voucher</h3>
                        </div>
                        <div className="column">
                        <Dropdown>
                        <DropdownToggle >
                        Enter Voucher ID
                        </DropdownToggle>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                    floatingLabelFixed="Voucher ID"
                    onChange={this.props.handleChange('id')}
                    defaultValue={values.id} >ABC</Dropdown.Item>
                            <Dropdown.Item 
                    floatingLabelFixed="Voucher ID"
                    onChange={this.props.handleChange('id')}
                    defaultValue={values.id} >DEF</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        </div>
                    </div>
                   
                    
                    <br></br>
                    <div className="row">
                          <div className="column">Tên Voucher</div>
                          <div className="column">
                    <TextField hintText="Enter Voucher's Name"
                    floatingLabelFixed="Voucher's Name"
                    onChange={this.props.handleChange('ten')}
                    defaultValue={values.ten} 
                    
                    />
                    </div>
                    </div>
                    <br></br>

                    <div className="row">
                          <div className="column">Chú Thích Đơn Giản</div>
                          <div className="column">
                    <TextField hintText="Enter Description"
                    floatingLabelFixed="Description"
                    onChange={this.props.handleChange('chu_thich_don_gian')}
                    defaultValue={values.chu_thich_don_gian} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Chú Thích Đầy Đủ</div>
                          <div className="column">
                    <TextField hintText="Enter Description"
                    floatingLabelFixed="Description"
                    onChange={this.props.handleChange('chu_thich_day_du')}
                    defaultValue={values.chu_thich_day_du} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Ngày Bắt Đầu</div>
                          <div className="column">
                              <DatePicker
                                hintText="Chọn Ngày Bắt Đầu"
                                //onChange={this.props.handleChange('ngay_ket_thuc')}
                                //defaultValue={values.ngay_ket_thuc} 
                              />

                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Ngày Kết Thúc</div>
                          <div className="column">
                            <DatePicker hintText="Nhập Ngày Kết Thúc"
                            floatingLabelFixed="Ngày Kết Thúc"
                            //onChange={this.props.handleChange('ngay_ket_thuc')}
                            //defaultValue={values.ngay_ket_thuc} 
                    
                    />
                    </div>
                    </div>

                    <br></br>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                    />


                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style={
    button : {
        margin:30
    }
}

export default FormVoucherDetail
