const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', factorial());

function factorial() {
    const n = parseInt(document.getElementById('factor').value);
    let numero = 1
    for(let i = 1; i <= n; i++){
        numero = numero * i;
        console.log(n)
        console.log(numero)
        resultado.innerText = `El factorial de ${n} es: ${numero}`
    }
}