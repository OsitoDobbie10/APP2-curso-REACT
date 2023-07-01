import Header from "./Components/Header"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import CustomPresupuesto from "./Custom/CustomPresupuesto"
import { useState,useEffect } from "react";
import Modal from "./Components/Modal";
import ListadoGastos from "./Components/ListadoGastos";
import Filtros from "./Components/Filtros";
import CustomFilters from "./Custom/CustomFilters";

const App = () => {
  const {presupuesto,isval,setIsval,editarpresu,setEditarpresu} = CustomPresupuesto();
  const [modal,setModal] = useState(false);
  const [animandoModal,setAnimandoModal] = useState(false)
  const INITIAL = JSON.parse(localStorage.getItem('gasto')) ?? [];
  const [gasto,setGasto] = useState(INITIAL);
  const {filtro,valorfiltro,arrayfiltro,setArrayfiltro} = CustomFilters();
  
  useEffect(()=>{
    if (filtro.categoria){
      const arreglogasto = gasto.filter((value)=>(
        filtro.categoria === 'all' || value.categoria === filtro.categoria
      ));
      setArrayfiltro(arreglogasto);
    }
  },[filtro])

  useEffect(()=>{
    if(Object.keys(editarpresu).length > 0){
      setModal(true);
      setTimeout(()=>{
        setAnimandoModal(true);
      },1000)
      
    }
  },[editarpresu])

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem(presupuesto)) ?? 0;
    if(presupuestoLS > 0){
      setIsval(true)
    }
},[])

useEffect(()=>{
  localStorage.setItem('gasto',JSON.stringify(gasto))
},[gasto])

  const nuevoGasto = ()=>{
    setModal(true);
    setTimeout(()=>{
      setAnimandoModal(true);
    },1000)
   setEditarpresu({})
  }


    const obtenergasto = (value)=>{
      if(editarpresu.id){
        const gastoactualizado = gasto.map((gastostate)=>gastostate.id === editarpresu.id ? value : gastostate)
        setGasto(gastoactualizado);
        setEditarpresu({})
        setAnimandoModal(false);
        setTimeout(()=>{
         setModal(false);
        },1000)
       }
       else{
        setGasto([...gasto,value])
        setAnimandoModal(false);
        setTimeout(()=>{
         setModal(false);
        },2000)
       }
    
    }

    const eliminargasto = (id)=>{
      const DELETEPAY = gasto.filter((value)=>value.id !== id);
      setGasto(DELETEPAY) 
    }
 
  return (
    <div className={modal ? 'fijar': ''}>
      <Header gasto={gasto} setGasto={setGasto} setIsval={setIsval}/>
     {
      isval  && <>
                <main>
                  <Filtros valorfiltro={valorfiltro}/>
                  <ListadoGastos gasto={gasto} 
                                 eliminargasto={eliminargasto}
                                 filtro={filtro}
                                 arrayfiltro={arrayfiltro}/>
                </main>
                <div className="nuevo-gasto">
                 <img 
                 src={IconoNuevoGasto}
                 alt="Nuevo Gasto"
                 onClick={nuevoGasto}/>
                </div>
               </>
     }
     {
      modal && <Modal setModal={setModal}
                      animandoModal={animandoModal}
                      setAnimandoModal={setAnimandoModal}
                      obtenergasto={obtenergasto}
                      setEditarpresu={setEditarpresu}/>
     }
    </div>
  )
}

export default App