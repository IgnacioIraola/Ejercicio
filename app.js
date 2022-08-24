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
let precioTotal = 0;
for (const compra of compras) {
   precioTotal += compra.precio
    inner+= `<li>${compra.bebida} por un valor de $ ${compra.precio}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul);



let tot = document.createElement("h5");
tot.innerHTML =  "El total de la compra es de de: "+ precioTotal;
document.body.appendChild(tot);