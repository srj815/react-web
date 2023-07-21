import React from 'react'
import './loader.css'

const Loader = () => {

  const [loading, setLoading] = useState(true);
  const cambiarEstado = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 1000);
  }

  if(loading){
    return (
      <Loader />
    )
  }
    else{
      return (
        <div className='divPadre'>
          <div className='divHijo'>
          <span class="flip-square"></span>
          </div>
        </div>
      );
    }
    

  }  


export default Loader
