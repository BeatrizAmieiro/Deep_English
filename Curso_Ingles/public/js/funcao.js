$(function() {
	$(".abre_post").click(function(){
		$(this).siblings("#postagem").toggle("slow");
	});

	$(".abre_coment").click(function(){
		$(this).siblings("#comentario").toggle("slow");
	});

// LIMPA CAMPOS

$("input:text, input:password, textarea").focus(function() {
		if($(this).val() == $(this) [0].defaultValue){
				$(this).removeClass("campo");
				$(this).val('');
		}
	}).blur(function() {
		if($(this).val() == "" || $(this).val() == " ") {
			$(this).val($(this) [0].defaultValue);
			$(this).addClass("campo");
		}
	});
});


/*

function add_Postagem() {
	const postar = '<div class="postagem">' + '	<h3><b>Nome</b></h3>' + '		<p>Postagem...</p>' + '		<span class="abre_coment">Respostas</span>' + '		<div id="comentario">' + '			<div class="comentario">' + '				<h3><b>Nome</b></h3>' + '			</div>' + '				<p>Comentário...</p>' + '			<form action="" method="post" name="form_coment" id="form_coment">' + '					<input type="text" name="nome_comentario" value="Digite seu nome" class="campo" />' + '					<input type="text" name="nome_comentario" value="Digite seu nome" class="campo" />' + '					<input type="submit" name="botao" style="display: none" />' + '				</form>' +
		"			</div>' + '		</div>';

		publico.innerHTML = postar; 
}
*/

/*
----------------------------------------------------------------------
function printDiv(divID) {
        //pega o Html da DIV
        var divElements = document.getElementById(divID).innerHTML;
        //pega o HTML de toda tag Body
        var oldPage = document.body.innerHTML;

        //Alterna o body 
        document.body.innerHTML = 
          "<html><head><title></title></head><body>" + 
          divElements + "</body>";

        //Imprime o body atual
        window.print();

        //Retorna o conteudo original da página. 
        document.body.innerHTML = oldPage;

    }
--------------------------------------------------------
*/