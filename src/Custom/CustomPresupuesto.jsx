import React from 'react'
import { useContext } from 'react'
import {Context1} from '../Context/Context1';
const CustomPresupuesto = () => {
    const {presupuesto,
          setPresupuesto,
          isval,
          setIsval,
          editarpresu,
          setEditarpresu} = useContext(Context1);
  return {presupuesto,setPresupuesto,isval,setIsval, editarpresu,
          setEditarpresu}
}

export default CustomPresupuesto
