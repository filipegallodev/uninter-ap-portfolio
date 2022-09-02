var data = new Date();
var horario = new Date()
var dataAtual = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
document.getElementById("p1").innerHTML = dataAtual;

function setarHorario() {
   var horario = new Date()
   var horarioAtual = horario.getHours() + ":" + horario.getMinutes() + ":" + horario.getSeconds();
   document.getElementById("p2").innerHTML = horarioAtual;
}

setInterval(setarHorario, 1000);