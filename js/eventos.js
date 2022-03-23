let productos = [
    {foto:'img/producto1.jpg', descripcion:"Baby Grogu Peluche", precio:"$83.900", boton:"Mirar Producto"},
    {foto:'img/producto2.jpg', descripcion:"DRONE STAR WARS T65 X WING", precio:"$600.000", boton:"Mirar Producto"},
    {foto:'img/producto3.jpg', descripcion:"Stationery Set De 7 Piezas", precio:"$24.900", boton:"Mirar Producto"},
    {foto:'img/producto4.jpg', descripcion:"Set Cartuchera 5 Piezas Star Wars", precio:"$39.900", boton:"Mirar Producto"},
    {foto:'img/producto5.jpg', descripcion:"Star Wars Figura de acción", precio:"$59.900", boton:"Mirar Producto"},
    {foto:'img/producto6.jpg', descripcion:"Figura de acción Figura Olympus 24 cm", precio:"$49.900", boton:"Mirar Producto"},
    {foto:'img/producto7.jpg', descripcion:"CAMISETA SUPER STAR WARS", precio:"$83.900", boton:"Mirar Producto"},
    {foto:'img/producto8.jpg', descripcion:"Gorra Star Wars The Last Jedi Resistance", precio:"$59.000", boton:"Mirar Producto"},
    {foto:'img/producto9.jpg', descripcion:"Lapicera Doble Star Wars", precio:"$32.900", boton:"Mirar Producto"},
    {foto:'img/producto10.jpg', descripcion:"Morral Primaria Star Wars", precio:"$149.900", boton:"Mirar Producto"}
]

let fila=document.getElementById("fila")
productos.forEach(function(producto){
    console.log(producto.foto)
    console.log(producto.descripcion)
    console.log(producto.precio)

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let img=document.createElement("img")
    img.classList.add("card-img-top")
    img.src=producto.foto

    let nombre=document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=producto.descripcion

    let costo=document.createElement("h5")
    costo.classList.add("text-center")
    costo.textContent=producto.precio

    let boton=document.createElement("button")
    boton.classList.add("btn","btn-center","btn--hover","btn-warning","w-40","d-block","max-auto","mt-4")
    boton.setAttribute("type","button")
    boton.textContent=producto.boton

    tarjeta.appendChild(img)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(costo)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
}) 

//rutina para ampliar informacion del producto
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){
        if(evento.target.classList.contains("btn")){
            console.log(evento.target.parentElement.querySelector("h4").textContent);
            console.log(evento.target.parentElement.querySelector("img").src);
            let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
            modalinfo.show()
            let fotoinfo= document.getElementById("fotoInfo")
            fotoinfo.src=evento.target.parentElement.querySelector("img").src

            let tituloInfo=document.getElementById("tituloInfo")
            tituloInfo.textContent=evento.target.parentElement.querySelector("h4").textContent
        }
})

