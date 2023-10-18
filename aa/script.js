const deg=6;
//constante pa min y para seg
const hora = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
//guarda las cosas como si fuera un arreglo
setInterval(()=>{

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