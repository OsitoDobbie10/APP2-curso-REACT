export const generateID = ()=>{
    const random = Math.random().toString(16).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
} 

export const formatearfecha = (fecha)=>{
    const nuevafecha = new Date(fecha);
    const opciones = {
        year:'numeric',
        month:'long',
        day: '2-digit'
    }
    const final = nuevafecha.toLocaleDateString('es-ES',opciones);
    return final
}
