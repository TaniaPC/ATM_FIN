/* 
*  Creado por TaniaPC
*  6/23/2022
*/ 

//Arreglo de objetos para obtener datos
let cuentas = [
    { nombre: "Gaga", saldo: 1000, retiro: 300,  deposito: 250, password: 'fake' },
    { nombre: "Karen", saldo: 2000, retiro: 700, deposito:100, password: 'rats' },
    { nombre: "Kenny", saldo: 900, retiro: 200, deposito: 500, password: '1999' }
  ];

  
//Funcion ingresar usuario y contraseñas
function ingresar() {
   // Tomar datos de los inputs
     let usuario = document.getElementById("usuario").value;
     let contrasenia = document.getElementById('contrasenia').value;
     
    
     // Validar los datos de los inputs
     validarUsuarioLogin(usuario, contrasenia);
 }
 
 //Funcion para validar usuario al hacer login con usuario y contraseña
 function validarUsuarioLogin (usuario, contra) {
     let usuarioValido = false;
     for(let i = 0; i < cuentas.length; i++) {
         if(usuario === cuentas[i].nombre && contra === cuentas[i].password) {
             // Definir qué pasará si son correctos
             alert('CORRECT DATA');
             usuarioValido = true;
             mostrarMenuHTML(i)
             return
         }
     }
     // Excepcion para validar si no son correctos
     if(!usuarioValido) {
         alert('INCORRECT DATA');
     }
 }

  //Funcion mostrarMenuHTML, cambio entre ventanas 
   function mostrarMenuHTML(posicionUsuario) {
 
     // Ocultar Login
     document.getElementById("inicio").style.display = "none";
 
     // Mostrar menú opciones
     document.getElementById("acciones").style.display = "block";
 
     //Consultar saldo 
     let consultar = document.getElementById("consultar");

        consultar.addEventListener('click', function () {
        alert('The current balance is: $' + cuentas[posicionUsuario].saldo);
           
       } );
       
      //Consultar retirar
    let retirar = document.getElementById("retirar");

       retirar.addEventListener('click', function () {
        alert('The current retirement is: $' + cuentas[posicionUsuario].retiro);

    } );

    //Consultar depositar    
    let depositar = document.getElementById("depositar");  

       depositar.addEventListener("click",function() {
       alert( "The current deposit is: $" + cuentas[posicionUsuario].deposito);

});  

}