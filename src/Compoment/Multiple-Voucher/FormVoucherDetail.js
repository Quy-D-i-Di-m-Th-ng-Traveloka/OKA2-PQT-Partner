import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./FormVoucherDetail.css";
import { Form, Button } from "react-bootstrap";
import MenuItem from "material-ui/MenuItem";

export class FormVoucherDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaiVoucher: [],
    };
  }

  componentDidMount() {
    fetch("https://gift-api-v1.herokuapp.com/vouchertype/list")
      .then((res) => res.json())
      .then((res) => this.setState({ loaiVoucher: res }));
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div id="backGround">
        <div id="formGift">
          <MuiThemeProvider>
            <React.Fragment>
              <br></br>
              <h1>
                <center>
                  <strong>NHẬP THÔNG TIN GIFT</strong>
                </center>
              </h1>

              <div className="row">
                <div className="col-6">Loại Voucher</div>
                <div className="col-6">
                  <select
                    name="loai_voucher_id"
                    onChange={this.props.handleChange("loai_voucher_id")}
                  >
                    <option>Chọn loại voucher</option>
                    {this.state.loaiVoucher.map((type, index) => {
                      return (
                        <option value={type.id} key={index}>
                          {type.ten}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <br></br>
              <div className="row">
                <div className="col-6">Tên Voucher</div>
                <div className="col-6">
                  <TextField
                    error
                    helperText="Incorrect entry."
                    hintText="Enter Voucher's Name"
                    floatingLabelFixed="Voucher's Name"
                    onChange={this.props.handleChange("ten")}
                    defaultValue={values.ten}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">Chú Thích Đơn Giản</div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="Description"
                    onChange={this.props.handleChange("chu_thich_don_gian")}
                    defaultValue={values.chu_thich_don_gian}
                    multiLine
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">Chú Thích Đầy Đủ</div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="Description"
                    onChange={this.props.handleChange("chu_thich_day_du")}
                    defaultValue={values.chu_thich_day_du}
                    multiLine
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">Ngày Bắt Đầu</div>
                <div className="col-6">
                  <Form.Group controlId="formStartDate">
                    <Form.Control
                      type="date"
                      name="ngay_bat_dau"
                      onChange={this.props.handleChange("ngay_bat_dau")}
                      defaultValue={values.ngay_bat_dau}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-6">Ngày Kết Thúc</div>
                <div className="col-6">
                  <Form.Group controlId="formExpDate">
                    <Form.Control
                      type="date"
                      name="ngay_ket_thuc"
                      onChange={this.props.handleChange("ngay_ket_thuc")}
                      defaultValue={values.ngay_ket_thuc}
                    />
                  </Form.Group>
                </div>
              </div>

              <RaisedButton
                label="Tiếp tục"
                primary={true}
                style={style.button}
                onClick={this.continue}
              />
            </React.Fragment>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  button: {
    margin: 30,
  },
};

export default FormVoucherDetail;
