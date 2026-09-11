function soma(a, b) {
  return a + b;
}

console.log('2 + 3 =', soma(2, 3));

if (soma(2, 3) !== 5) {
  console.error('Erro: a soma deu errado!');
  process.exit(1); // isso é o que faz o job do Actions falhar de propósito, se quiser testar
}

console.log('Tudo certo!');

// Novo: lendo variáveis de ambiente
console.log('Ambiente (env comum):', process.env.AMBIENTE_LAB);
console.log('Segredo existe?', process.env.SEGREDO_LAB ? 'sim' : 'não');
