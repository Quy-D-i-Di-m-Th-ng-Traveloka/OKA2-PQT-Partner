import {React,useEffect,useState} from 'react'
import {Table,Button} from 'react-bootstrap'
import axios from 'axios';

const TypePartnerList = () => {

    const [listType,setListType]=useState([])
    
    const handleDelete = (id)=>{
        if(window.confirm('Bạn có chắc muốn xóa loại này?')){
            console.log({id:id})         
            axios.delete("http://localhost:9000/partnertype/delete",{data:{id:id}}).then(res=>{
                console.log(res.data)
                if(res.data=="Success")
                {
                    window.alert("Xóa thành công")
                }else{
                    window.alert("Xóa thất bại")
                }
            })
        }
        
    }

    
    const renderType=(type,index)=>{
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{type.id}</td>
                <td>{type.ten}</td>
                <td>{<Button variant="danger" onClick={()=>handleDelete(type.id)}>Delete</Button>}</td>
            </tr>
        )
    }
    

    useEffect(()=>{
        fetch("http://localhost:9000/partnertype/list").then(res=>res.json()).then(res=>setListType(res))
    },[])

    return (
        <div>
            <Table striped bordered hover>
            <thead style={{textAlign:'center'}}>
                <tr>
                <th>#</th>
                <th>ID loại đối tác</th>
                <th>Tên loại</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {listType.map(renderType)}
            </tbody>
            </Table>
            
        </div>
    )
}

export default TypePartnerList
