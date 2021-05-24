import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import './FormVoucherDetail.css'
import { DatePicker } from 'material-ui';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';

export class FormVoucherDetails1 extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e=> {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values , handleChange}= this.props;
     
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                  <h1><center>Thông Tin Voucher</center></h1>                 
                      <div className="row">
                          <div className="column">Code Voucher</div>
                          <div className="column">
                    <TextField hintText="Enter Code Voucher"
                    floatingLabelFixed="Code Voucher"
                    onChange={this.props.handleChange('code_voucher')}
                    defaultValue={values.code_voucher} 
                    />
                    </div>
                    </div>
                    
                    <br></br>
                    <div className="row">
                          <div className="column">Giá Trị</div>
                          <div className="column">
                    <TextField hintText="Nhập Giá Trị Voucher"
                    floatingLabelFixed="Giá Trị Voucher"
                    onChange={this.props.handleChange('gia_tri')}
                    defaultValue={values.gia_tri} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Loại Voucher ID</div>
                          <div className="column">
                    <TextField hintText="Nhập Loại Voucher ID"
                    floatingLabelFixed="Loại Voucher ID"
                    onChange={this.props.handleChange('loai_voucher_id')}
                    defaultValue={values.loai_voucher_id} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Số Lượng</div>
                          <div className="column">
                    <TextField hintText="Nhập Số Lượng"
                    floatingLabelFixed="Số Lượng"
                    onChange={this.props.handleChange('so_luong')}
                    defaultValue={values.so_luong} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Trạng Thái</div>
                          <div className="column">
                          <TextField hintText="Nhập Trạng Thái"
                    floatingLabelFixed="Trạng Thái"
                    onChange={this.props.handleChange('trang_thai')}
                    defaultValue={values.trang_thai} 
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
                    &emsp;
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={style.button}
                    onClick={this.back}
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

export default FormVoucherDetails1
