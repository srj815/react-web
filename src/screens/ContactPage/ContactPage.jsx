import React from 'react'
import { useState } from 'react'
import './contactpage.css'

const ContactPage = () => {

  const [userData, setUserData] = useState({})

  const [formUserData, setFormUserData] = useState({
    nombre:'',
    apellido:'',
    email:''
  })
  const [showPersonalData, setShowPersonalData] = useState(false)

  const handleRegisterUser = (evento) =>{
    evento.preventDefault()
    setShowPersonalData(true)
    setUserData(formUserData)
    setFormUserData({nombre:'',
    apellido:'',
    email:''})
  }
  const handleChangeRegisterUser = (evento) =>{
    setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
  }
  return (

    <div>      
      <form onSubmit={handleRegisterUser} className='formularioUsuario'>
        <h2>Contacto</h2>
        <div className='inputBox'>
          <input placeholder=" " required type="text" name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre}/>
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className='inputBox'>
          <input placeholder=" " required type="text" id='apellido' name='apellido' onChange={handleChangeRegisterUser} value={formUserData.apellido} />
          <label htmlFor="apellido">Apellido</label>
        </div>
        <div className='inputBox'>
          <input placeholder=" " required type="email" id='email' name='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
          <label htmlFor="email">Email</label>
        </div>
        <div className='inputBox'>
          <input placeholder=" " required type="text" id='asunto' name='asunto' onChange={handleChangeRegisterUser} value={formUserData.asunto}/>
          <label htmlFor="asunto">Asunto</label>
        </div>
        <textarea placeholder='Escriba su mensaje aquí...' required type="mensaje" id='mensaje' name='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje}/>
        {showPersonalData ? <button>Editar</button> : <button type='submit'>Enviar</button>}
      </form>
    </div>
  )
}

export default ContactPage