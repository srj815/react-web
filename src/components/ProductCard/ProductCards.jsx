import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt='producto'/>
        <h3>Precio: {producto.precio}</h3>
        <p>Descripcion: {producto.descripcion}</p>
    </div>
  )
}

export default ProductCartCard