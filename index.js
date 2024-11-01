class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'desconhecido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }

  const mago = new Heroi('Mago', 25, 'mago');
  mago.atacar(); // Output: "o mago atacou usando magia"
  
  const guerreiro = new Heroi('Guerreiro', 30, 'guerreiro');
  guerreiro.atacar(); // Output: "o guerreiro atacou usando espada"
  
  const monge = new Heroi('Monge', 28, 'monge');
  monge.atacar(); // Output: "o monge atacou usando artes marciais"
  
  const ninja = new Heroi('Ninja', 22, 'ninja');
  ninja.atacar(); // Output: "o ninja atacou usando shuriken"