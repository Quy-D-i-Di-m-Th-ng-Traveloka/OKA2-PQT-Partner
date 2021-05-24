import {React,useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './TypeVoucherForm.css'
import axios from 'axios';

const TypeVoucherForm = () => {

    const initialState = {
        "id":"",
        "ten":""
    }
    const [values,setValues]=useState(initialState)

    const handleSubmit =e =>
    {
        e.preventDefault();
        console.log(values)
        axios.post("http://localhost:9000/vouchertype/add",values)
            .then(res => {
                if(res.data=='Success')
                    window.alert('Thêm thành công')
                else
                    window.alert('Thêm thất bại. Xin check lại ID')
        });
    }

    const handleEdit = ()=>{
        axios.put("http://localhost:9000/vouchertype/update",values)
            .then(res => {
                console.log(res.data)
                if(res.data=='Success')
                    window.alert('Sửa thành công')
                else{
                    window.alert('Sửa thất bại.Xin check lại ID hoặc dữ liệu')
                }
        });
    }
    

    const handleInputChange=e=>{
        const {name,value}=e.target;
        setValues({
                ...values,
                [name]:value,
            }
        )
    }

    return (
        <div style={{width:'375px'}}>
            <Form id="formVoucherType" onSubmit={handleSubmit}>

                <Form.Group controlId="formCardDesc">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Nhập ID loại voucher" name='id' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formExpDate">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên loại voucher" name='ten' onChange={handleInputChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Button variant="warning" onClick={()=>handleEdit()} style={{float:'right'}}>
                    Edit
                </Button>
            </Form>
        </div>
    )
}

export default TypeVoucherForm
