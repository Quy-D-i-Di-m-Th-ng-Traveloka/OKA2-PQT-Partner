import { React, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const ShowListVoucher = () => {
  const [showListVoucher, setShowVoucher] = useState([]);

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

  const handleDelete = async (id, doi_tac_id) => {
    axios
      .delete("https://gift-api-v1.herokuapp.com/voucher/delete", {
        data: {
          id: id,
          doi_tac_id: doi_tac_id,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          window.alert("Xóa thành công");
          window.location.reload(false);
        } else {
          window.alert("Xóa không thành công");
        }
      });
  };

  const renderListVoucher = (listvoucher, index) => {
    var startDate = new Date(listvoucher.ngay_bat_dau);
    var endDate = new Date(listvoucher.ngay_ket_thuc);
    var checkTrangThai = true;
    if (listvoucher.trang_thai == "P") {
      checkTrangThai = false;
    }
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{listvoucher.ten}</td>
        {/* <td>{listvoucher.chu_thich_don_gian}</td>
        <td>{listvoucher.chu_thich_day_du}</td> */}
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
        <td>
          <Button
            variant="danger"
            onClick={() => handleDelete(listvoucher.id, listvoucher.doi_tac_id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "PLANE-1G" }),
    };
    fetch("https://gift-api-v1.herokuapp.com/voucher/list", requestOptions)
      .then((res) => res.json())
      .then((res) => setShowVoucher(res));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>#</th>
            <th>Tên Voucher</th>
            {/* <th>Chú thích đơn giản</th>
            <th>Chú thích đầy đủ</th> */}
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
      </Table>
    </div>
  );
};

export default ShowListVoucher;
