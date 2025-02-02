import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import AllUsers from '../admincomponents/allusers'

const AllusersPage = () => {
  return (
    <AdminBoard prop={<AllUsers />}/>
  )
}

export default AllusersPage