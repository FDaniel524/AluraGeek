import {conexionAPI} from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario");

async function crearProducto(evento)
{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre").value;
    const precio = document.querySelector("[data-precio").value;
    const imagen = document.querySelector("[data-imagen").value;
    //const id = localStorage.getItem("LastId") +  1;
    try
    {
        await conexionAPI.crearProducto(nombre,precio,imagen);
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento))