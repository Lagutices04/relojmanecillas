const deg=6;
//constante pa min y para seg
const hora = document.querySelector('.hora');
// es una constante llamada hora
// busca un elemento html que coincida con el selector css en este caso es hora
//se encuentra la funcion por lo tanto devolvera un elemento element 
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
//guarda las cosas como si fuera un arreglo
setInterval(()=>{
    //JavaScript se utiliza para ejecutar una función específica periódicamente en un intervalo de tiempo específico.

    let tiempo = new Date();
    //captura tiiempo interno
    let hr =tiempo.getHours() *30;
    //coge los 30 por puesto no por grado,como se debe cprrer la hora
    let min =tiempo.getMinutes() * deg;
    let seg =tiempo.getSeconds() * deg;
    //intervalos de refresco de 30 y 6 grados para cambio de hora
    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    //actualice cada 30 graddos la hora mas el minutero


    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;



})
//sintaxys funcion contenedor
