setInterval(horas, 1000);

function horas() {
    let horas = new Date()
    let horaRelogio = horas.getHours();
    let minutosRelogio = horas.getMinutes();
    let segundosRelogio = horas.getSeconds();
    
    let horaDisplay = document.getElementById('horas')
    horaDisplay.innerHTML = horaRelogio

    let minutosDisplay = document.getElementById('minutos')
    minutosDisplay.innerHTML = minutosRelogio

    let segundosDisplay = document.getElementById('segundos')
    segundosDisplay.innerHTML = segundosRelogio
    
        

}