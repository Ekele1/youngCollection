import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import Home from '../admincomponents/home'

const AdminHome = () => {
  return (
    <AdminBoard prop={<Home />}/>
  )
}

export default AdminHome