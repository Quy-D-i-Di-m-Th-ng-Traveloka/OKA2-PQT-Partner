import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./PartnerLoginForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PartnerLoginForm = (props) => {
  var history = useHistory();
  const initialState = {
    email: "",
    mat_khau: "",
  };

  const initialToken = {
    Token: "",
    id: "",
  };

  const [values, setValues] = useState(initialState);
  const [token, setToken] = useState(initialToken);
  const [login, isLogin] = useState(false);

  useEffect(() => {
    if (token.id != "") {
      console.log("Callback thành công");
      props.parentCallBack(token);
    } else {
      console.log("Callback không thành công");
    }
  }, [token]);

  //Sau khi login r thì click vào đây để log out
  // const handleClick = () => {
  //   axios
  //     .post("http://localhost:9000/partner/logout")
  //     .then((res) => {
  //       console.log(res.data);
  //       setToken(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    // https://gift-api-v1.herokuapp.com/partner/login
    // thay đường link ở đây
    await axios
      .post("https://gift-api-v1.herokuapp.com/partner/login", values)
      .then((res) => {
        console.log(res);
        if (res.data != "Failed") {
          setToken(res.data);
          isLogin(true);
        } else if (res.data == "Failed") {
          window.alert("Tài khoản không tồn tại");
        }
      });
  };

  return (
    <div style={{ width: "375px" }}>
      {login ? (
        <>
          <Form id="formPartner">
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
              Đăng nhập thành công!
            </p>
          </Form>
        </>
      ) : (
        <>
          <Form id="formPartner" onSubmit={handleSubmit}>
            <Form.Group controlId="formPartnerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập email doanh nghiệp"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPartnerPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                name="mat_khau"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default PartnerLoginForm;
