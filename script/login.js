const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

function entrar(){
    const usu = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    //Si los campos estan completos, guarda la información de cada input en el localStorage
   localStorage.setItem('usuario', usu)
   localStorage.setItem('password', pass)
   localStorage.setItem('email', email)
   window.document.location = '../pages/productos.html'; 
    
}

let usuario = localStorage.getItem("usu")
let password = localStorage.getItem("pass")
let mail = localStorage.getItem("email")


