import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div className='productCard'>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt='Producto'/>
        <div className='productCardDetalles'>
        <h3>Precio: ${producto.precio}</h3>
        <p>{producto.descripcion}</p>
        <Link className='linkDetalle' to={'/detail/' + producto.id}>Ver detalle</Link>
        </div>
    </div>
  )
}

export default ProductCard