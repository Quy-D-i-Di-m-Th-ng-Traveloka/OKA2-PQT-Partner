import React, { Component } from "react";
import FormVoucherDetail from "../Multiple-Voucher/FormVoucherDetail";
import FormVoucherDetails1 from "../Multiple-Voucher/FormVoucherDetails1";
import FormVoucherDetails2 from "../Multiple-Voucher/FormVoucherDetails2";
import Confirm from "../Multiple-Voucher/Confirm";
import Success from "../Multiple-Voucher/Success";

export class VoucherForm extends Component {
  state = {
    step: 1,
    ten: "",
    chu_thich_don_gian: "",
    chu_thich_day_du: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    code_voucher: "",
    gia_tri: "",
    loai_voucher_id: "",
    so_luong: "",
    trang_thai: "UP",
    doi_tac_id: `${this.props.partnerID.id}`,
    diem_toi_thieu: "",
    dich_vu_id: "",
    selectedFile: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleImage = (e) => {
    this.setState({ selectedFile: e.target.files[0] }, () => {
      console.log(this.state.selectedFile);
    });
  };

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <FormVoucherDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormVoucherDetails1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <FormVoucherDetails2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleImage={this.handleImage}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            image={this.state.selectedFile}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default VoucherForm;
