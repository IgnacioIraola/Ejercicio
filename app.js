class Producto{
    constructor(bebida,precio){
        this.bebida = bebida;
        this.precio = Number(precio);
    }
}

const compras = []

for (let i = 0; i<=1; i++) {
    let bebida = prompt("Ingrese la bebida deseada")
    let precio = prompt("Ingrese la bebida deseada")

    let producto = new Producto(bebida,precio)
   compras.push(producto);
}
let ul = document.createElement("ul");
let inner = '';
for (const compra of compras) {
    inner+= `<li>${compra}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul);