
const productos = require("../funciones/funciones");
class Metodos {
  static todosLosProductos(){
    return productos.listaProductos();
  }
  static productoPorId(id){
    return productos.obtenerUnProducto(id);
  }
  static agregar(product){
    return productos.agregarUnProducto(product);
  }
  static agregaPorId(id, newContent){
    return productos.subirUnProducto(id, newContent);
  }
  static borrar(id){
    return productos.elimina(id);
  }
}

module.exports = Metodos;