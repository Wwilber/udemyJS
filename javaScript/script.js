/*
// exemplo de mensagem atribuída a função alert:
alert('olá mundo!')

// exemplo de mensagem atribuída a variável que é chamada pela função alert:
var mensagem = 'olá mundo-2'
alert(mensagem)

var a = 2
var b = 3

// operação matematica
// Adição:
var soma = a + b
alert(soma)

// subtração:
var sub = a - b
alert(sub)

// multiplicacao:
var mult = a * b
alert(mult)

// divisao:
var div = a / b
alert(div)

// resto da divisao:
var rest = b % a
alert(rest)

// ESTRUTURA CONDICIONAL: COMANDO IF E COMANDO IF ELSE
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

// ESTRUTURA DE REPETIÇÃO WHILE:
var i = 0
while (i < 3) {
  alert(i)
  i = i + 1
}

// ESTRUTURA DE REPETIÇÃO FOR:
var x
for (x = 1; x < 10; x++) {
  alert(soma)
  soma = soma + x
}

// ARRAY:

var lista = ['laranja', 'maça', 'mamao']
alert(lista)

var lista2 = ['laranja', 'maça', 'mamao', 1234]
alert(lista2[0])

for (i in lista2) {
  alert(i)
  alert(lista2[i])
}

// FUNÇÕES:
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
  return a * b
}
console.log(multiplicacao(7, 7))
*/
// EVENTO DO JAVASCRIPT:
function mensagem() {
  alert('não clique em mim!')
}

function mensagem2(nome) {
  alert('não clique em mim! ' + nome)
}

function mensagem3(nome) {
  alert('ei, volte aqui! ' + nome)
}

function mudaCor(cor) {
  var elemento = document.getElementById('mensagem')
  elemento.style.color = cor
}

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
