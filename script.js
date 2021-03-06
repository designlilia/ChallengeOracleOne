var inputDeTexto = document.querySelector("#input-texto");
var btCriptografar = document.querySelector("#btn-cripto");
var btDescriptografar = document.querySelector("#btn-descripto");
var btCopiar = document.querySelector("#btn-copy");
var resultado = document.querySelector ("#msg");


var texto = inputDeTexto.value;

function criptografar(texto){
texto = inputDeTexto.value;
resultadoCripto = texto.replace(/e/gi,"enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
resultado.value = resultadoCripto;

}

btCriptografar.addEventListener("click", function(event){
	event.preventDefault();
	criptografar();
	return inputDeTexto.value = "";
});

function descriptografar(){
texto = inputDeTexto.value;
ResultadoDescripto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
resultado.value = ResultadoDescripto;

}

btDescriptografar.addEventListener("click", function(event){
	event.preventDefault();
	descriptografar();
	return inputDeTexto.value = "";
});


btCopiar.addEventListener("click", function(){

	event.preventDefault();
	resultado.select();
	document.execCommand("copy");
	alert("o texto foi copiado!");
	return resultado.value = "";

});


/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/