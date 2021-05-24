import {React,useState} from 'react'
import TypeVoucherForm from '../../Compoment/TypeVoucher/TypeVoucherForm'
import TypeVoucherList from '../../Compoment/TypeVoucher/TypeVoucherList'

const VoucherType = () => {

    return (
        <div>
            <TypeVoucherForm />
            <TypeVoucherList />
        </div>
    )
}

export default VoucherType;