import React, { useContext } from 'react'
import Collections from '../components/collection'
import { AuthContext } from "../onboarding/authContext";

const MenCollections = () => {
    const { products } = useContext(AuthContext);
  return (
    <Collections name="MEN'S COLLECTION" items={products} />
  )
}

export default MenCollections