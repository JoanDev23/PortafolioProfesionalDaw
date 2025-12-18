
function calculadora() {
    document.addEventListener('DOMContentLoaded', () => {
        const num1 = document.getElementById('numero1');
        const num2 = document.getElementById('numero2');
        const sumar = document.getElementById('sumar');
        const restar = document.getElementById('restar');
        const multiplicar = document.getElementById('multiplicar');
        const dividir = document.getElementById('dividir');
        const porcentaje = document.getElementById('porcentaje');
        const igual = document.getElementById('igual');
        const resultado = document.getElementById('resultado');

        sumar.addEventListener('click', (e) => {
            e.preventDefault();
            const suma = parseInt(num1.value) + parseInt(num2.value);
            resultado.textContent = suma;
        })

        restar.addEventListener('click', (e) => {
            e.preventDefault();
            const resta = parseInt(num1.value) - parseInt(num2.value);
            resultado.textContent = resta;
        })

        multiplicar.addEventListener('click', (e) => {
            e.preventDefault();
            const multiplicacion = parseInt(num1.value) * parseInt(num2.value);
            resultado.textContent = multiplicacion;
        })

        dividir.addEventListener('click', (e) => {
            e.preventDefault();
            const division = parseInt(num1.value) / parseInt(num2.value);
            resultado.textContent = division;
        })

        porcentaje.addEventListener('click', (e) => {
            e.preventDefault();
            const porcentaje = parseInt(num1.value) * parseInt(num2.value) / 100;
            resultado.textContent = porcentaje;
        })
    })
}
calculadora();