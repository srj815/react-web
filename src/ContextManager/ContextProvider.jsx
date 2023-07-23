import React,{createContext, useContext, useState} from 'react'


const Context = createContext()


const ContextProvider = ({children}) => {
    
    const products =[
        {
            nombre: 'Mancuerna',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/1.png?raw=true',
            precio: 7000,
            id:1,
            stock: 20,
            descripcion: "Mancuerna de 32 cm con rosca cromada y moleteada y dos discos de fundicion de 5kg c/u"
        },
        {
            nombre: 'Banda Elastica',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/2.png?raw=true',
            precio: 1400,
            id:2,
            stock: 15,
            descripcion: "Banda elastica con agarre par ejercicios de estiramiento"
        },
        {
            nombre: 'Pesa Rusa de Fundicion',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/3.png?raw=true',
            precio: 4000,
            id:3,
            stock: 8,
            descripcion: "Pesa rusa de fundición, disponible en varios kilos"
        },
        {
            nombre: 'Colchoneta de Alta Densidad',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/4.png?raw=true',
            precio: 2000,
            id:4,
            stock: 50,
            descripcion: "Colchoneta a medida, para tus ejercicios diarios"
        },
        {
            nombre: 'Disco con Agarre de PVC',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/5.png?raw=true',
            precio: 4000,
            id:5,
            stock: 15,
            descripcion: "Disco con agarre de PVC, disponible en varios kilos"
        },
        {
            nombre: 'Mancuerna con rosca',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/6.png?raw=true',
            precio: 3000,
            id:6,
            stock: 100,
            descripcion: "Mancuerna con rosca de metal"
        },
        {
            nombre: 'Mancuerna de fundicion',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/7.png?raw=true',
            precio: 1000,
            id:7,
            stock: 80,
            descripcion: "Mancuerna de fundicion, disponible en varios kilos"
        },
        {
            nombre: 'Disco de fundicion',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/8.png?raw=true',
            precio: 2000,
            id:8,
            stock: 200,
            descripcion: "Disco de fundicion, disponible en varios kilos"
        },
        {
            nombre: 'Pesa Rusa de PVC',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/9.png?raw=true',
            precio: 3000,
            id:9,
            stock: 20,
            descripcion: "Pesa rusa de PVC, disponible en varios kilos"
        },
        {
            nombre: 'Barra Dominada de Pared',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/10.png?raw=true',
            precio: 10000,
            id:10,
            stock: 8,
            descripcion: "Una barra para tus ejercios mas exigentes, de colocación sencilla y resistente en cualquier tipo de pared"
        },
        {
            nombre: 'Proteina Mass Gainer',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/11.png?raw=true',
            precio: 5000,
            id:11,
            stock: 10,
            descripcion: "Proteina de alta concentracion energetica para ganar masa muscular y ser la envidia de todos los cabeza de termo del gimnasio"
        },
        {
            nombre: 'Barra con Disco',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/12.png?raw=true',
            precio: 20000,
            id:12,
            stock: 15,
            descripcion: "Barra de acero cromado, re loca y funcional"
        },
        {
            nombre: 'Rueda abdominal',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/13.png?raw=true',
            precio: 1600,
            id:13,
            stock: 45,
            descripcion: "Rueda para hacer abdominales"
        },
        {
            nombre: 'Aro Hula Hula',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/14.png?raw=true',
            precio: 350,
            id:14,
            stock: 300,
            descripcion: "Aro de ula-ula para divertirse mientras se entrena"
        },
        {
            nombre: 'Protector Bucal',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/15.png?raw=true',
            precio: 600,
            id:15,
            stock: 677,
            descripcion: "Protector bucal para boxeo (con estuche)"
        },
        {
            nombre: 'Pelota de Yoga',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/16.png?raw=true',
            precio: 2000,
            id:16,
            stock: 21,
            descripcion: "Pelota de yoga con pinches, medida 90cm"
        },
        {
            nombre: 'Ladrillo de Yoga',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/17.png?raw=true',
            precio: 1000,
            id:17,
            stock: 8,
            descripcion: "Para construir tu casa de yoga, ¿qué mejor que un ladrillo de yoga?"
        },
        {
            nombre: 'Guantes de Boxeo',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/18.png?raw=true',
            precio: 2500,
            id:18,
            stock: 79,
            descripcion: "Guantes de Boxeo de diferentes medidas, consultar"
        },
        {
            nombre: 'Soga con Mango de Metal',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/19.png?raw=true',
            precio: 1000,
            id:19,
            stock: 32,
            descripcion: "Soga de alta resistencia para saltar, mango de metal"
        },
        {
            nombre: 'Guantes de MMA',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/20.png?raw=true',
            precio: 2500,
            id:20,
            stock: 40,
            descripcion: "Guantes de MMA, talle universal"
        },
        {
            nombre: 'Vendas de Colores',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/21.png?raw=true',
            precio: 1700,
            id:21,
            stock: 280,
            descripcion: "Vendas de 5mts 5x5"
        },
        {
            nombre: 'Medicine Ball',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/22.png?raw=true',
            precio: 4500,
            id:22,
            stock: 12,
            descripcion: "No sabria que decirte, se usa para levantar peso y esas cosas"
        },
        {
            nombre: 'Vaso Shaker',
            imagen: 'https://github.com/srj815/react-web/blob/main/public/23.png?raw=true',
            precio: 800,
            id:23,
            stock: 100,
            descripcion: "Vaso Shaker anti grumos para tus suplementos"
        },
    ]




    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }




    const [cart, setCart] = useState([])


    const isInCart = (id) => cart.some(producto => producto.id === Number(id))



    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }



    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }


    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}



export const useCustomContext = () => useContext(Context)

export default ContextProvider