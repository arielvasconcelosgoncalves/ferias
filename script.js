// Defina a data e hora do evento para o qual você está fazendo a contagem regressiva
const countDownDate = new Date("Aug 04, 2025 07:30:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calcula o tempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com o id "countdown"
    document.getElementById("countdown").innerHTML = "Retorno Previsto em: "+days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se a contagem regressiva terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Voltei!";
    }
}, 1000);
