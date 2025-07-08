<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante Isabel</title>
    <link rel="stylesheet" href="Carta_Restaurante.css">
    <script src="https://kit.fontawesome.com/0db69381a2.js" crossorigin="anonymous"></script>
</head>
<body>
    <header id="encabezado-carta">
        <div id="contenedor-encabezado-carta">
            <div id="regresar">
                <a href="index.html"> <i class="fa-solid fa-angle-left icono-back"></i>Atrás</a>
            </div>
            <div id="tipo-carta">
                <div id="contenedor-carta">
                    <span id="boton-carta">CARTA</span>
                </div>
                <div id="contenedor-menu">
                    <span id="boton-menu">MENU</span>
                </div>
            </div>
            <div id="carrito">
                <span id="contador">0</span>
                <span>Continuar</span>
                <span>S/0.00</span>
            </div>
        </div>
    </header>
    <main>
        <div id="encabezado-main">
            <div id="info-encabezado-main">
                <h2 id="titulo">MENU</h2>
                <p>Bienvenidos a El Rincón Livias, en donde brindamos una experiencia única al paladar. <strong>¡Elija el plato de su preferencia!</strong></p>
            </div>
            <div id="dias-semana">
                <a href="#dia-lunes">LUN</a>
                <a href="#dia-martes">MAR</a>
                <a href="#dia-miercoles">MIER</a>
                <a href="#dia-jueves">JUE</a>
                <a href="#dia-viernes">VIER</a>
                <a href="#dia-sabado">SAB</a>
                <a href="#dia-domingo">DOM</a>
            </div>
        </div>
        <div id="cuerpo-main">
            <div id="contenedor-secciones-dias">
                <section id="dia-lunes" class="seccion">
                    <h3 class="titulo-seccion">LUNES</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-martes" class="seccion">
                    <h3 class="titulo-seccion">MARTES</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-miercoles" class="seccion">
                    <h3 class="titulo-seccion">MIERCOLES</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-jueves" class="seccion">
                    <h3 class="titulo-seccion">JUEVES</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-viernes" class="seccion">
                    <h3 class="titulo-seccion">VIERNES</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-sabado" class="seccion">
                    <h3 class="titulo-seccion">SÁBADO</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
                <section id="dia-domingo" class="seccion">
                    <h3 class="titulo-seccion">DOMINGO</h3>
                    <?php include "Carta_Del_Dia.php";?>
                </section>
            </div>
        </div>
    </main>
    <script src="Carta_Restaurante.js"></script>
</body>
</html>