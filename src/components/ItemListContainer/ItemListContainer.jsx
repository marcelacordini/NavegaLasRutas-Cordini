import { Box, Flex, Heading } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { getProducts, getProductsByCategory, productos } from "../../data/asynkMock"
import { useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    console.log("filtro categoria")
    console.log(dataProductos)

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
    
  }, [categoryId])

  return (
    <Box>
      <Heading textAlign={'center'} mt={4} color={'#416d6d'}>{title}</Heading>
      
        <ItemList products={products} />
    </Box>
  )
};
console.log(productos)
export default ItemListContainer;