/* Exercício 1
Temos um array characters que agrupa dados de jogadores em um MMORPG
 (“Jogo de representação de papéis online, multijogador em massa”) 
 usado para manter o registro de uma guilda (grupo de jogadores) no 
 acompanhamento da evolução do grupo. Esses dados foram adicionados 
 sem se atentar para sua correta tipagem, o que pode ocasionar um bug
  no futuro. Faça a correta tipagem do array por meio do tipo Character 
  e da função usada para imprimir as informações básicas de todos os jogadores. */

type Character = { 
  nickname: string,
    class: string,
    stats: { agi: number, str: number, int: number, hp: number, mp: number },
    createdAt: Date,
};

const characters: Character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter( characters: Character , index: number ) {
  const { nickname, class: cls, stats, createdAt } = characters;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
stats: agi:${stats.agi}, atr:${stats.str}, int:${stats.int}, hp:${stats.hp}, mp:${stats.mp}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);