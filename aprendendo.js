class pessoa {
    nome;
    peso;
    altura;

    constructor() {
        this.nome = 'nome';
        this.peso = 1;
        this.altura = 1;
    }

    calcularIMC() { /* Calcula o IMC com base nos valores fornecidos */
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() { /* Classifica o IMC da pessoa com base nos valores fornecidos */
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >=25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >=30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }

    calcularIMCIdeal() { /* Calcula o IMC Ideal da pessoa */
        return (this.altura * this.altura) * 21.7; 
    }
}



const fulano = new pessoa();
fulano.nome = prompt('Digite seu nome: ');
fulano.peso = prompt('Digite seu peso: ');
fulano.altura = prompt('Digite sua altura, Ex. 1.70: ');

console.log(`O IMC de ${fulano.nome} é ${fulano.calcularIMC().toFixed(2)}, para ter seu IMC ideal você deve ter ${fulano.calcularIMCIdeal().toFixed(2)}Kg.`);
console.log(`${fulano.nome} está classificado como ${fulano.classificarIMC()}`);
