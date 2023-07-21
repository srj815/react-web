import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import './homepage.css'


const HomePage = () => {



    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(100000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() =>{
      setCurrentProducts(products.filter(
        producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
      ))
    }, [searchProduct, max, min])
    
  return (
    
    <div className='back'>
        <div className='father'>
          <input className='inputSearch' placeholder='Busca el producto' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
          <div className='son'>
            <i class="bi bi-search"></i>
          </div>
        </div>
        


        <div>

          <h2>Precio</h2>
          <div className='inputFilters'>
            <input className='inputPrecio' type='text' value={min} onChange={(e) => setMin(Number(e.target.value))}/>
            <input className='inputPrecio' type='text' value={max} onChange={(e) => setMax(Number(e.target.value))}/>
          </div>
        </div>
        <h1>Nuestros Productos</h1>
        <div className='productsHome'>
              {
              currentProducts.length > 0 
              ?
              currentProducts.map(producto  => (
              <ProductCard producto={producto} key={producto.id}/>
              ))
              :
              <h2>No se encuentra ningun producto bajo esos parametros</h2>
          }
        </div>
    </div>
  )
}
export default HomePage