import React from 'react'
import {formatearfecha} from '../helpers/index';
import iconoahorro from '../img/icono_ahorro.svg'
import iconocasa from '../img/icono_casa.svg'
import iconocomida from '../img/icono_comida.svg'
import iconogastos  from '../img/icono_gastos.svg'
import iconoocio from '../img/icono_ocio.svg'
import iconosalud from '../img/icono_salud.svg'
import iconosuscripccion from '../img/icono_suscripciones.svg'
import iconogasto from '../img/nuevo-gasto.svg'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
import CustomPresupuesto from '../Custom/CustomPresupuesto';
const Gasto = (props) => {
    const {gasto,eliminargasto} = props;
    const {categoria,gastos,cantidad,id,fecha} = gasto;
    const imagenesicons = {
        ahorro:iconoahorro,
        comidas:iconocomida,
        casa:iconocasa,
        gastos:iconogastos,
        ocio:iconoocio,
        salud:iconosalud,
        suscripccione:iconosuscripccion
    };
    
    const {setEditarpresu} = CustomPresupuesto();
    const leadingActions = ()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>setEditarpresu(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = ()=>(
        <TrailingActions>
            <SwipeAction onClick={()=>eliminargasto(id)}
            destructive={true}>
                Borrar
            </SwipeAction>
        </TrailingActions>
    )
  return (
    <SwipeableList>
        <SwipeableListItem 
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img src={imagenesicons[categoria]} alt="icons" />
            <div className="descripcion-gasto">
                <p className='categoria'>
                    {categoria}
                </p>
                <p className='nombre-gasto'>
                    {gastos}
                </p>
                <p className='fecha-gasto'>
                    agregado el : <span>{formatearfecha(fecha)}</span>
                </p>
               
            </div>
            <p className='cantidad-gasto'>
                    ${cantidad}
            </p>

        </div>
      
    </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
