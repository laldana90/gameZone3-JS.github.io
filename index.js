
const productosArray = []

class newProduct {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock
    }
}

const ps5 = new newProduct(1, 'PS5', 500, 50);
productosArray.push(ps5);
const xbox = new newProduct(2, 'XBOX', 400, 55);
productosArray.push(xbox);
const nintendo = new newProduct(3, 'Nintendo Switch', 300, 60);
productosArray.push(nintendo);
const videojuego = new newProduct(4, 'Videojuego', 50, 80);
productosArray.push(videojuego);


// Manipulando DOM

const selectProd = document.getElementById('lista');

productosArray.forEach(elemento=> {
    const optionProd = document.createElement('option');
    optionProd.innerText = `${elemento.name}: $${elemento.price}`
    optionProd.setAttribute('id', `${elemento.id}`)
    selectProd.append(optionProd)
})

// Eventos

const carrito = []

const botonIngresar = document.getElementById('ingresarProd')
const finalizarCompra = document.getElementById('finCompra')

botonIngresar.onclick = () => {
    const indexProd = selectProd.selectedIndex
    const productoSeleccionado = productosArray[indexProd]
    carrito.push(productoSeleccionado)
    
}

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

botonIngresar.addEventListener('click', function onClick() {
  botonIngresar.style.backgroundColor = colors[index];
  botonIngresar.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});

finalizarCompra.onclick = () => {
    let total = 0
    carrito.forEach((prod) => {
        total = total + prod.price
    })


    Swal.fire({
        position: 'center',
        icon: 'success',
        title:  `Felicidades! Escogiste ${carrito.length} producto(s) y el total de tu compra es de $${total}`,
        showConfirmButton: false,
        background: 'black',
        color: 'whitesmoke'
        
      })

}


// Storage/JSON

const formularioUsuario = document.getElementById('formulario')
const tituloBienvenida = document.getElementById('tituloBienvenida')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')


const infoUsuario = {}

formularioUsuario.onsubmit = (event) => {
    event.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
 
    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
   

}

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))

if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== "") {
    tituloBienvenida.innerText =  `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, Comencemos con tu compra!!!`
}






