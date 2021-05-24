import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import './FormVoucherDetail.css'
import { DatePicker } from 'material-ui';
import {List, ListItem} from 'material-ui/List';


export class FormVoucherDetail extends Component {
    continue = e=> {
        e.preventDefault();

        this.props.nextStep();
    }

    back = e=> {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values :{id,ten,chu_thich_don_gian,chu_thich_day_du,ngay_bat_dau,ngay_ket_thuc,code_voucher,gia_tri,loai_voucher_id,so_luong,trang_thai,hinh_anh,doi_tac_id,diem_toi_thieu}}= this.props;
     
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                  <h1><center>Xác nhận Voucher</center></h1>
                  <div className="confirm">                 
                      <List >
                          <ListItem primaryText="ID"
                          secondaryText={id}
                          />
                      </List>
                      <List >
                          <ListItem primaryText="Tên Voucher"
                          secondaryText={ten}
                          />
                      </List>
                      <List >
                          <ListItem primaryText="Chú Thích Đơn Giản"
                          secondaryText={chu_thich_don_gian}
                          />
                      </List>
                      <List >
                          <ListItem primaryText="Chú Thích Đầy Đủ"
                          secondaryText={chu_thich_day_du}
                          />
                      </List>
                      <List >
                          <ListItem primaryText="Ngày Bắt Đầu"
                          secondaryText={ngay_bat_dau}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Ngày Kết Thúc"
                          secondaryText={ngay_ket_thuc}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Code Voucher"
                          secondaryText={code_voucher}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Giá Trị"
                          secondaryText={gia_tri}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Loại Voucher ID"
                          secondaryText={loai_voucher_id}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Số Lượng"
                          secondaryText={so_luong}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Trạng Thái"
                          secondaryText={trang_thai}
                          />
                      </List>


                      <List >
                          <ListItem primaryText="Hình Ảnh"
                          secondaryText={hinh_anh}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Đối tác ID"
                          secondaryText={doi_tac_id}
                          />
                      </List>

                      <List >
                          <ListItem primaryText="Điểm tối thiểu"
                          secondaryText={diem_toi_thieu}
                          />
                      </List>
                      </div>

                    <br></br>
                    <RaisedButton
                    label="Confirm & Continue"
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

export default FormVoucherDetail
