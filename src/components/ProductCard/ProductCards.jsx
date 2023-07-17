import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div >
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt='Producto'/>
        <h3>Precio: {producto.precio}</h3>
        <p>{producto.descripcion}</p>
        <Link to={'/detail/' + producto.id}>Ver detalle</Link>
    </div>
  )
}

export default ProductCard