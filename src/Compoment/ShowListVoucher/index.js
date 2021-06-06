import { React, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, MuiThemeProvider } from "material-ui";
import { Form } from "react-bootstrap";

const ShowListVoucher = (props) => {
  const initialDetail = {
    loai_voucher: "",
    ten: "",
    chu_thich_don_gian: "",
    chu_thich_day_du: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    code_voucher: "",
    gia_tri: "",
    loai_dich_vu: "",
    so_luong: "",
    doi_tac_id: "",
    diem_toi_thieu: "",
    sl_con_lai: "",
  };
  const [showListVoucher, setShowVoucher] = useState([]);
  const [voucherData, setVoucherData] = useState(initialDetail);
  const [open, setOpen] = useState(false);
  const [dichVu, setDichVu] = useState([]);
  const [loaiVoucher, setLoaiVoucher] = useState([]);
  const [values, setValues] = useState(initialDetail);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const openEditForm = (data) => {
    setVoucherData(data);
    setValues(data);
    setOpen(true);
  };

  const handleEditVoucher = (e) => {
    let curDate = new Date().toISOString().substring(0, 10);
    if (values.so_luong < values.sl_con_lai) {
      window.alert("Số lượng không được nhỏ hơn số lượng còn lại");
    } else if (values.ngay_bat_dau < curDate) {
      window.alert("Ngày bắt đầu không được nhỏ hơn ngày hôm nay");
    } else if (values.ngay_ket_thuc <= values.ngay_bat_dau) {
      window.alert("Ngày hết hạn không được nhỏ hơn ngày bắt đầu");
    } else {
      axios
        .put("https://gift-api-v1.herokuapp.com/voucher/update", values)
        .then((res) => {
          if (res.status == 200) {
            window.location.reload();
          } else {
            window.alert(res.data);
          }
        });
    }
  };

  const handlePublish = async (id, doi_tac_id) => {
    axios
      .post("https://gift-api-v1.herokuapp.com/voucher/publish", {
        id: id,
        doi_tac_id: doi_tac_id,
      })
      .then((res) => {
        if (res.status == 200) {
          window.alert("Publish thành công");
          window.location.reload(false);
        } else {
          window.alert("Publish không thành công");
        }
      });
  };

  const handleUnpublish = async (id, doi_tac_id) => {
    axios
      .post("https://gift-api-v1.herokuapp.com/voucher/unpublish", {
        id: id,
        doi_tac_id: doi_tac_id,
      })
      .then((res) => {
        if (res.status == 200) {
          window.alert("Unpublish thành công");
          window.location.reload(false);
        } else {
          window.alert("Unpublish không thành công");
        }
      });
  };

  // const handleDelete = async (id, doi_tac_id) => {
  //   axios
  //     .delete("https://gift-api-v1.herokuapp.com/voucher/delete", {
  //       data: {
  //         id: id,
  //         doi_tac_id: doi_tac_id,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status == 200) {
  //         window.alert("Xóa thành công");
  //         window.location.reload(false);
  //       } else {
  //         window.alert("Xóa không thành công");
  //       }
  //     });
  // };

  const renderListVoucher = (listvoucher, index) => {
    var startDate = new Date(listvoucher.ngay_bat_dau);
    var endDate = new Date(listvoucher.ngay_ket_thuc);
    var checkTrangThai = true;
    if (listvoucher.trang_thai == "P") {
      checkTrangThai = false;
    }
    return (
      <tr key={index} onDoubleClick={() => openEditForm(listvoucher)}>
        <td>{index}</td>
        <td>{listvoucher.ten}</td>
        <td>{startDate.toISOString().substring(0, 10)}</td>
        <td>{endDate.toISOString().substring(0, 10)}</td>
        <td>{listvoucher.code_voucher}</td>
        <td>{listvoucher.gia_tri}</td>
        <td>{listvoucher.loai_voucher_id}</td>
        <td>{listvoucher.so_luong}</td>
        <td>{listvoucher.dich_vu_id}</td>
        <td>
          <img
            src={listvoucher.hinh_anh}
            style={{ width: "300px", height: "150px" }}
          />
        </td>
        <td>{listvoucher.diem_toi_thieu}</td>
        <td>{listvoucher.trang_thai}</td>

        {checkTrangThai ? (
          <>
            <td>
              <Button
                onClick={() => {
                  handlePublish(listvoucher.id, listvoucher.doi_tac_id);
                }}
                variant="success"
              >
                Publish
              </Button>
            </td>
          </>
        ) : (
          <>
            <td>
              <Button
                variant="info"
                onClick={() =>
                  handleUnpublish(listvoucher.id, listvoucher.doi_tac_id)
                }
              >
                Unpublish
              </Button>
            </td>
          </>
        )}
      </tr>
    );
  };

  console.log(values);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.partnerID.id }),
    };
    fetch("https://gift-api-v1.herokuapp.com/voucher/list", requestOptions)
      .then((res) => res.json())
      .then((res) => setShowVoucher(res));
    fetch("https://gift-api-v1.herokuapp.com/vouchertype/list")
      .then((res) => res.json())
      .then((res) => setLoaiVoucher(res));
    fetch("https://gift-api-v1.herokuapp.com/service/list")
      .then((res) => res.json())
      .then((res) => setDichVu(res));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>#</th>
            <th>Tên Voucher</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Code Voucher</th>
            <th>Giá Trị</th>
            <th>Loại Voucher ID</th>
            <th>Số lượng </th>
            <th>Dịch vụ ID</th>
            <th>Hình ảnh</th>
            <th>Điểm tối thiểu</th>
            <th>Trạng thái</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{showListVoucher.map(renderListVoucher)}</tbody>
        <Dialog open={open} aria-labelledby="form-dialog-title" maxWidth="lg">
          <DialogTitle>
            <strong>Cập nhật thông tin voucher</strong>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Vui lòng kiểm tra thông tin đầy đủ trước khi cập nhật gift-voucher
            </DialogContentText>
            <MuiThemeProvider>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">Loại Voucher</div>
                  <div className="col-8">
                    <select name="loai_voucher_id" onChange={handleInputChange}>
                      <option>Chọn loại voucher mới</option>
                      {loaiVoucher.map((type, index) => {
                        return (
                          <option value={type.id} key={index}>
                            {type.ten}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Tên Voucher</div>
                  <div className="col-8">
                    <TextField
                      name="ten"
                      floatingLabelFixed="true"
                      name="ten"
                      defaultValue={voucherData.ten}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Chú Thích Đơn Giản</div>
                  <div className="col-8">
                    <TextField
                      name="chu_thich_don_gian"
                      floatingLabelFixed="Description"
                      onChange={handleInputChange}
                      defaultValue={voucherData.chu_thich_don_gian}
                      multiLine
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Chú Thích Đầy Đủ</div>
                  <div className="col-8">
                    <TextField
                      name="chu_thich_day_du"
                      floatingLabelFixed="Description"
                      onChange={handleInputChange}
                      defaultValue={voucherData.chu_thich_day_du}
                      multiLine
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Ngày bắt đầu</div>
                  <div className="col-8">
                    <Form.Group controlId="formStartDate">
                      <Form.Control
                        type="date"
                        name="ngay_bat_dau"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Ngày kết thúc</div>
                  <div className="col-8">
                    <Form.Group controlId="formExpDate">
                      <Form.Control
                        type="date"
                        name="ngay_ket_thuc"
                        onChange={handleInputChange}
                        // defaultValue={new Date(voucherData.ngay_ket_thuc)
                        //   .toISOString()
                        //   .substring(0, 10)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Giá Trị</div>
                  <div className="col-8">
                    <TextField
                      name="gia_tri"
                      type="number"
                      floatingLabelFixed="Giá Trị Voucher"
                      onChange={handleInputChange}
                      defaultValue={voucherData.gia_tri}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Loại dịch vụ mới</div>
                  <div className="col-8">
                    <select name="dich_vu_id" onChange={handleInputChange}>
                      <option>Chọn loại dịch vụ</option>
                      {dichVu.map((type, index) => {
                        return (
                          <option value={type.id} key={index}>
                            {type.ten}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Điểm tối thiểu</div>
                  <div className="col-8">
                    <TextField
                      name="diem_toi_thieu"
                      type="number"
                      floatingLabelFixed="Điểm tối thiểu"
                      onChange={handleInputChange}
                      defaultValue={voucherData.diem_toi_thieu}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Số lượng</div>
                  <div className="col-8">
                    <TextField
                      name="so_luong"
                      type="number"
                      floatingLabelFixed="Số Lượng"
                      onChange={handleInputChange}
                      defaultValue={voucherData.so_luong}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Số lượng còn lại</div>
                  <div className="col-8">
                    <TextField
                      disabled
                      name="so_luong"
                      type="number"
                      floatingLabelFixed="Số Lượng"
                      onChange={handleInputChange}
                      defaultValue={voucherData.sl_con_lai}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Đối tác ID</div>
                  <div className="col-8">
                    <TextField
                      disabled
                      floatingLabelFixed="Đối tác ID"
                      onChange={handleInputChange}
                      defaultValue={voucherData.doi_tac_id}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Code Voucher</div>
                  <div className="col-8">
                    <TextField
                      disabled
                      name="code_voucher"
                      floatingLabelFixed="Code Voucher"
                      onChange={handleInputChange}
                      defaultValue={voucherData.code_voucher}
                    />
                  </div>
                </div>
              </div>
            </MuiThemeProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleEditVoucher()} variant="warning">
              Update
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Table>
    </div>
  );
};

export default ShowListVoucher;
