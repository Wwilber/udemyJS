// função .ready = verifica se o html foi carregado para depois efetuar a função seguinte:
/*$(document).ready(function () {
  // função .click = quando houver a ação(clique) no seletor "button" vai executar a função .hide(esconde um seletor:h1 = vai esconder o nome que está no h1).
  $('button').click(function () {
    $('h1').hide()
  })
})

/* Forma simplificada:
$(function () {
  $('button').click(function () {
    $('h1').hide()
  })
})
*/
// alterando o css:
// altera todos os h1:
$(document).ready(function () {
  $('button').click(function () {
    $('h1').css('color', 'red')
  })
})

// altera o h1 com id="unico":
/* $(document).ready(function () {
  $('button').click(function () {
    $('#unico').css('color', 'red')
  })
}) */

$(document).ready(function () {
  $('#azul').click(function () {
    $('p').css('color', 'blue')
  })
  $('#vermelho').click(function () {
    $('p').css('color', 'yellow')
  })
})
