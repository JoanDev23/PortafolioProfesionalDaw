
function calculadora() {
    document.addEventListener('DOMContentLoaded', () => {
        const numero1 = document.getElementById('numero1');
        const numero2 = document.getElementById('numero2');
        const resultado = document.getElementById('resultado');

        numero1.addEventListener('input', () => {
            numero1.textContent = numero1.value;
        });

        numero2.addEventListener('input', () => {
            numero2.textContent = numero2.value;
        });

        resultado.addEventListener('click', (e) => {
            e.preventDefault()
            resultado.textContent = parseInt(numero1.textContent) + parseInt(numero2.textContent);

        });
    })
}
calculadora();
