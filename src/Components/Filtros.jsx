import React from 'react'

const Filtros = (props) => {
    const {valorfiltro} = props;
    const valores = [
        'all',
        'ahorro',
        'comidas',
        'casa',
        'gastos',
        'ocio',
        'salud',
        'suscripcciones']; 
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label>Filtrar gastos</label>
                <select onChange={valorfiltro}>
                    {
                        valores.map((filtros,index)=>{
                            return <option  key={index}
                            value={filtros}>{filtros}</option>
                        })
                    }
                </select>
            </div>
        </form>
      
    </div>
  )
}

export default Filtros
