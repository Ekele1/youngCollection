import React from 'react'
import AdminBoard from '../admincomponents/adminboard'
import ProductList from '../admincomponents/productList'

const ProductlistPage = () => {
  return (
    <AdminBoard prop={<ProductList />}/>
  )
}

export default ProductlistPage