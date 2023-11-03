function formatarValor(input, event) {
  // Salva a posição do cursor antes de reformatar o valor
  const posicaoCursor = input.selectionStart;

  // Remove todos os caracteres não numéricos, exceto a vírgula
  input.value = input.value.replace(/[^\d,]/g, '');
  
  // Substitui a vírgula por ponto para permitir a conversão correta para número
  input.value = input.value.replace(',', '.');
  
  // Formata o número com duas casas decimais e coloca a vírgula novamente
  let valorFormatado = parseFloat(input.value).toFixed(2).replace('.', ',');
  
  // Atualiza o valor do campo com a formatação
  input.value = valorFormatado;
  
  // Restaura a posição do cursor para o início do campo
  input.setSelectionRange(posicaoCursor, posicaoCursor);
  
  // Verifica se a tecla pressionada é um número ou uma tecla de navegação (ex: setas)
  if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode === 8 || event.keyCode === 46) {
      // Calcula a nova posição do cursor desconsiderando os caracteres não numéricos
      let novaPosicaoCursor = posicaoCursor - input.value.substr(0, posicaoCursor).replace(/[^\d]/g, '').length;
      // Define a nova posição do cursor
      input.setSelectionRange(novaPosicaoCursor, novaPosicaoCursor);
  }
}
