import React, { useContext } from 'react'
import Collections from '../components/collection'
import { AuthContext } from "../onboarding/authContext";

const WomenCollections = () => {
    const { products } = useContext(AuthContext);
  return (
    <Collections name="MEN'S COLLECTION" items={products} />
  )
}

export default WomenCollections