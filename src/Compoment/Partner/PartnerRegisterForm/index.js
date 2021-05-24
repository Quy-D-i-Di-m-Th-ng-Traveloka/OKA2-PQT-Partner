import {React,useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import './PartnerRegisterForm.css'
import axios from 'axios';

const PartnerRegisterForm = () => {


    const [types,setTypes]=useState([])

    const initialState = {
        "id":"",
        "ten_doanh_nghiep":"",
        "ten_viet_tat":"",
        "sdt":"",
        "email":"",
        "loai_doi_tac_id":"",
        "nguoi_dai_dien":"",
        "mat_khau":""
    }
    const [values,setValues]=useState(initialState)

    
    const handleSubmit =e =>
    {
        e.preventDefault();
        console.log(values)
        axios.post("http://localhost:9000/partner/register",values)
            .then(res => {
                if(res.data=='Success')
                    window.alert('Thêm thành công')
                else if(res.data=='Duplicate')
                    window.alert('Dữ liệu đã tồn tại vui lòng nhập lại')
                else
                window.alert('Thêm thất bại')
        });
    }

    const handleEdit = ()=>{
        // axios.put("http://localhost:9000/vouchertype/update",values)
        //     .then(res => {
        //         console.log(res.data)
        //         if(res.data=='Success')
        //             window.alert('Sửa thành công')
        //         else{
        //             window.alert('Sửa thất bại.Xin check lại ID hoặc dữ liệu')
        //         }
        // });
    }
    

    const handleInputChange=e=>{
        let {name,value}=e.target;
        setValues({
                ...values,
                [name]:value,
                
            },
        )
        
    }

    useEffect(async ()=>{
        await fetch("http://localhost:9000/partnertype/list").then(res=>res.json()).then(res=>setTypes(res))
    },[])

    return (
        <div style={{width:'375px'}}>
            <Form id="formPartner" onSubmit={handleSubmit}>

                <Form.Group controlId="formPartnerType">
                    <Form.Label>Loại đối tác ID</Form.Label>
                    <br/>
                    <select name='loai_doi_tac_id' onChange={handleInputChange}>
                        <option>Chọn loại đối tác</option>              
                        {types.map((type,index)=>{
                            return(
                                <option value={type.id} key={index} >{type.ten}</option>
                            )
                        })}
                    </select>
                </Form.Group>

                <Form.Group controlId="formPartnerCompany">
                    <Form.Label>Tên doanh nghiệp</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên doanh nghiệp" name='ten_doanh_nghiep' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formPartnerCompanyShort">
                    <Form.Label>Tên doanh nghiệp viết tắt</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên doanh nghiệp viết tắt" name='ten_viet_tat' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formPartnerPhone">
                    <Form.Label>SDT</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số điện thoại" name='sdt' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formPartnerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Nhập email doanh nghiệp" name='email' onChange={handleInputChange} />
                </Form.Group>                

                <Form.Group controlId="formPartnerRepresent">
                    <Form.Label>Tên người đại diện</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên người đại diện" name='nguoi_dai_dien' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formPartnerPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" name='mat_khau' onChange={handleInputChange} />
                </Form.Group>
                
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PartnerRegisterForm
