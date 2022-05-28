//const precio = 120
//const descuento = 18

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice")
    const priceValue = InputPrice.value

    const InputDiscount = document.getElementById("InputDiscount")
    const discountValue = InputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio con desuento son: $" + precioConDescuento
}

//console.log({
//    precio,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//})