import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './counter.css'

const Counter = ({initialValue, stock, id}) => {

    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire(
            'Agregado al carrito!',
        )
    }
    return (
        <>
            <div className='counter'>
                <button className='buttonCounter' onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span>{quantity}</span>
                <button  className='buttonCounter' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button className='linkDetalle' onClick={onClickAddProduct}>Confirmar</button>
        </>
    )
}

export default Counter