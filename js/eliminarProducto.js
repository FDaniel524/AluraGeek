import {conexionAPI} from "./conexionAPI.js";

const botonesEliminar = document.querySelectorAll(".iconoEliminar");
console.log(botonesEliminar);
function borrarCard()
{
    alert("Llamado");
}

async function asignarFuncionBorrar()
{
    try
    {
        const listaAPI = await conexionAPI.asignarFuncionBorrar();
        botonesEliminar.forEach(boton => {boton.addEventListener('click', borrarCard())});
    }catch{
        alert("No fue posible asignar algunos eventos>");
    }
}

asignarFuncionBorrar();
//http://localhost:3001/productos?id=5 busqueda por id