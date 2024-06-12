async function listarProductos()
{
    const conexion = await fetch("http://localhost:3001/productos"); //Peticion tipo GET
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}
/*
async function buscarProductos(palabraClave)
{
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}
*/
async function crearProducto(titulo,precio,imagen)
{
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo: titulo,
            precio: precio,
            imagen: imagen
        })
    }); //Peticion tipo POST

    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function eliminarProducto()
{
    const conexion = await fetch(`http://localhost:3001/productos`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI =
{
    listarProductos, crearProducto, eliminarProducto
}

//listarProductos();