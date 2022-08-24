class Producto{
    constructor(bebida,precio){
        this.bebida = bebida;
        this.precio = Number(precio);
    }
}


//Ingreso Compra
const compras = []

for (let i = 0; i<=2; i++) {
    let bebida = prompt("Ingrese la bebida deseada")
    let precio = prompt("Ingrese el precio")

    let producto = new Producto(bebida,precio)
   compras.push(producto);
}

//DOM
let ul = document.createElement("ul");
let inner = '';
for (const compra of compras) {
    inner+= `<li>${compra.bebida} por un valor de $ ${compra.precio}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul);



//calculo total
const precioBebidas = compras.map(dato => dato.precio)
let precioTotales = precioBebidas.reduce((a,b) =>a+b)


let tot = document.createElement("h5");
let importetotal= '';
for (const precioTotal of precioTotales) {
    importetotal+= `<h5> El total es de: $${precioTotal}</h5>`;
}
tot.innerHTML = importetotal;
document.body.appendChild(tot);