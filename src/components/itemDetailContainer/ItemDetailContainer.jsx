import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asynkMock'
import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { productoId } = useParams()

  useEffect(() => {
    getProductById(productoId)
      .then((prod) => setProducto(prod))
      .catch((error) => console.log(error))
  }, [])

  console.log(producto)

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}
export default ItemDetailContainer