const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const apellido = document.getElementById('apellido')
const telefono = document.getElementById('telefono')
const fecha = document.getElementById('fecha')
const contraseña = document.getElementById('contrasena')
const repetir_contraseña = document.getElementById('repetir_contrasena')
const registrar = document.getElementById('registrar')
const cancelar = document.getElementById('cancelar')


const regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/

const regexTelefono = /3\d{9}$/gi

const regexNombre = /^[a-z][a-z áéúíó ñ]{2,24}$/gi

const regexApellido =/^[a-z][a-z áéúíó ñ]{2,24}$/gi

const regexFecha =/^\d\d\/\d\d\/\d{4}$/g


registrar.addEventListener('click',()=>{
    if(regexNombre.test(nombre.value)){
        console.log("Nombre Correcto")
    }else{
        console.log("Nombre inCorrecto")
    }
    if(regexApellido.test(apellido.value)){
        console.log("Apellido Correcto")
    }else{
        console.log("Apellido inCorrecto")
    }

    if(regexTelefono.test(telefono.value)){
        console.log("Telefono Correcto")
    }else{
        console.log("Telefono inCorrecto")
    }
    if(regexFecha.test(fecha.value)){
        console.log("fecha Correcto")
    }else{
        console.log("fecha inCorrecto")
    }

    if(regexEmail.test(email.value)){
        console.log("Email correcto")
    }else{
        console.log("Email inCorrecto")
    }

    if(contraseña.value != '' && contraseña.value == repetir_contraseña.value){
        console.log("Registro exitoso")
    }else{
        console.log("Registro inCorrecto")
    }
})



 /*
 \d– dígitos.
\D– no dígitos.
\s– símbolos de espacio, tabulaciones, saltos de línea.
\S- todos menos \s.
\w– Letras latinas, dígitos, guión bajo '_'.
\W- todos menos \w.
.– cualquier carácter si tiene el 's'indicador regexp, de lo contrario cualquiera excepto una nueva línea \n.


Carta L:
minúsculasLl
modificador Lm,
titulo Lt,
mayúscula Lu,
otro Lo_
Número N:
dígito decimal Nd,
número de letra Nl,
otro No_
puntuación P:
conector Pc,
guión Pd,
cita inicial Pi,
cita final Pf,
abierto Ps,
cerca Pe,
otro Po_
Marca M(acentos, etc.):
combinación de espaciado Mc,
encerrando Me,
sin espaciamiento Mn.
Símbolo S:
moneda Sc,
modificador Sk,
matemáticas Sm,
otro So_
Separador Z:
línea Zl,
párrafo Zp,
espacio Zs_
Otro C:
controlar Cc,
formato Cf,
no asignado Cn,
uso privado Co,
sustituto Cs_

Así, por ejemplo, si necesitamos letras en minúsculas, podemos escribir \p{Ll}, signos de puntuación: \p{P}y así sucesivamente.


Para buscar caracteres especiales [ \ ^ $ . | ? * + ( )literalmente, debemos anteponerlos con una barra invertida \("escaparlos").
También necesitamos escapar /si estamos dentro /.../(pero no dentro new RegExp).
Al pasar una cadena a new RegExp, necesitamos duplicar las barras diagonales inversas \\, ya que las comillas de cadena consumen una de ella

*/