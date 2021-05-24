import React, { Component } from 'react'
import FormVoucherDetail from '../Multiple-Voucher/FormVoucherDetail'
import FormVoucherDetails1 from '../Multiple-Voucher/FormVoucherDetails1'
import FormVoucherDetails2 from '../Multiple-Voucher/FormVoucherDetails2'
import Confirm from '../Multiple-Voucher/Confirm'
import Success from '../Multiple-Voucher/Success'
export class VoucherForm extends Component {
    state={
        step:1,
        id:'',
            ten:'',
            chu_thich_don_gian:'',
            chu_thich_day_du:'',
            ngay_bat_dau:'',
            ngay_ket_thuc:'',
            code_voucher:'',
            gia_tri:'',
            loai_voucher_id:'',
            so_luong:'',
            trang_thai:'',
            hinh_anh:'',
            doi_tac_id:`PLANE-1G`,//Chỉ để đây để test code //xong r thì thế thành token.id ở PLANE-1G
            diem_toi_thieu:'',

    }

    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }

    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });
    }

    handleChange= input =>e=>{
        this.setState({[input]:e.target.value});
    }
 


    render() {
        const {step}=this.state;
        const {id,ten,chu_thich_don_gian,chu_thich_day_du,ngay_bat_dau,ngay_ket_thuc,code_voucher,gia_tri,loai_voucher_id,so_luong,trang_thai,hinh_anh,doi_tac_id,diem_toi_thieu}=this.state;
        const values={id,ten,chu_thich_don_gian,chu_thich_day_du,ngay_bat_dau,ngay_ket_thuc,code_voucher,gia_tri,loai_voucher_id,so_luong,trang_thai,hinh_anh,doi_tac_id,diem_toi_thieu}
       
        switch(step){
            case 1 :
                return(
                    <FormVoucherDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    
                );
                case 2 :
                    return(
                        <FormVoucherDetails1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                        
                    );



                case 3 :
                    return(
                        <FormVoucherDetails2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        
                        values={values}
                        />
                        
                    );
                case 4 :
                    return(
                        <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        
                        
                        values={values}
                        />
                        
                    );

                    case 5:
                        return <Success/>

                    
                    
                    
                
                
        }
    }
}

export default VoucherForm

