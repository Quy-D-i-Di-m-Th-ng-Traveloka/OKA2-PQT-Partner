import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import "./FormVoucherDetail.css";
import { List, ListItem } from "material-ui/List";
import { Link, Redirect } from "react-router-dom";
import { isEmptyObject } from "jquery";

export class FormVoucherDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        ten,
        chu_thich_don_gian,
        chu_thich_day_du,
        ngay_bat_dau,
        ngay_ket_thuc,
        code_voucher,
        gia_tri,
        loai_voucher_id,
        so_luong,
        trang_thai,
        doi_tac_id,
        diem_toi_thieu,
        dich_vu_id,
      },
    } = this.props;

    const image = this.props.image;

    const checkEmpty = () => {
      for (const [key, value] of Object.entries(this.props.values)) {
        console.log(key + " " + value);
        if (value == "") {
          return true;
        }
      }
    };

    const compareDateAndPOST = (startDate, endDate) => {
      let curDate = new Date().toISOString().substring(0, 10);
      if (checkEmpty()) {
        window.alert("Vui lòng nhập đầy đủ thông tin");
      } else if (startDate < curDate) {
        window.alert("Ngày bắt đầu không được nhỏ hơn ngày hôm nay");
      } else if (endDate <= startDate) {
        window.alert("Ngày hết hạn không được nhỏ hơn ngày bắt đầu");
      } else {
        console.log(this.props.values);
        console.log(image);
        var bodyFormData = new FormData();
        bodyFormData.append("data", JSON.stringify(this.props.values));
        bodyFormData.append("hinh_anh", image);
        axios({
          method: "post",
          url: "https://gift-api-v1.herokuapp.com/voucher/add",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          console.log(res.data);
          if (res.data == "Success") {
            window.alert("Thêm thành công");
            return <Redirect to="/" />;
          } else window.alert("Thêm thất bại");
        });
      }
    };

    return (
      <div id="backGround">
        <div id="formGift">
          <MuiThemeProvider>
            <React.Fragment>
              <br></br>
              <h1>
                <center>
                  <strong>Xác nhận Voucher</strong>
                </center>
              </h1>
              <div className="confirm">
                <List>
                  <ListItem primaryText="Tên Voucher" secondaryText={ten} />

                  <ListItem
                    primaryText="Chú Thích Đơn Giản"
                    secondaryText={chu_thich_don_gian}
                  />

                  <ListItem
                    primaryText="Chú Thích Đầy Đủ"
                    secondaryText={chu_thich_day_du}
                  />

                  <ListItem
                    primaryText="Ngày Bắt Đầu"
                    secondaryText={ngay_bat_dau}
                  />

                  <ListItem
                    primaryText="Ngày Kết Thúc"
                    secondaryText={ngay_ket_thuc}
                  />

                  <ListItem
                    primaryText="Code Voucher"
                    secondaryText={code_voucher}
                  />

                  <ListItem primaryText="Giá Trị" secondaryText={gia_tri} />

                  <ListItem
                    primaryText="Loại Voucher ID"
                    secondaryText={loai_voucher_id}
                  />

                  <ListItem
                    primaryText="Loại dịch vụ"
                    secondaryText={dich_vu_id}
                  />

                  <ListItem primaryText="Số Lượng" secondaryText={so_luong} />

                  <ListItem
                    primaryText="Trạng Thái"
                    secondaryText={trang_thai}
                  />

                  <ListItem primaryText="Hình Ảnh" secondaryText={image.name} />

                  <ListItem
                    primaryText="Đối tác ID"
                    secondaryText={doi_tac_id}
                  />

                  <ListItem
                    primaryText="Điểm tối thiểu"
                    secondaryText={diem_toi_thieu}
                  />
                </List>
              </div>
              <br></br>
              <RaisedButton
                label="Xác nhận và tiếp tục"
                primary={true}
                onClick={() =>
                  compareDateAndPOST(
                    this.props.values.ngay_bat_dau,
                    this.props.values.ngay_ket_thuc
                  )
                }
              />
              &emsp;
              <RaisedButton
                label="Trở lại"
                primary={false}
                onClick={this.back}
              />
            </React.Fragment>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default FormVoucherDetail;
