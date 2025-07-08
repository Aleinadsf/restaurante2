document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí se ejecutará cuando la página haya cargado
    iniciar();
  });

  function iniciar(){
    iniciarBtnCompras();
    restaurarCarrito();
}

function restaurarCarrito(){
    const vacio = listaCarrito.querySelector("#carrito-vacio");
    const totalCarrito = document.querySelector("#total-productos-carrito");
    if(productosExistentes.length<=0){
        listaCarrito.style.justifyContent = "center";
        vacio.style.display = "block";
        totalCarrito.style.display = "none";
    }else{
        listaCarrito.style.justifyContent = "flex-start";
        vacio.style.display = "none";
        totalCarrito.style.display = "flex";
    }
    
}



// Mecanismo de las tarjetas

let iconoInfo = document.querySelectorAll(".icono-info");
let iconoRegresar = document.querySelectorAll(".icono-regresar");

iconoInfo.forEach(icono => {
icono.addEventListener('click', (event) => abrirInfo(event));
});

iconoRegresar.forEach(icon =>{
icon.addEventListener('click', (event) => abrirCarta(event));
});

function abrirInfo(event){
// Obtenemos específicamente el elemento al que se le hizo "click"
let regresar = event.target;
// Obtenemos la parte frontal
let front = regresar.parentNode;
// Obtenemos la parte trasera
let back = front.nextElementSibling;

//Iteramos la clase show en ambos lados de la carta
front.classList.toggle("show");
back.classList.toggle("show");
}

function abrirCarta(event){
 // Obtenemos específicamente el elemento al que se le hizo "click"
 let regresar = event.target;
 // Obtenemos la parte trasera
 let back = regresar.parentNode;
 // Obtenemos la parte frontal
 let front = back.previousElementSibling;

 //Iteramos la clase show en ambos lados de la carta
 front.classList.toggle("show");
 back.classList.toggle("show");
}

//MOSTRAR CARRITO DE COMPRAS

const contenedorCarrito = document.getElementById("contenedor-productos-carrito");
    const carrito = document.getElementById("carrito-compras");
    const btncerrar = document.getElementById("btn-cerrar-carrito");
    const fondo = document.getElementById("fondo");

function mostrarCarrito(){
    contenedorCarrito.classList.toggle("show");
    fondo.classList.toggle("show");
    document.body.style.overflow = 'hidden';
}

    carrito.addEventListener("click",mostrarCarrito);
    btncerrar.addEventListener("click",mostrarCarrito);
    fondo.addEventListener("click",mostrarCarrito);

var totalPagar = 0;
    var totalProductos = 0;


    const listaCarrito = document.getElementById("lista-productos-carrito");
    const productosExistentes = listaCarrito.getElementsByClassName("item-producto-carrito");

function agregarProducto(nombre, precio, imagenURL){
    /*if(productosCarrito){
        return;
    } */
    

    for(let i=0;i<productosExistentes.length;i++){
        var contenedorNombre = productosExistentes[i].querySelector(".producto-contenido-carrito .contenedor-info-producto-carrito .info-producto-carrito-01 .producto-nombre-carrito");
        var contenedorCantidad = productosExistentes[i].querySelector(".cantidad-item-producto-carrito .contador-item-carrito");
        if(contenedorNombre.textContent === nombre){
            var cantidad = parseInt(contenedorCantidad.textContent)+1;
            contenedorCantidad.textContent = cantidad;

            totalPagar += parseFloat(precio);
            totalProductos++;
            actualizarTotal();
            return;
        }
    }


    /* 
        let div = document.createElement("div");
    div.className = "item-producto-carrito";
    div.innerHTML = `
        <div class="cantidad-item-producto-carrito">
            <span class="contador-item-carrito">1</span>
        </div>
        <div class="producto-contenido-carrito">
            <img src="${imagenURL}" alt="${nombre}" class="producto-imagen-carrito">
            <div class="contenedor-info-producto-carrito">
                <div class="info-producto-carrito-01">
                    <i class="${catURL}"></i>
                    <h3 class="producto-nombre-carrito">${nombre}</h3>
                </div>
                <div class="info-producto-carrito-02">
                    <h2 class="producto-precio-carrito">$ ${precio}</h2>
                    <div class="contenedor-botones-cantidad-carrito">
                        <button class="btn-cantidad-item-carrito btnAgregar-item-carrito" data-nombre="${nombre}">
                            <i class="ti ti-circle-plus"></i>
                        </button>
                        <button class="btn-cantidad-item-carrito btnEliminar-item-carrito" data-nombre="${nombre}">
                            <i class="ti ti-circle-minus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    */


    // Crear el elemento div principal
    let div = document.createElement("div");
    div.className = "item-producto-carrito";
    div.setAttribute("data-nombre",nombre);
    div.setAttribute("data-precio",precio);
    div.setAttribute("data-cantidad","1");

    // Crear el elemento div para la cantidad del producto
    let divCantidad = document.createElement("div");
    divCantidad.className = "cantidad-item-producto-carrito";
    let spanContador = document.createElement("span");
    spanContador.className = "contador-item-carrito";
    spanContador.textContent = "1";
    divCantidad.appendChild(spanContador);

    // Crear el elemento div para el contenido del producto
    let divContenido = document.createElement("div");
    divContenido.className = "producto-contenido-carrito";

    // Crear la etiqueta img para la imagen del producto
    let imgProducto = document.createElement("img");
    imgProducto.src = imagenURL;
    imgProducto.alt = nombre;
    imgProducto.className = "producto-imagen-carrito";

    // Crear el contenedor de información del producto
    let divInfoProducto = document.createElement("div");
    divInfoProducto.className = "contenedor-info-producto-carrito";

    // Crear la primera sección de información del producto
    let divInfo1 = document.createElement("div");
    divInfo1.className = "info-producto-carrito-01";
    let h3NombreProducto = document.createElement("h3");
    h3NombreProducto.className = "producto-nombre-carrito";
    h3NombreProducto.textContent = nombre;
    divInfo1.appendChild(h3NombreProducto);

    // Crear la segunda sección de información del producto
    let divInfo2 = document.createElement("div");
    divInfo2.className = "info-producto-carrito-02";
    let h2PrecioProducto = document.createElement("h2");
    h2PrecioProducto.className = "producto-precio-carrito";
    h2PrecioProducto.textContent = `$ ${precio}`;

    // Crear el contenedor de botones de cantidad del producto
    let divContenedorBotones = document.createElement("div");
    divContenedorBotones.className = "contenedor-botones-cantidad-carrito";

    // Crear el botón para agregar producto
    let btnAgregar = document.createElement("button");
    btnAgregar.className = "btn-cantidad-item-carrito btnAgregar-item-carrito";
    btnAgregar.setAttribute("data-nombre", nombre);
    let iconoAgregar = document.createElement("i");
    iconoAgregar.className = "ti ti-circle-plus";
    btnAgregar.appendChild(iconoAgregar);

    btnAgregar.addEventListener("click", function(){
        var cantidad = parseInt(spanContador.textContent)+1;
        spanContador.textContent = cantidad;
        div.setAttribute("data-cantidad",cantidad);

        totalPagar += parseFloat(precio);
        totalProductos++;
        actualizarTotal();
    });

    // Crear el botón para eliminar producto
    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-cantidad-item-carrito btnEliminar-item-carrito";
    btnEliminar.setAttribute("data-nombre", nombre);
    let iconoEliminar = document.createElement("i");
    iconoEliminar.className = "ti ti-circle-minus";
    btnEliminar.appendChild(iconoEliminar);

    btnEliminar.addEventListener("click", function(){
        var cantidad = parseInt(spanContador.textContent)-1;
        spanContador.textContent = cantidad;
        div.setAttribute("data-cantidad",cantidad);

        if(cantidad<=0){
            listaCarrito.removeChild(div);
            restaurarCarrito()
        }
        totalPagar -= parseFloat(precio);
        totalProductos--;
        actualizarTotal();
    });

    // Agregar los botones al contenedor de botones
    divContenedorBotones.appendChild(btnAgregar);
    divContenedorBotones.appendChild(btnEliminar);

    // Agregar elementos a divInfo2
    divInfo2.appendChild(h2PrecioProducto);
    divInfo2.appendChild(divContenedorBotones);

    // Agregar elementos a divInfoProducto
    divInfoProducto.appendChild(divInfo1);
    divInfoProducto.appendChild(divInfo2);

    // Agregar elementos a divContenido
    divContenido.appendChild(imgProducto);
    divContenido.appendChild(divInfoProducto);

    // Agregar elementos al div principal
    div.appendChild(divCantidad);
    div.appendChild(divContenido);

    listaCarrito.appendChild(div);
    totalPagar += parseFloat(precio);
    totalProductos++;
    actualizarTotal();
    restaurarCarrito();
}


//INICIAR BOTONES DE COMPRA
function iniciarBtnCompras(){
    const btnAñadirProducto = document.querySelectorAll(".btnComprar");

    btnAñadirProducto.forEach(btn =>{
        btn.addEventListener("click", function(){
            var padrebtn = btn.parentElement;

            var nombre = padrebtn.querySelector('h3').textContent;
            var precio = padrebtn.querySelector('span h4').textContent;
            var calificacion = padrebtn.querySelector('h2').textContent;
            var imagen = padrebtn.querySelector('img').getAttribute("src");

            agregarProducto(nombre,precio,imagen);
        });
    });
}

var totalPrecioCarrito = document.getElementById("numero-precio-carrito");
    var totalCantidadProductosCarrito = document.getElementById("contador-carrito");

    function actualizarTotal(){
        totalPrecioCarrito.textContent = totalPagar.toFixed(2);
        totalCantidadProductosCarrito.textContent = totalProductos;
    }