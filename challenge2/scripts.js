/* 
  Calculadora 

  1. Quais os dados de entrada que terei?
    - Nota 1
    - Nota 2
    - Nome do aluno
    - Opção menu
  2. Quais as variáveis?
    - Lista de estudantes
    - Opção do menu
  3. Qual o caminho ideal?
   - O usuário digitar as 2 notas e a opção desejada após isso será feito a 
    operação correspondente e será retornado qual usuário foi aprovado e reprovado
  4. Qual(is) o(s) caminho(s) alternativo(s)?
    - Usuário apertar uma tecla não correspondente a algum valor
  5. Quais tratamentos de dados preciso fazer?
    - Média das notas de cada aluno.
  6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)
    - Média de cada aluno e se foi aprovado ou não no concurso.
*/


let students = [];
let option = 0;

function calculateAverage(firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2;
}
 
while (option !== 3) {
  option = Number(
    prompt(`
      Digite o número correspondente a operação desejada:
      1. Adicionar novo estudante
      2. Realizar média e mostrar se os alunos cadastrados foram aprovados ou não
      3. Sair
    `)
  );
  
  switch(option) {
    case 1: {
      let name = prompt(`
        Olá usuário, Digite o nome do aluno:
      `);
      let firstGrade = Number(
        prompt(`
          Digite a primeira nota:
        `)
      )
      let secondGrade = Number(
        prompt(`
          Digite a segunda nota:
        `)
      )
      students.push({
        name,
        firstGrade,
        secondGrade
      });
      alert(`${name} adicionado(a) com sucesso!`);
      break;
    }
    case 2: {
      for (let student of students) {
        const average = calculateAverage(student.firstGrade, student.secondGrade);
        if (average >= 7) {
          alert(`A média do(a) aluno(a) ${student.name} é: ${average} \nParabéns ${student.name}! Você foi aprovado no concurso!`);
        } else {
          alert(`A média do(a) aluno(a) ${student.name} é: ${average} \nNão foi dessa vez, ${student.name}! Tente novamente!`);
        }
      }
      break;
    }
    case 3: {
      break;
    }
    default: {
      alert('Digite um número que correspondente ao menu!');
      break;
    }
  }
}
 

