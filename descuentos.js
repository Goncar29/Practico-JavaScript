const inputPrice=document.querySelector('#price');
const inputCoupon=document.querySelector('#coupon');
const btn=document.querySelector('#calcular');
const pResult=document.querySelector('#result');

btn.addEventListener('click',calcularPrecioConDescuento);

const couponsList=[];
couponsList.push({
    name:'BlackFriday',
    discount:30,
});
couponsList.push({
    name:'CyberLunes',
    discount:25,
});
couponsList.push({
    name:'TuCumple',
    discount:15,
});

function calcularPrecioConDescuento(){
    const price=Number(inputPrice.value);
    const coupon=inputCoupon.value;
    // VALIDAMOS EN CASO DE QUE NO SE COMPLETE EL FORMULARIO
    if(!price||!coupon){
        pResult.innerText='Por favor llena el formulario';
        return;
    }
let discount; //del array

    // FUNCIÓN FILTRO DE CUPONES
function isCouponInArray(couponElement){
    return couponElement.name==coupon;
}

const couponInArray=couponsList.find(isCouponInArray);

if(couponInArray){
    discount=couponInArray.discount;
}else{
    pResult.innerText='El cupón no es válido';
    return;
}
    // SI CUMPLE CON LO ANTERIOR REALIZA EL CALCULO DEL DESCUENTO Y LO IMPRIME
const newPrice = (price * (100 - discount )) / 100;
pResult.innerText='El nuevo precio con descuento es $' + newPrice;
}

// console.log({
//     coupon,
//     discount,
//     couponInArray,
//     couponsList,
// });

// VALIDAR SI HAY !PRECIO Y !DESCUENTO O
// VALIDAR SI HAY !PRECIO Y !CUPON