import React from 'react'
import AdminBoard from '../admin/admincomponents/adminboard'
import ProductDetail from '../admin/admincomponents/productDetail'

const ProductDetailPage = () => {
  return (
    <AdminBoard prop={<ProductDetail />}/>
  )
}

export default ProductDetailPage