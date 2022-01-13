/* // função .ready = verifica se o html foi carregado para depois efetuar a função seguinte:
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
/* $(document).ready(function () {
  $('button').click(function () {
    $('h1').css('color', 'red')
  })
}) */

// altera o h1 com id="unico":
/* $(document).ready(function () {
  $('button').click(function () {
    $('#unico').css('color', 'red')
  })
}) */

/*$(document).ready(function () {
  $(function(){
    ('#azul').click(function () {
    $('p').css('color', 'blue')
  })
  $('#vermelho').click(function () {
    $('p').css('color', 'red')
  })
})

$(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
  })
})
*/

// EFEITO FADE IN E FADE OUT: (esconde a div(seletor) de uma maneira bem suave)
/*$(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
    $('p').fadeOut()
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
    $('p').fadeOut()
  })
})

// método -  delay: pausar a execução do js em milesegundos:
/* $(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
    $('p').fadeOut()
    $('p').delay(1000)
    $('p').fadeIn()
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
    $('p').fadeOut('slow')
    $('p').delay(1000)
    $('p').fadeIn(5000)
    $('#mensagem').text('Cor alterada com sucesso')
    $('#mensagem').css('color', 'red')
    $('#mensagem').css('border', '1px solid red')
    $('#mensagem').delay(3000)
    $('#mensagem').fadeOut('fast')
  })
}) */

// encadeamento em bloco:
/*$(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
    $('p').fadeOut()
    $('p').delay(1000)
    $('p').fadeIn()
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
    $('p').fadeOut('slow')
    $('p').delay(1000)
    $('p').fadeIn(5000)
    $('#mensagem')
      .text('Cor alterada com sucesso')
      .css('color', 'red')
      .css('border', '1px solid red')
      .delay(3000)
      .fadeOut('fast')
  })
})

// declaração multipla do CSS:
/*$(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
    $('p').fadeOut()
    $('p').delay(1000)
    $('p').fadeIn()
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
    $('p').fadeOut('slow')
    $('p').delay(1000)
    $('p').fadeIn(5000)
    $('#mensagem')
      .text('Cor alterada com sucesso')
      .css({
        color: 'red',
        border: '1px solid red',
        backgroundColor: '#F08080'
      })
      .css()
      .delay(3000)
      .fadeOut('fast')
  })
}) */
/*
// adicionando ou removendo classes:
$(function () {
  $('#azul').click(function () {
    $('p').css('background-color', 'blue')
    $('p').fadeOut()
    $('p').delay(1000)
    $('p').fadeIn()
  })
  $('#vermelho').click(function () {
    $('p').css('background-color', 'red')
    $('#mensagem')
      .text('Cor alterada com sucesso')
      .css({
        color: 'red',
        border: '1px solid red'
      })
      .delay(3000)
      .addClass('green')
    $('button').removeClass('red')
  })
}) */
$(function () {
  $('#l1').click(function () {
    $('#foto2').hide()
    $('#foto3').hide()
    $('#foto4').hide()
    $('#foto1').show()
  })
  $('#l2').click(function () {
    $('#foto1').hide()
    $('#foto3').hide()
    $('#foto4').hide()
    $('#foto2').show()
  })
  $('#l3').click(function () {
    $('#foto1').hide()
    $('#foto2').hide()
    $('#foto4').hide()
    $('#foto3').show()
  })
  $('#l4').click(function () {
    $('#foto1').hide()
    $('#foto2').hide()
    $('#foto3').hide()
    $('#foto4').show()
  })
})
