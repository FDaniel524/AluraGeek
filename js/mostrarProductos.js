import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(id,titulo,precio,imagen)
{
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `<img src="${imagen}" class="imagenProducto">
        <p class="nombreProducto">${titulo}</p>
        <div class="cardContainerPrecio">
            <p>${precio}</p>
            <img src="http://127.0.0.1:5500/media/eliminar.png" class="iconoEliminar" id="${id}">
        </div>`;
    return producto;
}

async function listarProductos()
{
    try
    {
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(elemento => 
        {
            lista.appendChild(crearCard(elemento.id,elemento.titulo,elemento.precio,elemento.imagen,elemento));
            
        });
    }catch{
        lista.innerHTML=`<h2>No fue posible cargar la lista de productos</h2>`;
    }
}

listarProductos();