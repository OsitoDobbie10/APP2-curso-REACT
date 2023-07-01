import React from 'react'
import Gasto from './Gasto';
const ListadoGastos = (props) => {
    const {gasto,eliminargasto,filtro,arrayfiltro} = props;
  return (
    <div className='listado-gastos contenedor'>
     <h2>{gasto.length ? 'Gastos': 'No hay gastos aun'}</h2>
     {
      filtro.categoria ? arrayfiltro.map((value)=>{
        return <Gasto 
        key={value.id}
        gasto={value}
        eliminargasto={eliminargasto}/>
    }):
    gasto.map((value)=>{
      return <Gasto 
      key={value.id}
      gasto={value}
      eliminargasto={eliminargasto}/>
  })
     }
    </div>
  )
}

export default ListadoGastos
