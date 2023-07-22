import React from 'react'
import './productCartCard.css'

const ProductCartCard = ({producto}) => {
  return (
    <div className='productCard productCartCard-lol'>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt="Producto" />
        <h3>Precio: {producto.precio}</h3>
        <p>{producto.descripcion}</p>
        <p className='pepito'><span>Cantidad:</span> {producto.quantity}</p>
    </div>
  )
}

export default ProductCartCard