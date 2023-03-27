const alunos = [
  {
    nome: "Fabio",
    nota: 5,
  },
  {
    nome: "Alex",
    nota: 7,
  },
  {
    nome: "Gian",
    nota: 8,
  },
  {
    nome: "Daniele",
    nota: 9,
  },
  {
    nome: "Iago",
    nota: 4,
  },
  {
    nome: "Lais",
    nota: 10,
  },
  {
    nome: "Viviane",
    nota: 6,
  },
  {
    nome: "Pedro",
    nota: 3,
  },
];

const aprovacao = alunos.filter( aluno => (aluno.nota >= 6))

console.log(aprovacao)