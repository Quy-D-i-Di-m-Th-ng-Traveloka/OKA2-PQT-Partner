import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./FormVoucherDetail.css";

export class FormVoucherDetails2 extends Component {
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
              <div className="row">
                <div className="col-6">Hình Ảnh</div>
                <div className="col-6">
                  <input
                    type="file"
                    name="hinh_anh"
                    onChange={(e) => this.props.handleImage(e)}
                  />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-6">Đối tác ID</div>
                <div className="col-6">
                  <TextField
                    disabled
                    hintText="Nhập Đối tác ID"
                    floatingLabelFixed="Đối tác ID"
                    onChange={this.props.handleChange("doi_tac_id")}
                    defaultValue={values.doi_tac_id}
                  />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-6">Điểm tối thiểu</div>
                <div className="col-6">
                  <TextField
                    type="number"
                    hintText="Nhập Điểm tối thiểu"
                    floatingLabelFixed="Điểm tối thiểu"
                    onChange={this.props.handleChange("diem_toi_thieu")}
                    defaultValue={values.diem_toi_thieu}
                  />
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

export default FormVoucherDetails2;
