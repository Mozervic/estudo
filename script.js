/*/início do scrip apagando tudo que não for usar no momento/*/
    /*/document.querySelector("#telaUber").style.display = "none";/*/
    document.querySelector("#telaEscolha").style.display = "none";
    document.querySelector("#telaContaPalavras").style.display = "none";
    document.querySelector("#telaContaDias").style.display = "none";
    document.querySelector("#selecaoDeTela").style.display = "none";
    
/*/Aqui eu declarei uma variavel segundatela pra poder
usar como boolean no if e definir as condições, até
que funfou/*/
 
    var numeracaoTela = 1;

    function trocartela(){
    

    if(numeracaoTela==1)
    {
       numeracaoTela = 2;
        document.querySelector("#infadicionais").style.display = "none";     
        document.querySelector("#telaEscolha").style.display = "block";
        document.querySelector("#selecaoDeTela").style.display = "block";
        document.querySelector("#trocadordetela").value = "Voltar...";
        document.querySelector("#escolhedores").style.display = "block";        

    }

    else if(numeracaoTela==2)
    {
        numeracaoTela = 1;
        document.querySelector("#infadicionais").style.display = "block";
        document.querySelector("#telaEscolha").style.display = "none";
        document.querySelector("#selecaoDeTela").style.display = "none";
        document.querySelector("#trocadordetela").value = "Ver Mais";
        document.querySelector("#escolhedores").style.display = "none";
    }
    
    else if(numeracaoTela==3)
    {
        document.querySelector("#telaEscolha").style.display = "block";
        document.querySelector("#selecaoDeTela").style.display = "block";
        /*/document.querySelector("#trocadordetela").style.display = "none";/*/
        document.querySelector("#escolhedores").style.display = "block";
        document.querySelector("#telaContaPalavras").style.display = "none";
        document.querySelector("#telaContaDias").style.display = "none";
        numeracaoTela = 2;
      
      
    }
     
      var contarTelas = 0;
      
      //Aqui termina o nhenhenhe da mudança de tela//



}

function selecionouTela(){
  numeracaoTela = 3;
  document.querySelector("#selecaoDeTela").style.display = "none";
  var rd1 = document.getElementById("botaoPalavras")
  var rd2 = document.getElementById("botaoDias")
  var rd3 = document.getElementById("botaoUBER")
  
  if(rd1.checked == true)
    {
      console.log("contador de palavras selecionado")
      document.querySelector("#telaContaPalavras").style.display = "block";
      document.querySelector("#telaContaDias").style.display = "none";
      document.querySelector("#escolhedores").style.display = "none";             /*/document.querySelector("#telaUBER").style.display = "none";/*/
      
      
      
    }
  
  else if(rd2.checked == true)
    {
      
      console.log("contador de dias de vida selecionado")
      document.querySelector("#telaContaPalavras").style.display = "none";
      document.querySelector("#telaContaDias").style.display = "block";
      document.querySelector("#escolhedores").style.display = "none";             /*/document.querySelector("#telaUBER").style.display = "none";/*/
      
      
    }
  
  else if(rd3.checked == true)
    {
      
      console.log("Aplicativo gratuidade UBER")
      document.querySelector("#telaContaPalavras").style.display = "none";
      document.querySelector("#telaContaDias").style.display = "none";
      document.querySelector("#escolhedores").style.display = "none";                         /*/document.querySelector("#telaUber").style.display = "block";/*/
      
      
    }
  
}


//declarei um array para usar no for e contabilizar as ocorrências das repetições na mesma sentença
forocorrencias = {};

function contarpalavras(){
    //aqui eu estou desenvolvendo um contador que contabiliza quantas vezes cada palavra foi usada no texto
   
    var txtrecebido = document.querySelector("#txtbox");
    var txtarmazenado = txtrecebido.value;
    var paragrafo1 = document.querySelector("#textoinformado");
    paragrafo1.innerText = "Seu texto é: "+ txtarmazenado;
    var txtsplit = txtarmazenado.split(" ");   
    txtarmazenado = txtarmazenado.toLowerCase();
    document.querySelector("#txtbox").value =""; 

    for(var contador = 0, cumprimento = txtsplit.length; contador < cumprimento; contador++)
    {
    forocorrencias[txtsplit[contador]] = (forocorrencias[txtsplit[contador]]||0)+1;
    }
    const resultado = JSON.stringify(forocorrencias);
    var paragrafo2 = document.querySelector("#palavrasdivididas");
    paragrafo2.innerText = "Confira aqui as repetções, se houver: " + resultado;


}

/*/função do contador de dias de vida/*/

  function contouDias(){
    
    var suaidade = prompt("Informe a sua idade em anos");
    
    if(!isNaN(suaidade)){
      
      alert("Você já viveu aproximadamente: "+suaidade*365+" dias de vida!");
      
      
    }
    
  }