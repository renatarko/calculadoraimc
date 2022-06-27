const botaoCalcular = document.getElementById('calcular')
const form  = document.getElementById('form');

function calcularImc(event) {
    event.preventDefault(); // previnir comportamento padrão do navegador, refresh.
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value/100
    let resultado = document.querySelector('div#resultado')

    if (altura !== "" && peso !== "") {

        let imc = (peso/(altura*altura)).toFixed(2);
        let mensagem = "";

        let baixoPeso = imc < 18.5
        let pesoNormal = imc >= 18.5 && imc <= 24.9
        let sobrePeso = imc >= 25 && imc <= 29.9
        let obesidadeGrauOne = imc >= 30 && imc <= 34.9
        let obesidadeGrauTwo = imc >= 35 && imc <= 39.9
        let obesidadeGrauThree = imc >= 40

        if (baixoPeso) {
        mensagem = "Você está abaixo do peso!"
        } else if (pesoNormal) { 
        mensagem = "Você está no peso ideal!"
        } else if (sobrePeso) {  
        mensagem = "Você está levemente acima do peso!"
        } else if (obesidadeGrauOne) {  
        mensagem = "Cuidado! Obesidade Grau I."
        } else if (obesidadeGrauTwo) {
        mensagem = "Cuidado! Obesidade Grau II."
        } else if (obesidadeGrauThree) {
        mensagem = "Cuidado! Obesidade Grau III."
        }  
        resultado.innerHTML = `Seu IMC é ${imc}. <br>${mensagem}<br/>`;

    } else 
        resultado.textContent = ('Preencha todos os campos!') 
}

    botaoCalcular.addEventListener('click', calcularImc)
    form.addEventListener('submit', calcularImc)

