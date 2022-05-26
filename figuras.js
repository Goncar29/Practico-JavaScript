// código del cuadrado

console.group("Cuadrado")

    //const ladoCuadrado = 5
    //console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

    function perimetroCuadrado(lado){
        return lado * 4
    }
    //console.log("El périmetro del cuadrado es: " + perimetroCuadrado)

    //const areaCuadrado = ladoCuadrado * ladoCuadrado
    function areaCuadrado(lado){
    return lado * lado
    }
    //console.log("El área del cuadrado es: " + areaCuadrado + "cm²")

console.groupEnd()

// código del triángulo

console.group("Triángulo")

//    const ladoTriangulo1 = 6
//    const ladoTriangulo2 = 6
//    const baseTriangulo = 4
//
//    console.log(
//        "Los lados del triángulo miden: "
//        + ladoTriangulo1 
//        + "cm, " 
//        + ladoTriangulo2 
//        + "cm, " 
//        + baseTriangulo 
//        + "cm"
//    )

//   const alturaTriangulo = 5.5
//   console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

    function perimetroTriangulo(lado1, lado2, base){
        return (Number(lado1) + Number(lado2) + Number(base))
    } 
//  console.log("El périmetro del triángulo es de: " + perimetroTriangulo + "cm")

    function areaTriangulo(base, altura){
        return (base * altura) / 2
    }
//    console.log("El área del triángulo es de: " + areaTriangulo + "cm²")

console.groupEnd()

// código del círculo

console.group("Círculos")

    //Radio
    //const radioCirculo = 4
    //console.log("El radio del cícrulo es de: " + radioCirculo + "cm")
        
    //Diámetro
    function diametroCirculo(radio){
        return radio * 2
    } 
    //console.log("El diámetro del círculo es de: " + diameterCirculo + "cm")
        
    //PI
    const PI = Math.PI
    console.log("PI es: " + PI + "cm")
        
    //Circunferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    //console.log("El prímetro del círculo es: " + perimetroCirculo + "cm")
        
    //Área
    function areaCirculo(radio){
        return (radio * radio) * PI
    }
    //console.log("El área del círculo es: " + areaCirculo + "cm²")
        
console.groupEnd()

// Aquí interactuamos con el HTML
// Calculo del Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}

// Calculo del Triangulo
function calcularPerimetroTiangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value

    const perimetro = perimetroTriangulo(value, value, value)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value

    const area = areaTriangulo(value, value)
    alert(area)
}

function alturaTriangulo(lado1, lado2, base){
    if (lado1 != lado2){
        console.log("Los lados no son iguales, por lo tanto no es isosceles")
    } else {
        const ladoChico2 = base / 2;
        const baseChico = lado1;

        const ladoChico2AlCuadrado = ladoChico2 * ladoChico2;
        const baseChicoAlCuadrado = baseChico * baseChico;
        
        const lado1Chico = Math.sqrt(baseChicoAlCuadrado - ladoChico2AlCuadrado);

        const alturaDelTriangulo = lado1Chico;
        return alturaDelTriangulo;
    }
}
function calcularAlturaTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value

    const altura = alturaTriangulo(value, value, value)
    alert(altura)
}

// Calculo del Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area = areaCirculo(value)
    alert(area)
}