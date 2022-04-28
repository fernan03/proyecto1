import { llenarTienda } from "./eventos.js"
import {ampliarInformacionProducto} from "./ampliarInfo.js"

//Creo un producto vacion
let producto={}


//Llamando a eventos
llenarTienda()

//Rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumenCompra'))
filaContenedora.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

        
        producto=ampliarInformacionProducto(evento)
        console.log(producto);
        modalinfo.show();
}
})

//Rutina para añadir un producto al carrito de compras
let carrito=[]

let botonaGregarCarrito=document.getElementById("botonadd")
let capsula=document.getElementById("capsula")
botonaGregarCarrito.addEventListener("click",function(){
    let cantidad=document.getElementById("cantidadProducto").value;

    //capturar la cantidad y agregarla al producto
    
    producto.cantidad=cantidad
    producto.subtotal=Number(producto.precio)*Number(producto.cantidad)

    //agrago el producto al carrito
    carrito.push(producto)
    console.log(producto.subtotal)
   

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
   
    capsula.classList.remove("invisible")
    capsula.textContent=suma
    modalinfo.hide()
    Total(1)
    reiniciar()
    
})
//rutina para limpiar
let limpiarCarrito=document.getElementById("botonlimpiar")
limpiarCarrito.addEventListener("click",function(){
    Total(0)
    capsula.textContent=0
    capsula.classList.add("invisible")
    carrito=[]


})

//rutina para ver carrito
let verCarrito=document.getElementById("verCarrito")
verCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("baseCarro")
    base.innerHTML=""
    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row","mb-5")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4","aling-self-center")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8","aling-self-center")

        let imagen=document.createElement("img")
        imagen.src=producto.foto
        imagen.classList.add("img-fluig","w-100")

        let nombre=document.createElement("p")
        nombre.textContent=producto.descripcion
        nombre.classList.add("text-center")

        let precio=document.createElement("p")
        precio.textContent=producto.precio
        precio.classList.add("text-center")

        let cantidad=document.createElement("p")
        cantidad.textContent=producto.cantidad
        cantidad.classList.add("text-center")

        let subtotalProducto = document.createElement("h5")
        subtotalProducto.textContent="subtotal: "+ producto.subtotal
        subtotalProducto.classList.add("text-center")

        columna1.appendChild(imagen)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotalProducto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })    
    modalcompra.show()
})

//rutina para hacer total
let mostrarTotal=document.getElementById("mostrarTotal")
function Total(validar){
    let total=0
    carrito.forEach(function(producto){
        if(validar==1){
            total=total+producto.subtotal
            mostrarTotal.textContent="Total: "+total

        }else{
            total=0
            mostrarTotal.textContent=""
        }
    })
}


function reiniciar(){
    let cantidadProducto = document.getElementById("cantidadProducto")
    cantidadProducto.value="1"
}
   
