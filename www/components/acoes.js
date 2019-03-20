// This is a JavaScript file

/*$(document).on('click', '#btn7', function(){
    var valor;
    valor = $("#display").val();
    $("#display").val("7");
});
*/

var op;
var valor1;

//inserindo valor no display
$(document).on('click', '.botao', function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
});

//ações dos calculos
//somar
$(document).on('click', '#btnSomar', function(){
  valor1 = $("#display").val();
  op = "somar";
  $("#display").val("");
});

//divisão
$(document).on('click', '#btnDividir', function(){
  valor1 = $("#display").val();
  op = "dividir";
  $("#display").val("");
});

//subtração
$(document).on('click', '#btnSubtrair', function(){
  valor1 = $("#display").val();
  op = "subtrair";
  $("#display").val("");
});

//multiplicação
$(document).on('click', '#btnMultiplicar', function(){
  valor1 = $("#display").val();
  op = "multiplicar";
  $("#display").val("");
});



