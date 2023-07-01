import React, { useState,useEffect } from 'react'
import BTNCerrar from '../img/cerrar.svg'
import { useReducer } from 'react';
import ContextForm from '../Context/ContextForm';
import Error1 from './Error1';
import {generateID} from '../helpers/index';
import CustomPresupuesto from '../Custom/CustomPresupuesto';
const Modal = (props) => {
    const {setModal,animandoModal,setAnimandoModal,obtenergasto} = props;
    const {editarpresu,setEditarpresu} = CustomPresupuesto();
    useEffect(()=>{
      if(Object.keys(editarpresu).length > 0){
        dispatch({type: types.gastos , payload: editarpresu.gastos})
        dispatch({type:types.cantidad,payload:editarpresu.cantidad})
        dispatch({type:types.categoria,payload:editarpresu.categoria})
        dispatch({type:types.id,payload:editarpresu.id})
      }
    },[])
    const CERRAR = ()=>{
        setAnimandoModal(false);
        setEditarpresu({})
        setTimeout(()=>{
          setModal(false);
        },500)
    }
    const {types,initial,reducer} = ContextForm();
    const [state,dispatch] = useReducer(reducer,initial);
    const {gastos,cantidad,categoria} = state;
    const [error1,setErro1] = useState(null);
    const gasto1 = (e)=>dispatch({
      type: types.gastos,
      payload: e.target.value
    });
    const gasto2 = (e)=>dispatch({
      type: types.cantidad,
      payload: e.target.value
    });
    const gasto3 = (e)=>dispatch({
      type: types.categoria,
      payload: e.target.value
    });

    const valores = [
      '---seleccione',
      'ahorro',
      'comidas',
      'casa',
      'gastos',
      'ocio',
      'salud',
      'suscripcciones'];

    const handlesubmit = (e)=>{
      e.preventDefault();
      if([gastos,cantidad,categoria].includes('')){
        setErro1('Todos los campos son obligatorios');
        setTimeout(()=>{
          setErro1(null)
        },2000)
        return
      }
      const id = generateID();
      const fecha = Date.now();
      const nuevogastp = {id:id,
                          gastos:gastos,
                          cantidad:Number(cantidad),
                          categoria:categoria,
                          fecha:fecha};
      obtenergasto(nuevogastp);
    }
  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img src={BTNCerrar}
                 alt="CerrarBTN"
                 onClick={CERRAR}/>
        </div>
        <form 
        onSubmit={handlesubmit}
        className={`formulario ${animandoModal ? 'animar': 'cerrar'}`}>
          <legend>{ editarpresu.gastos ? 'EDITAR GASTO': 'NUEVO GASTO'}</legend>
          <div className="campo">
            <label htmlFor="Nombre">Nombre Gasto</label>
            <input 
            id='Nombre'
            type="text"
            value={gastos}
             placeholder='Add the name of pay'
             onChange={gasto1}/>
          </div>
          <div className="campo">
            <label htmlFor="Cantidad">Cantidad</label>
            <input 
            value={cantidad}
            id='Cantidad'
            type="number"
            placeholder='Add the price of pay'
            onChange={gasto2}/>
          </div>
          <div className="campo">
            <label htmlFor="Categoria">Categoria</label>
           <select name="" id="Categoria" onChange={gasto3}>
            {
              valores.map((value,index)=>{
                return <option key={index} value={value}>{value}</option>
              })
            }
           </select>
          </div>
          <input type="submit" value={editarpresu.gastos ? 'Guardar cambios': 'Agregar gasto'} />
          {error1 && <Error1 tipo='error'>{error1}</Error1>}
        </form>
      
    </div>
  )
}

export default Modal
