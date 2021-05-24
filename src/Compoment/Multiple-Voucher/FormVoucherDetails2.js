import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import './FormVoucherDetail.css'


export class FormVoucherDetails2 extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e=> {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values , handleChange  }= this.props;
     
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                  <h1><center>Thông Tin Voucher</center></h1>                 
                      <div className="row">
                          <div className="column">Hình Ảnh</div>
                          <div className="column">
                    <TextField hintText="Chọn Hình Ảnh"
                    floatingLabelFixed="Hình Ảnh"
                    onChange={this.props.handleChange('hinh_anh')}
                    defaultValue={values.hinh_anh} 
                    />
                    </div>
                    </div>
                    
                    <br></br>
                    <div className="row">
                          <div className="column">Đối tác ID</div>
                          <div className="column">
                    <TextField hintText="Nhập Đối tác ID"
                    floatingLabelFixed="Đối tác ID"
                    onChange={this.props.handleChange('doi_tac_id')}
                    defaultValue={values.doi_tac_id} 
                    
                    />
                    </div>
                    </div>

                    <br></br>

                    <div className="row">
                          <div className="column">Điểm tối thiểu</div>
                          <div className="column">
                    <TextField hintText="Nhập Điểm tối thiểu"
                    floatingLabelFixed="Điểm tối thiểu"
                    onChange={this.props.handleChange('diem_toi_thieu')}
                    defaultValue={values.diem_toi_thieu} 
                    
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

export default FormVoucherDetails2
