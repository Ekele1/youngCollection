import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import OrderList from '../admincomponents/orderlist'

const OrderListPage = () => {
  return (
    <AdminBoard prop={<OrderList />}/>
  )
}

export default OrderListPage