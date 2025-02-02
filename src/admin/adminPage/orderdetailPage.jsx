import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import OrderDetail from '../admincomponents/orderdetail'

const OrderDetailPage = () => {
  return (
    <AdminBoard prop={<OrderDetail />}/>
  )
}

export default OrderDetailPage