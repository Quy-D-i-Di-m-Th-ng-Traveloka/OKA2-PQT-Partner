import axios from 'axios'
import {React,useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import './VoucherForm.css'

const VoucherForm = () => {
    const [selectedFile, setselectedFile] = useState('')

    const [types,setTypes]=useState([])
    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.Token;
    //Kích hoạt cmt trên khi hoàn thiện xong liên kết các trang

    const initialState = {
        "id":"",
        "ten":"",
        "chu_thich_don_gian":"",
        "chu_thich_day_du":"",
        "ngay_bat_dau":"",
        "ngay_ket_thuc":"",
        "code_voucher":"",
        "gia_tri":"",
        "loai_voucher_id":"",
        "so_luong":"",
        "trang_thai":"",
        "hinh_anh":"",
        "doi_tac_id":`PLANE-1G`,//Chỉ để đây để test code //xong r thì thế thành token.id ở PLANE-1G
        "diem_toi_thieu":"",
    }
    const [values,setValues]=useState(initialState)

    const handleSubmit =e =>
    {
        e.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('data',JSON.stringify(values));
        bodyFormData.append('hinh_anh',selectedFile)

        axios({
            method: "post",
            url: "http://localhost:9000/voucher/add",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(res => {
                if(res.data=='Success')
                    window.alert('Thêm thành công')
                else if(res.data=='Duplicate')
                    window.alert('Dữ liệu đã tồn tại vui lòng nhập lại')
                else
                window.alert('Thêm thất bại')
            }
        );

    }
    

    const handleInputChange=e=>{
        const {name,value}=e.target;
        setValues({
                ...values,
                [name]:value,
            }
        )
    }

    const handleImage = (e) => {
        setselectedFile(e.target.files[0])
    }

    useEffect( ()=>{
        fetch("http://localhost:9000/vouchertype/list").then(res=>res.json()).then(res=>setTypes(res))
    },[])


    return (
        <div style={{width:'375px'}}>
            <Form id="formVoucher" onSubmit={handleSubmit}>
                <Form.Group controlId="formPartnerType">
                    <Form.Label>Loại voucher</Form.Label>
                    <br/>
                    <select name='loai_voucher_id' onChange={handleInputChange}>
                        <option>Chọn loại voucher</option>                 
                        {types.map((type,index)=>{
                            return(
                                <option value={type.id} key={index} >{type.ten}</option>
                            )
                        })}
                    </select>
                </Form.Group>

                <Form.Group controlId="formCardDesc">
                    <Form.Label>Tên voucher</Form.Label>
                    <Form.Control as="textarea" placeholder="Nhập tên voucher" name='ten' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formCardDesc">
                    <Form.Label>Chú thích đơn giản</Form.Label>
                    <Form.Control as="textarea" placeholder="Nhập chú thích ngắn gọn" name='chu_thich_don_gian' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formStartDate">
                    <Form.Label>Ngày bắt đầu</Form.Label>
                    <Form.Control type="date" name='ngay_bat_dau' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formExpDate">
                    <Form.Label>Ngày hết hạn</Form.Label>
                    <Form.Control type="date" name='ngay_ket_thuc' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formMainDesc">
                    <Form.Label>Chú thích đầy đủ</Form.Label>
                    <Form.Control as="textarea" placeholder="Nhập chú thích đầy đủ" name='chu_thich_day_du' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherCode">
                    <Form.Label>Code Voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập code voucher" name='code_voucher' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherPrice">
                    <Form.Label>Giá trị voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập giá trị voucher" name='gia_tri' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherPrice">
                    <Form.Label>Số lượng voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số lượng voucher" name='so_luong' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherPrice">
                    <Form.Label>Trạng thái voucher</Form.Label>
                    <Form.Control type="text" placeholder="Nhập trạng thái voucher" name='trang_thai' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formVoucherPrice">
                    <Form.Label>Điểm tối thiểu</Form.Label>
                    <Form.Control type="text" placeholder="Nhập điểm tối thiểu voucher" name='diem_toi_thieu' onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formImgSource">
                    <Form.Label>Hình ảnh</Form.Label>
                    <input className="form-control" type="file" name="hinh_anh" onChange={handleImage}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VoucherForm
