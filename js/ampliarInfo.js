//rutina para ampliar informacion del producto
      export function ampliarInformacionProducto(evento){

            let producto={}
            
            //Lleno la informacion del producto
            producto.foto=evento.target.parentElement.querySelector("img").src
            producto.descripcion=evento.target.parentElement.querySelector("h4").textContent
            producto.precio=evento.target.parentElement.querySelector("h5").textContent

            let fotoinfo= document.getElementById("fotoInfo")
            fotoinfo.src=evento.target.parentElement.querySelector("img").src

            let tituloInfo=document.getElementById("tituloInfo")
            tituloInfo.textContent=evento.target.parentElement.querySelector("h4").textContent

            let precioinfo=document.getElementById("precio")
            precioinfo.textContent=evento.target.parentElement.querySelector("h5").textContent

            //devolver el producto generado
            return producto
        }    
           
            

