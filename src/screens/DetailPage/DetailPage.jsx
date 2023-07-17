import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'

const DetailPage = () => {

    const {id} = useParams()
    /* const productDetail = getProductById(id) */
    const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

   /*  const [currentProductDetail, setCurrentProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id)) */

return (
    <div>
        <h1>{productDetail.nombre}</h1>
        <img src={productDetail.imagen} alt="Producto" />
        <h2>{productDetail.precio}</h2>
        <p>{productDetail.descripcion}</p>
        <div><button onClick={() => addProductCart(productDetail.id)}>Comprar</button></div>

        {
        isInCart(id) 
        ? 
        <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/> 
        : 
        <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
        }
    </div>
)
}
export default DetailPage
