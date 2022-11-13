class Articulo {

    constructor(nombre, categoria){
        this.nombre = nombre;
        this.categoria = categoria;
        // this.propiedades = new Array();
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    // addPropiedad(propiedad, valor) {
    //     this.propiedades.push((propiedad, valor));
    // }

    validarArticulo(){
        if ( (this.nombre != "" && this.nombre != null) && (this.categoria != "" && this.categoria != null) ){
            return true;
        }
        if (this.nombre == "" || this.nombre == null){
            alert("Debe de colocar un nombre al Articulo!");
        }
        if (this.categoria == "" || this.categoria == null){
            alert("Debe seleccioanr una Categoria!");
        }
        return false;
    }
}

let articulo = new Articulo();

document.getElementById("nombreArticulo").addEventListener("blur", () => {
    articulo.setNombre(document.getElementById("nombreArticulo").value);
});

document.getElementById("categoria").addEventListener("blur", () => {
    articulo.setCategoria(document.getElementById("categoria").value);
});

// document.getElementById("agregarPropiedad").addEventListener("click", () => {
//     // Se crea el elemento <li></li>
//     let li = document.createElement("li");
//     // Se le agrega la clase al elemento <li>
//     li.className = 
//     document.getElementById("lista-propiedades").appendChild(li);
// });

function validar(){
    if(articulo.validarArticulo()){
        return true;
    }
    return false;
}