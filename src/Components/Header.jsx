import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import CustomPresupuesto from '../Custom/CustomPresupuesto'
import ControlPresupuesto from './ControlPresupuesto';


const Header = (props) => {
  const {gasto,setGasto,setIsval} = props;
  const {isval} = CustomPresupuesto();
  return (
    <header>
        <h1>Planificador de presupuestos.</h1>
        {
          isval ? <ControlPresupuesto gasto={gasto} setGasto={setGasto} setIsval={setIsval}/>:
          <NuevoPresupuesto/>
         
        }
     
    </header>
  )
}

export default Header
