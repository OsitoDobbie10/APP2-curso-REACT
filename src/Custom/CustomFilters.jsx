import React from 'react'
import { useState } from 'react'

const CustomFilters = () => {
   const [filtro,setFiltro] = useState({categoria:'all'});
   const [arrayfiltro,setArrayfiltro] = useState([]);
   const valorfiltro = (e)=>{
   setFiltro(prevState=>({
    ...prevState,
    categoria: e.target.value}))};

  
  return{filtro,valorfiltro,arrayfiltro,setArrayfiltro}
}

export default CustomFilters
