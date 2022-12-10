/* Exercício 3
Crie um script para converter unidades de medida de massa
 Esse script deverá se chamar mass.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string */

/* Exercício 1
Temos um array characters que agrupa dados de jogadores em um MMORPG
 (“Jogo de representação de papéis online, multijogador em massa”) 
 usado para manter o registro de uma guilda (grupo de jogadores) no 
 acompanhamento da evolução do grupo. Esses dados foram adicionados 
 sem se atentar para sua correta tipagem, o que pode ocasionar um bug
  no futuro. Faça a correta tipagem do array por meio do tipo Character 
  e da função usada para imprimir as informações básicas de todos os jogadores. */

  type ConvertForMass = {
    nome: string,
    valor: number,
    simbolo: string,
  };
  
  const convertsForMass: ConvertForMass[] = [
    {
      nome: 'Quilograma',
      valor: 1000,
      simbolo: 'kg',
    },
    {
      nome: 'Hectograma',
      valor: 100,
      simbolo: 'hg',
    },
    {
      nome: 'Decagrama',
      valor: 10,
      simbolo: 'dag',
    },
    {
      nome: 'Grama',
      valor: 1,
      simbolo: 'g',
    },
    {
      nome: 'Decigrama',
      valor: 0.1,
      simbolo: 'dg',
    },
    {
      nome: 'Centigrama',
      valor: 0.01,
      simbolo: 'cg',
    },
    {
      nome: 'Miligrama',
      valor: 0.001,
      simbolo: 'mg',
    },
  ];
  
  function massConversation( convertsForMass: ConvertForMass , index: number ) {
    const { nome, valor, simbolo } = convertsForMass;
  
    console.log(`\n\n===== Coversion: ${index + 1} ========`);
    console.log(`name: ${nome} value: ${valor} simbolo: ${simbolo}`);
  }

  convertsForMass.forEach(massConversation);

