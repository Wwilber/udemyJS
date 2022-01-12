# INTRODUÇÃO:

javaScript = linguagem de programação:

- client side - processada no navegador do cliente;
- funciona dentro de uma página html;
- A declaração do JS deve ser feita dentro do <head>;

# 8. VARIÁVEIS:

- espaço na memória que eu vou armazenar alguma informação.
  var mensagem = "olá mundo"
  alert(mensagem)

# 9. OPERAÇÕES MATEMÁTICAS:

- Adição:
  var soma = a + b
  alert(soma)

- Subtração:
  var sub = a - b
  alert(sub)

- Multiplicacao:
  var mult = a \* b
  alert(mult)

- Divisao:
  var div = a / b
  alert(div)

- Resto da divisao:
  var rest = b % a
  alert(rest)

# 10 e 11. ESTRUTURAS CONDICIONAIS:

var x = 2
var y = 3
var z = 'olá mundo'
if (z % a == 0) {
alert('par')
} else if (z % a == 1) {
alert('impar')
} else {
alert('número não identificado')
}

# 12. ESTRUTURA DE REPETIÇÃO

# WHILE:

- Repete um bloco de código enquanto a condição for verdadeira.
  var i = 0
  while (i < 3) {
  alert(i)
  i = i + 1
  }

# FOR:

- Repete um bloco de código enquanto a condição for verdadeira.
  var x
  for (x = 1; x < 20; x++) {
  soma = soma + x
  alert(soma)
  }

# 13. TIPOS DE DADOS:

var numero = 6 // - inteiro;
var decimal = 4.5 // - decimal;
var texto = "olá mundo" // - String
var lista = ["laranja", "maça", "mamao"];

# 14. ARRAY:

var lista2 = ["laranja", "maça", "mamao", 1234];
alert(lista2[0]) - mostra a fruta laranja

var lista = ['laranja', 'maça', 'mamao']
alert(lista)

var lista2 = ['laranja', 'maça', 'mamao', 1234]
alert(lista2[0])

for (i in lista2) {
alert(i)
alert(lista2[i])
}

# 15. CONSOLE.LOG:

- exibe uma mensagem colocada como valor no console do navegador.

# 16. FUNÇÕES:

function somax(g, h) {
console.log(g + h)
}
somax(2, 2)

// FUNCÃO COM RETORNO DE DADOS:
function subtracao(d, e) {
return d - e
}
// subtração(5, 3)
var s = subtracao(5, 3)
console.log(s)

// OUTRA FORMA DE RETORNO DE DADOS:

function multiplicacao(a, b) {
return a \* b
}
console.log(multiplicacao(7, 7))

# 17. EVENTOS:

- Interação da página HTML com o javascript

# no html:

<body>
    <!-- CRIAR UM EVENTO DO JAVASCRIPT-->
    <!-- CHAMADA A FUNÇÃO MENSAGEM CRIADA NO JAVASCRIPT-->
    <button onclick="mensagem()">Click aqui</button>
    <button onclick="mensagem2('josé')">Clique aqui</button>
    <button onmouseover="mensagem2('Wilber')">Outro teste de evento</button>
    <button onmouseleave="mensagem3('João')">mais um teste</button>
  </body>

# no javascript:

function mensagem() {
alert('não clique em mim!')
}

function mensagem2(nome) {
alert('não clique em mim! ' + nome)
}

function mensagem3(nome) {
alert('ei, volte aqui! ' + nome)
}

# 18.DOM (Document Object Model):

-É uma interface que apresenta objetos; é uma convenção multiplataforma e independente de linguagem de programação

# no html:

<body>
<!-- UTILIZAÇÃO DO DOM-->
    <span id="mensagem">olá mundo</span>
    <button onclick="mudaCor('blue')">azul</button>
    <button onclick="mudaCor('red')">vermelho</button>
</body>

# no javascript:

function mudaCor(cor) {
var elemento = document.getElementById('mensagem')
elemento.style.color = cor
}

# 19. VALIDAÇÃO DE FORMULÁRIO:

# no html:

<body>
    <form>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="insira o nome aqui"
      />
      <input type="submit" onclick="valida()" />
    </form>
</body>

# no javascript:

function valida() {
var nome = document.getElementById('nome')
if (nome.value == '') {
alert('Campo nome não pode ser estar em branco')
} else {
alert(
'Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso'
)
}
}

# jquery:

# 21. baixa e instalação do jquery:

- aberto o jquery - versão completa e criada uma pasta jquery e o arquivo jquery-3-6-0.js e copiado o código
- criado o arquivo script_jquery.js para criar os códigos do jquery

# 22. Primeiros Passos:

SINTAXE:
$(seletor).ação();

- função que verifica se o documento foi carregado - HTML(BOA PRÁTICA):

- função .ready = verifica se o html foi carregado para depois efetuar a função seguinte:
  $(document).ready(function () {

- função .click = quando houver a ação(clique) no seletor "button" vai executar a função .hide(esconde um seletor:h1 = vai esconder o nome que está no h1).
  $('button').click(function () {
  $('h1').hide()
  })
  })

# 23. Simplificando o jquery:

$(function () {
$('button').click(function () {
$('h1').hide()
})
})

# 24. Alterando o CSS:

- alteração da cor do h1 - usando o método CSS com os dois parâmetros: a propriedade e valor que vai modificar:
  $(document).ready(function () {
  $('button').click(function () {
  $('h1').css('color', 'red')
  })
  })

- alteração da cor do h1 com id:
  / altera o h1 com id="único":
  /_ $(document).ready(function () {
  $('button').click(function () {
  $('#unico').css('color', 'red')
  })
  }) _/
