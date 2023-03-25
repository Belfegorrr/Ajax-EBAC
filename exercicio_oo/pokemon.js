class Pokemon {
  constructor(regiao, tipo) {
    this.regiao = regiao;
    this.tipo = tipo;
  }
}
class Tipo extends Pokemon {
  constructor(regiao, tipo, tamanho) {
    super(regiao, tipo)
    this.tamanho = tamanho;
  }
}
class Nome extends Tipo {
  constructor(regiao, tipo, tamanho, nome) {
    super(regiao, tipo, tamanho)
    this.nome = nome;
  }
}
const pokemonLendario = new Pokemon("Desconhecido", "Psiquico")

const tipoPedra = new Tipo("Centro", "Pedra", "grande")
const tipoVenenoso = new Tipo("Centro", "Veneno", "médio")

const pokemonDoAsh = new Nome("Norte", "Elétrico", "Pequeno", "Pikachu");
const pokemonDoGary = new Nome("Sul", "Água", "Pequeno", "Squirtle");
const pokemonDoBrok = new Nome("Centro", "Pedra", "Grande", "Onix");

console.log(pokemonLendario)
console.log(tipoPedra)
console.log(tipoVenenoso)
console.log(pokemonDoAsh)
console.log(pokemonDoGary)
console.log(pokemonDoBrok)

