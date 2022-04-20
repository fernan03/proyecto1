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
let cantidad=document.getElementById("cantidadProducto").value;
botonaGregarCarrito.addEventListener("click",function(){

    //capturar la cantidad y agregarla al producto
    
    producto.cantidad=cantidad

    //agrago el producto al carrito
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
   
    capsula.classList.remove("invisible")
    capsula.textContent=suma
    modalinfo.hide()
    subtotal(1)
    
})
//rutina para limpiar
let limpiarCarrito=document.getElementById("botonlimpiar")
limpiarCarrito.addEventListener("click",function(){
    subtotal(0)
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

        let precio=document.createElement("p")
        precio.textContent=producto.precio

        let cantidad=document.createElement("p")
        cantidad.textContent=producto.cantidad

        columna1.appendChild(imagen)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })


    modalcompra.show()
})

//rutina para hacer subtotal
let mostrarsubtotal=document.getElementById("mostrarSubtotal")
function subtotal(validar){
    let total=0
    carrito.forEach(function(producto){
        if(validar==1){
            total=total+(Number(producto.cantidad)*Number(producto.precio))
            mostrarsubtotal.textContent=total
        }else{
            total=0
            mostrarsubtotal.textContent=""
        }
    })
}
   
