import { React, useState } from "react";
import NavPartner1 from "../../Compoment/NavPartner1";
import Footer from "../../Compoment/Footer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import "./register.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const RegisterForm = (props) => {
  const { state } = props.location;
  const [values, setValues] = useState();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkEmpty = () => {
    for (const [key, value] of Object.entries(values)) {
      console.log(key + " " + value);
      if (value == "") {
        return true;
      }
    }
  };

  const handleSubmit = () => {
    console.log(values);
    if (checkEmpty()) {
      window.alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      axios
        .post("https://gift-api-v1.herokuapp.com/partner/register", values)
        .then((res) => {
          if (res.data.code == "ER_DUP_ENTRY") {
            window.alert("Công ty đã tồn tại");
          } else if (res.data == "Success") {
            window.alert("Đăng ký thành công");
          }
        });
    }
  };
  return (
    <>
      <NavPartner1 id={state} />
      <div id="dangKy">
        <div id="formDangKy">
          <h1 style={{ textAlign: "center", margin: "5px" }}>
            Đăng ký làm đối tác
          </h1>
          <MuiThemeProvider>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  Tên doanh nghiệp
                </div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="true"
                    name="ten_doanh_nghiep"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  SDT
                </div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="true"
                    name="sdt"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  Email
                </div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="true"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  Tên người đại diện
                </div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="true"
                    name="nguoi_dai_dien"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  Mật khẩu
                </div>
                <div className="col-6">
                  <TextField
                    type="password"
                    floatingLabelFixed="true"
                    name="mat_khau"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ fontSize: "20px" }}>
                  Tên CTY viết tắt
                </div>
                <div className="col-6">
                  <TextField
                    floatingLabelFixed="true"
                    name="ten_viet_tat"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  style={{ margin: "10px" }}
                >
                  Đăng Ký
                </Button>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
