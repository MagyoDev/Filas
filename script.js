let filaComum = [];
let filaEspecial = [];
let contadorComum = 1;
let contadorEspecial = 1;

function gerarFila() {
    let senha = "C" + String(contadorComum).padStart(3, '0');
    filaComum.push(senha);
    contadorComum++;
    atualizarFilas();
}

function gerarSenhaEspecial() {
    let senha = "E" + String(contadorEspecial).padStart(3, '0');
    filaEspecial.push(senha);
    contadorEspecial++;
    atualizarFilas();
}

function atualizarFilas() {
    document.getElementById('filaComum').innerText = filaComum.length ? filaComum.join(", ") : "Nenhuma senha";
    document.getElementById('filaEspecial').innerText = filaEspecial.length ? filaEspecial.join(", ") : "Nenhuma senha";
}

function atenderFila() {
    if (filaComum.length) {
        alert("Atendendo " + filaComum[0]);
        filaComum.shift();
        atualizarFilas();
    } else {
        alert("Nenhuma senha na fila comum.");
    }
}

function atenderEspecial() {
    if (filaEspecial.length) {
        alert("Atendendo " + filaEspecial[0]);
        filaEspecial.shift();
        atualizarFilas();
    } else {
        alert("Nenhuma senha na fila especial.");
    }
}
