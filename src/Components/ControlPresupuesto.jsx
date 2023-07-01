import { useState, useEffect } from 'react';
import CustomPresupuesto from '../Custom/CustomPresupuesto'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ControlPresupuesto = (props) => {
    const {gasto,setGasto,setIsval} = props;
    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);
    const [porcentaje,setPorcentaje] = useState(0);
    const {presupuesto,setPresupuesto} = CustomPresupuesto();
    useEffect(()=>{
        const totalgasto = gasto.reduce((total,value)=> total + value.cantidad,0);
        const totaldisponible = presupuesto - totalgasto;
        const valor = (((presupuesto - totaldisponible) / presupuesto)*100).toFixed(2)
        setDisponible(totaldisponible)
        setGastado(totalgasto);
        setTimeout(()=>{
        setPorcentaje(valor)
        },1000)
    },[gasto])
    const formateo = (cantidad)=>{
        return cantidad.toLocaleString('en-Us',{
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleresetApp = ()=>{
       const confirmar = confirm('Deseas resetar la aplicacion');
       if (confirmar){
        setGasto([]);
        setPresupuesto(0)
        setIsval(false)

       }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra '>
        <div>
           <CircularProgressbar 
           value={porcentaje}
           text={`${porcentaje}% gastado`}
           styles={buildStyles({
            pathColor:porcentaje > 100 ? 'red': '#33FFE6',
            trailColor:porcentaje > 100 ? 'red':'#158CD1'
           })}/>
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleresetApp}>
                Resetear presupuesto
            </button>
        <p>
           <span> Presupuesto:</span>  {formateo(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo': ''}`}>
           <span> Disponible:</span>  {formateo(disponible)}
        </p>
        <p>
           <span> Gastado:</span> {formateo(gastado)}
        </p>
        </div>
      
    </div>
  )
}

export default ControlPresupuesto
