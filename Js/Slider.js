//Cambiar manual mente la direccion
let indiceActual =0;
let cartaActual =0;
let cartas = document.querySelectorAll("label");
let option = document.querySelectorAll(`input[name="slider-popular"]`);


for(let i=0; i<option.length;i++){
  if(option[i].checked){
    indiceActual = +option[i].getAttribute('data-index');
    posicionar(indiceActual);
  }
}

function cambio(slider){
  let marcado = document.querySelector(`input[name="${slider}"]:checked`);

  if(marcado){
    indiceActual = +marcado.getAttribute('data-index');
    posicionar(indiceActual);
  }
}

option.forEach(elemento => {
  elemento.addEventListener('change', () => cambio("slider-popular"))
});


function cambiarSeleccion(slider, direccion) {
  let opciones = document.querySelectorAll(`input[name="${slider}"]`);

  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = opciones.length - 1;
  } else if (indiceActual >= opciones.length) {
    indiceActual = 0;
  }

  opciones[indiceActual].checked = true;
  posicionar(indiceActual);
}


function iterar(cartaActual, i, tamaño){
let numero=0;
numero = cartaActual;
if (numero >= tamaño) {
numero = -(tamaño-1-(cartaActual-i)) +i-1;
}
cartaActual= numero;

return cartaActual;
}

function posicionar(indiceActual){

const estilos = {
0: { boxShadow: "0 25px 50px rgba(0, 0, 0, 50%)", transform: "translate3d(0, 0, 0px)" },
1: { boxShadow: "0 20px 40px rgba(0, 0, 0, 45%)", transform: "translate3d(50%, 0, -120px)" },
2: { boxShadow: "0 15px 30px rgba(0, 0, 0, 45%)", transform: "translate3d(100%, 0, -220px)" },
3: { transform: "translate3d(100%, 0, -320px)" },
4: { transform: "translate3d(50%, 0, -420px)" },
5: { transform: "translate3d(0, 0, -520px)" },
6: { transform: "translate3d(-50%, 0, -420px)" },
7: { transform: "translate3d(-100%, 0, -320px)" },
8: { boxShadow: "0 15px 30px rgba(0, 0, 0, 45%)", transform: "translate3d(-100%, 0, -220px)" },
9: { boxShadow: "0 20px 40px rgba(0, 0, 0, 45%)", transform: "translate3d(-50%, 0, -120px)" },
};

//Aplicamos los estilos al slider
for(let i=0; i<cartas.length;i++){
cartaActual=indiceActual;
    cartaActual=iterar((cartaActual + i), i, cartas.length);
    console.log(cartaActual);
    cartas[cartaActual].style.boxShadow = estilos[i]?.boxShadow || "none";
    cartas[cartaActual].style.transform = estilos[i]?.transform || "none";
}  
}