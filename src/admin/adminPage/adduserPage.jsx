import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import AddUser from '../admincomponents/adduser'

const AdduserPage = () => {
  return (
    <AdminBoard prop={<AddUser />} />
  )
}

export default AdduserPage