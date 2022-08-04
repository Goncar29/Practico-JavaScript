//const precio = 120
//const descuento = 18

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}
// function calcularPrecioConCupon(precio, descuento, coupon){
//     const porcentajePrecioConDescuento = 100 - descuento
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
    
//     const porcentajePrecioConCoupon = 100 - precioConDescuento
//     const coupon = (precioConDescuento * porcentajePrecioConCoupon) / 100
    
//     const resultPriceCoupon = coupon
//     return resultPriceCoupon
// }
function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice")
    const priceValue = InputPrice.value

    const InputDiscount = document.getElementById("InputDiscount")
    const discountValue = InputDiscount.value

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
            descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
            descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
            descuento = 25;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento

    const descuentoTotal = calcularPrecioConCupon(precioConDescuento, couponValue)

    const resultPriceCoupon = document.getElementById("resultPriceCoupon")
    resultPriceCoupon.innerText = "El descuento total son: $ " + descuentoTotal
}

//console.log({
//    precio,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//})