import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton'
import './FormVoucherDetail.css'



export class Success extends Component {
    

    render() {
        //const {values :{id,ten,chu_thich_don_gian,chu_thich_day_du,ngay_bat_dau,ngay_ket_thuc,code_voucher,gia_tri,loai_voucher_id,so_luong,trang_thai,hinh_anh,doi_tac_id,diem_toi_thieu}}= this.props;
     
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                  <h1><center>Hoàn tất Voucher</center></h1> 
                             <p><center>Đã tạo thành công Voucher!</center></p>      
                     <br></br>
                    


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

export default Success
