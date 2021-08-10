// const precioOriginal = 120;
// const descueto = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descueto,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function onclickButtonPriceDiscount(){
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountvalue = inputDiscount.value;

    const precioconDescuento = calcularPrecioConDescuento(pricevalue, discountvalue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con  descuento es: $" + precioconDescuento;
}