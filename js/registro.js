import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById("botonregistro")
let modalRegistro= new bootstrap.Modal(document.getElementById('mensajeIformativo'))
let textModal=document.getElementById("mensajeModalInfor")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Exito en el registro")
    textModal.textContent="Exito en el registro"
    modalRegistro.show()
    let formulario=document.getElementById("formularioRegistro")
    formulario.reset()
    setTimeout(function(){
      modalRegistro.hide()
    },2000)
    // ..

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    console.log("fallo"+errorMessage)
    textModal.textContent="Fallo en el registro "+errorMessage
    modalRegistro.show()
  });


})