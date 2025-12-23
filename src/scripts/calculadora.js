
function calculadora() {
    document.addEventListener('DOMContentLoaded', () => {
        const display = document.getElementById('display');
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const btnValue = button.textContent;
                const operadores = ['+', '-', '*', '/'];
                const ultimoCaracter = display.textContent.slice(-1);

                if (btnValue === 'C') {
                    display.textContent = '';
                    return;
                }

                if (btnValue === '=') {
                    try {
                        const expresion = display.textContent.replace(/[^-+*/.0-9]/g, '');
                        display.textContent = new Function('return ' + expresion)();

                    } catch (error) {
                        display.textContent = 'Error';
                    }
                    return;
                }
                if (operadores.includes(btnValue) && operadores.includes(ultimoCaracter)) {
                    display.textContent = display.textContent.slice(0, -1) + btnValue;
                    return;
                }

                display.textContent += btnValue;

            });
        })
    })
}
calculadora();