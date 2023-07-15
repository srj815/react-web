import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'

const CartPage = () => {


    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
    console.log(cart)

  return (
    <div>
        <div>
            {cart.map(product =>(
                <ProductCard producto={product} key={product.id}/>
            ))}
        </div>

        {cart.length > 0 
        ?
        <>
          <div>
              {cart.map(product =>(
                  <ProductCartCard key={product.id} producto={product}/>

              ))}
          </div>
          <div>
            Total: ${getTotal()}
          </div>

        </>
        :
        <h1>No hay nada en tu carrito</h1>
        }
    </div>
  )
}
export default CartPage
