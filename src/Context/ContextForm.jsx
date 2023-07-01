
const ContextForm = () => {
    const types = {
        gastos:   'gasto',
        cantidad: 'cantidad',
        categoria: 'categoria',
        id: 'id'
    }
    const initial = {
        gastos:'',
        cantidad:'',
        categoria:'',
        id:''
    }
    const reducer = (state,action)=>{
        const {type:typestate,payload:actionpayload} = action;
        switch (typestate) {
            case types.gastos:{
                return {...state,gastos:actionpayload}
            }
            case types.cantidad:{
                return {...state,cantidad:actionpayload}
            }
            case types.categoria:{
                return {...state,categoria:actionpayload}
            }
            case types.id:{
                return {...state,id:actionpayload}
            }
            default:
                state;
        }
    }
  return {types,initial,reducer}
}

export default ContextForm
