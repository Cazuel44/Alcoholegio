//funcion recive un numero y retorna un string con el numero formateado a precio ARREGLARPRECIO!!!!

export const formatPrice = (number) => {
    return number.toLocaleString('es-CL', { style: 'currency', currency: 'USD', /* maximumFractionDigits: 0, */ });
}