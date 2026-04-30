function mostrarDatos(){
  let nombre = document.getElementById("nombre").value.trim();
  let edad = document.getElementById("edad").value.trim();

  if(nombre === "" || edad === ""){
    alert("Por favor completa todos los campos");
  } else {
    alert("Nombre: " + nombre + "\nEdad: " + edad);
  }
}
