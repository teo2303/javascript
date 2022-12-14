let productos = []

const contenedorProductos = document.getElementById('contenedor-productos');
const seccionError = document.querySelector('.seccionError');
const btnComprar = document.getElementById ('btnRealizarCompra')
btnComprar.addEventListener('click', realizarCompra);

const buscarProductos = document.querySelector ('#buscarProductos');

const guardarDatos = (clave, valor) => localStorage.setItem (clave, valor); /*variable para agregar en el storage*/


/*fx buscar productos*/
buscarProductos.addEventListener('input', () => {
    const productoEncontrado = productos.filter( ({nombre}) => {
        return nombre.toUpperCase().includes(buscarProductos.value.toUpperCase())
    });
    mostrarProductos(productoEncontrado);
})


/*fx para mostrar error en la page*/
const pantallaError = () => {
    return ` <div class="paginaError">
                <img src="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/10/error-404-animacion.gif?resize=799%2C406&quality=100&strip=all&ssl=1 width="100%" height="600px" heith alt="">
                </div>`

}


/*fetch aplicado con json*/
fetch('../script/productos.json')
.then((response) => response.json())
.then((data)=>{
    productos = data
    mostrarProductos(productos);
})
.catch ((error)=>{
    seccionError.innerHTML = pantallaError();
    console.log("Disculpe los inconvenientes, en breve solucionaremos el problema", error);
})


/*fx para crear las cards de productos*/
function mostrarProductos (productos) {
    contenedorProductos.innerHTML = ''
        productos.forEach(items => {
        const {img, nombre, descripcion, precio, id} = items //desestructuracion de objetos
    
    let div = document.createElement ('div')
    div.className = 'producto'
    
    div.innerHTML =`<div class="card producto" style="width: 18rem;">
                        <img src="${img}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">${descripcion}</p>
                            <span><p class="card-precio"> $${precio} </p></span>
                            <a id="botonCompra ${id}"
                            class="btn"><i class="fas fa-shopping-cart"></i></a>
                    `
    contenedorProductos.appendChild(div);

    let agregarProducto = document.getElementById(`botonCompra ${id}`)
    agregarProducto.addEventListener('click', () => {
        //Se agrega libreria toastify
        Toastify({
            text: "Producto agregado",
            className: "info",
            style: {
            background: "linear-gradient(to right, #eeaeca, #94bbe9)",
            border: "10px",
            }
        }).showToast(btnComprar);
        agregarCarrito(id)
    
    })
    
   
});

}
