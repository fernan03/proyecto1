import { llenarTienda } from "./eventos.js"
import {ampliarInformacionProducto} from "./ampliarInfo.js"

//Creo un producto vacion
let producto=[]


//Llamando a eventos
llenarTienda()

//Rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        producto=ampliarInformacionProducto(evento)
        console.log(producto);
        modalinfo.show();
}
})

//Rutina para añadir un producto al carrito de compras
let carrito=[]

let botonaGregarCarrito=document.getElementById("botonadd")
botonaGregarCarrito.addEventListener("click",function(){
    carrito.push()
})
   
