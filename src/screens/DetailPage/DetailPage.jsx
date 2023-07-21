import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import './detailPage.css'

const DetailPage = () => {

    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

return (
    
    <div className='back2'>
        <div className='productCard'>
            <h2>{productDetail.nombre}</h2>
            <img src={productDetail.imagen} alt="Producto" />
            <div className='productCardDetalles'>
            <h2>${productDetail.precio}</h2>
            <p>{productDetail.descripcion}</p>
            </div>
            {
            isInCart(id) 
            ? 
            <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/> 
            : 
            <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
            }
        </div>
    </div>
)
}
export default DetailPage
