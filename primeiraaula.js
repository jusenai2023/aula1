 /* 1 Registro de idade no console: */
console.log("16 anos");

/* 2 Registrar o número de semanas de programação: */ 
console.log("1 semanas programando");

/* 3) Usando comentários: */
console.log("/*Este é um exemplo de comentário de várias linhas");
/* Nesta parte do código, estamos calculando a média de três números inteiros. */

/*4) Criando variáveis de diferentes tipos:*/
// 1. Número (number)
let id = 30
console.log(id)

// 2. Texto (string)
let no = "Julia"
console.log(no);

// 3. Booleano (boolean)
let am = consoleamanhatemaula = true;
console.log(am);

// 4. Array (array)
let li = listaDeCompras = ["arroz", "feijão", "carne"];
console.log(li);

// 5. Objeto (object)
let pessoa = {
  nome: "Julia",
  idade: 22,
  profissao: "Enfermeira"}
console.log(pessoa);

/*5) Adicionando 3.5 à sua idade:*/
let idade1 = 16

console.log(idade1 + 3.5)
//6) Quantos anos se passaram desde o pouso na lua em 1969:/
// Obtendo a data atual
let dataAtual = new Date();

// Obtendo o ano atual
let anoAtual = dataAtual.getFullYear();

// Ano do pouso na lua
let anoPousoLua = 1969;

// Calculando a diferença de anos
let anosPassados = anoAtual - anoPousoLua;

// Registrando o resultado
console.log("Anos passados desde o pouso na lua em 1969: " + anosPassados);

/* 7) Divisão de números: */
console.log (65 / 240)

/* 8) Multiplicação de números: */
console.log (0.2708 * 100)

/* 9) Concatenação de strings: */
let string1 = 'Hello';
let string2 = 'World';
console.log( string1 + string2);

/* 10) Concatenação de strings com espaço: */
let string3 = 'Hello';
let string4 = 'World';
console.log( string3 + ' ' + string4);

/* 11) Usando a propriedade length: */
let texto = 'Teaching the world how to code';
console.log(texto.length);

/* 12) Usando o método toUpperCase(): */
let texto2 = 'Kaian Novais';
console.log (texto2.toUpperCase())

/* 13) Removendo espaços em branco: */
let textoSemEspacos = '   Professor Kaian Novais   ';
console.log (textoSemEspacos)
console.log(textoSemEspacos.trim ());

/* 14) Gerando um número aleatório: */
let num = Math.random() * 100;
console.log (num)

/* 15) Encontrando o próximo inteiro maior: */
let numDecimal = 43.8;
console.log (Math.ceil(numDecimal))

/* 16) Verificando se um número é um número inteiro: */
let num2 = 2017
console.log (Number.isInteger(num2))
