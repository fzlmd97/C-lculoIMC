const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if (valorIMC < 25){
            classificacao = 'Com peso ideal';
        }else if (valorIMC < 30){
            classificacao = 'Acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'Com obesidade grau 1';
        }else if (valorIMC < 40){
            classificacao = 'Com obesidade grau 2 - Severa';
        }else{
            classificacao = 'Com obesidade grau 3 - Mórbida';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está: ${classificacao}`;
    }else{
        resultado.textContent = 'Por favor, preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc)