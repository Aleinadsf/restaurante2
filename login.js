document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos el formulario de registro y le agregamos un event listener para el evento submit
  const formularioRegistro = document.getElementById("formularioRegistro");
  formularioRegistro.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente

    // Obtenemos los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const usuarioRegistro = document.getElementById("usuario").value;
    const contraseñaRegistro = document.getElementById("contraseña").value;

    // Validamos que todos los campos estén completos
    if (nombre && apellido && usuarioRegistro && contraseñaRegistro) {
      // Aquí podrías agregar código para enviar los datos del formulario a tu backend para procesar el registro

      // Mostramos un mensaje de éxito
      alert("¡Registro exitoso!");

      // Redireccionamos al usuario al index
      window.location.href = "index.html";
    } else {
      // Mostramos un mensaje de error si algún campo está vacío
      alert("Por favor completa todos los campos.");
    }
  });

  // Obtenemos el formulario de inicio de sesión y le agregamos un event listener para el evento submit
  const formularioInicioSesion = document.getElementById("formularioInicioSesion");
  formularioInicioSesion.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente

    // Obtenemos los valores de los campos
    const usuarioInicioSesion = document.getElementById("usuario").value;
    const contraseñaInicioSesion = document.getElementById("contrasena").value;

    // Validamos que ambos campos estén completos
    if (usuarioInicioSesion && contraseñaInicioSesion) {
      // Aquí podrías agregar código para verificar las credenciales del usuario en tu backend

      // Mostramos un mensaje de éxito
      alert("¡Inicio de sesión exitoso!");

      // Redireccionamos al usuario al index
      window.location.href = "index.html";
    } else {
      // Mostramos un mensaje de error si algún campo está vacío
      alert("Por favor completa todos los campos.");
      return true; 
    }
  });
});


