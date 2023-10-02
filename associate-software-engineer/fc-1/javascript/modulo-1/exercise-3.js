const gradeStudent = 8;

switch (gradeStudent) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Este aluno foi reprovado");
    break;
  case 5:
  case 6:
    console.log("Este aluno está de recuperação");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Este aluno foi aprovado");
    break;
  default:
    console.log("Não está dentro do escopo");
}
