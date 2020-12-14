// Aumentar e Diminuir Fontes

function aumentarLetra(){
	 var font = document.getElementById("conteudo").style.fontSize;
	 font = font.replace("pt","");
	 
	 if(font == ""){		 
    	document.getElementById("conteudo").style.fontSize = "13pt";
	 }

	 else{
	  	document.getElementById("conteudo").style.fontSize = (parseInt(font)+1)+"pt";
	 }
}

function diminuirLetra(){
	 var font = document.getElementById("conteudo").style.fontSize;
	 font = font.replace("pt","");
	 
	 if(font == ""){		 
    	document.getElementById("conteudo").style.fontSize = "12pt";
	 }

	 else{
	   document.getElementById("conteudo").style.fontSize = (parseInt(font)-1)+"pt";
	 }
}

//Mudar cores dos elementos

function mudarId(b,a){
  document.getElementById(b).style.backgroundColor=a.value;
}

function mudarClass(b,a){
  var x = document.getElementsByClassName(b);
  for(var i = 0; i<=x.length; i++){
    document.getElementsByClassName(b)[i].style.color=a.value;}
}
