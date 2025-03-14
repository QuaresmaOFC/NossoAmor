const dataInicio = new Date('2025-02-08T00:00:00'); 

function atualizarTempo() {
    const agora = new Date();
    const tempoJuntos = agora - dataInicio;

    const dias = Math.floor(tempoJuntos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoJuntos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoJuntos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoJuntos % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

setInterval(atualizarTempo, 1000);