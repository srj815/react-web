import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCartCard } from '../../components'
import './cartPage.css'

const CartPage = () => {


    const {cart, getTotal} = useCustomContext()

  return (
    <div className='back2'>
        {cart.length > 0 
        ?
        <>
          <div className='back3'>
              {cart.map(product =>(
                  <ProductCartCard key={product.id} producto={product}/>

              ))}
          </div>
          <div className='pepitoDeNuevo'>
            <span>Total:</span> ${getTotal()}
          </div>

        </>
        :
        <h1>Todavia no hay nada en tu carrito</h1>
        }
    </div>
  )
}
export default CartPage
