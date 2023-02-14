document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numero_maximo = document.getElementById('numero-maximo').value;
        numero_maximo = parseInt(numero_maximo);

        let numero_aleatorio = Math.random() * numero_maximo;
        numero_aleatorio = Math.floor(numero_aleatorio + 1)
        document.getElementById('resultado-valor').innerText = numero_aleatorio

        document.querySelector('.resultado').style.display ="block";
    });
});