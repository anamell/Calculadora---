function calcularAntecessor() {
    let valor = document.getElementById('valor').value;

    if (valor === '' || isNaN(valor)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    valor = parseInt(valor, 10);

    let antecessor = valor - 1;

    document.getElementById('resultado').innerText = `O antecessor de ${valor} é ${antecessor}.`;
}