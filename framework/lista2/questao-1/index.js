/* Você estava criando uma array com as cores do arco-íris, e se esqueceu de algumas
cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
Arco_iris = ['Vermelho', 'Laranja', 'Amarelo', 'Verde', 'Azul', 'Roxo'];
Mas você fez assim:
Arco_iris = ['Vermelho', 'Laranja', 'Marrom', 'Azul'];

Usando somente o método splice(), insira as cores que faltam na array e remova a cor que
não faz parte do arco-íris padrão */

arcoIris = ['Vermelho', 'Laranja', 'Marrom', 'Azul']
arcoIris.splice(2, 1)
arcoIris.splice(2, 0, 'Amarelo', 'Verde')
arcoIris.splice(5, 0, 'Roxo')
console.log(arcoIris)