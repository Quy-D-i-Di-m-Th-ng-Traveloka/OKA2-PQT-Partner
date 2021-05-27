import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./FormVoucherDetail.css";

export class FormVoucherDetails1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaiDichVu: [],
    };
  }

  componentDidMount() {
    fetch("https://gift-api-v1.herokuapp.com/service/list")
      .then((res) => res.json())
      .then((res) => this.setState({ loaiDichVu: res }));
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">Code Voucher</div>
                  <div className="col-6">
                    <TextField
                      hintText="Enter Code Voucher"
                      floatingLabelFixed="Code Voucher"
                      onChange={this.props.handleChange("code_voucher")}
                      defaultValue={values.code_voucher}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-6">Giá Trị</div>
                  <div className="col-6">
                    <TextField
                      type="number"
                      hintText="Nhập Giá Trị Voucher"
                      floatingLabelFixed="Giá Trị Voucher"
                      onChange={this.props.handleChange("gia_tri")}
                      defaultValue={values.gia_tri}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-6">Loại dịch vụ</div>
                  <div className="col-6">
                    <select
                      name="dich_vu_id"
                      onChange={this.props.handleChange("dich_vu_id")}
                    >
                      <option>Chọn loại dịch vụ</option>
                      {this.state.loaiDichVu.map((type, index) => {
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
                  <div className="col-6">Số Lượng</div>
                  <div className="col-6">
                    <TextField
                      type="number"
                      hintText="Nhập Số Lượng"
                      floatingLabelFixed="Số Lượng"
                      onChange={this.props.handleChange("so_luong")}
                      defaultValue={values.so_luong}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-6">Trạng Thái</div>
                  <div className="col-6">
                    <TextField
                      disabled
                      id="standard-disabled"
                      onChange={this.props.handleChange("trang_thai")}
                      defaultValue={values.trang_thai}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <RaisedButton
                label="Tiếp tục"
                primary={true}
                style={style.button}
                onClick={this.continue}
              />
              &emsp;
              <RaisedButton
                label="Trở lại"
                primary={false}
                style={style.button}
                onClick={this.back}
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

export default FormVoucherDetails1;
