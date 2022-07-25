const productos = []
let id = 1

const listaProductos = () => {
  return productos
}

const obtenerUnProducto = (id) => {
  return (productos.find(producto => producto.id === parseInt(id)) || { error: 'Producto no encontrado' })
}

const agregarUnProducto = (producto) => {
  const prod = {
    id: id,
    nombre: producto.nombre,
    precio: producto.precio,
    foto: producto.foto
  }
  productos.push(prod)
  id++
  return (prod || { error: 'No se pudo cargar el producto, revise los datos' })
}

const subirUnProducto = (id, newContent) => {
  const producto = obtenerUnProducto(parseInt(id))
  if ((producto.id == id) && (producto.id != null)) {
    producto.nombre = newContent.nombre
    producto.precio = newContent.precio
    producto.foto = newContent.foto
    return producto
  } else {
    return 'Producto no encontrado'
  }
}

const borrarUnproducto = (id) => {
  const producto = getProducto(parseInt(id))
  if ((producto.id == id) && (producto.id != null)) {
    productos.splice(productos.indexOf(producto), 1)
    return 'Producto eliminado'
  } else {
    return 'Producto no encontrado'
  }
}

module.exports = { listaProductos, obtenerUnProducto, agregarUnProducto, subirUnProducto, borrarUnproducto }