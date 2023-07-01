import React from 'react'
import { useId } from 'react'
import CustomPresupuesto from '../Custom/CustomPresupuesto';
import { useState } from 'react';
import Error1 from './Error1';

const NuevoPresupuesto = () => {
    const IdInput1 = useId();
    const {presupuesto,setPresupuesto,setIsval} = CustomPresupuesto();
    const [erro1,setError1] = useState(null);
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setError1('No es un presupuesto valido')
            return
        }
        setError1(null);
        setIsval(true);
        
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlesubmit}>
            <div className="campo">
                <label htmlFor={IdInput1}>Definir presupuesto</label>
                <input 
                type="number"
                className='nuevo-presupuesto'
                placeholder='Agrega un presupuesto' 
                id={IdInput1}
                value={presupuesto} 
                onChange={(e)=>setPresupuesto(Number(e.target.value))}/>

            </div>
            <input type="submit" value="Agregar" />
            {erro1 && <Error1 tipo='error' >
                       {erro1}
                      </Error1>}

        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
