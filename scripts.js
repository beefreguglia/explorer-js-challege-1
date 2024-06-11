/* 
  Calculadora 

  1. Quais os dados de entrada que terei?
    - Opção menu
    - Número 1
    - Número 2
  2. Quais as variáveis?
    - Opção do menu
  3. Qual o caminho ideal?
   - O usuário digitar os 2 números e a opção desejada após isso será feito a 
      operação correspondente e será retornado a operação correta
  4. Qual(is) o(s) caminho(s) alternativo(s)?
    - Usuário apertar uma tecla não correspondente a algum valor
  5. Quais tratamentos de dados preciso fazer?
    - Nenhum.
  6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)
    - Valor da operação feita.
*/

let firstNumber = Number(
  prompt(`
    Olá usuário, Bem vindo a BeefCalculator!
    Digite o primeiro número:
  `)
);
let secondNumber = Number(
  prompt(`
    Digite o segundo número:
  `)
);
let option = Number(
  prompt(`
    Digite o número correspondente a operação desejada:
    1. Soma (+)
    2. Subtração (-)
    3. Multiplicação (*)
    4. Divisão (/)
    5. Resto da divisão (%)
    6. Verificar se a soma é par ou impar ()
    7. Verificar se os itens são iguais
    8. Sair
  `)
);

switch(option) {
  case 1: {
    const result = firstNumber + secondNumber;
    alert(`A soma é: ${result}`);
    break;
  }
  case 2: {
    const result = firstNumber - secondNumber
    alert(`A subtração é: ${result}`);
    break;
  }
  case 3: {
    const result = firstNumber * secondNumber
    alert(`A multiplicação é: ${result}`);
    break;
  }
  case 4: {
    const result = firstNumber / secondNumber
    alert(`A divisão é: ${result}`);
    break;
  }
  case 5: {
    const result = firstNumber % secondNumber
    alert(`O resto é: ${result}`);
    break;
  }
  case 6: {
    const sum = firstNumber + secondNumber;
    alert(sum % 2 === 0 ? 'É par' : 'É ímpar');
    break;
  }
  case 7: {
    alert(firstNumber === secondNumber ? 'É igual' : 'Não é igual');
    break;
  }
  case 8: {
    break;
  }
  default: {
    alert('Digite um número que corresponde a operações da calculadora');
    break;
  }
}