# Deep_English
Software como Serviço. Node.js e MongoDB

06/09 (v.1.0) CONSTRUIR PÁGINAS DO HTML 

Criei:
Index.html, Class e Events

	Construir a Home e Header;
		DoD (Definition of Done): Concluída

07/09 (v.1.1)

	Construir a página do Do e Does;
		DoD (Definition of Done): Concluída

08/09 (v.1.2)

	Construir a página do Verbo To Be;
		DoD (Definition of Done): Concluída

11/09 (v.1.3)

	Construir a página do Verbo To Have;
		DoD (Definition of Done): Concluída

12/09 (v.1.4)

	Construir a página dos Pronomes;
		DoD (Definition of Done): Concluída
 
		Concluido

-------------------------------------------

14/09 (v.2.1) CONSTRUIR PÁGINAS DO FORUM
	Construir a página do Forum;

		15/09 (v.2.1.2)- Construir a estrutura HTML;
			DoD (Definition of Done): Concluída

		16/09 (v.2.1.3)- Construir o JQuery;
		Comentários e Respostas abrir e ocultar;
		Concluido
		16/09 (v.2.1.4)- Limpar campos e postagens / Aula 3
			DoD (Definition of Done): Concluída

		17/09 (v.2.1.5)- Construir Nova Postagem;
		Quando clicar no botão nova postagem, pegará o trecho de código HTML de postagem e exibirá abaixo do H2 Postagens. Usando JS.

		28/09 (v.2.1.6)- Aguardar a aula do dia 30/09 sobre MySQL com Node.JS. Para armazenar os cards de postagem criadas com MySQL.

		30/09 (v.2.1.7)- Aguardar a aula do dia 07/10 sobre MySQL com Node.JS.

		07/10 (v.2.1.8)- Aguardando código de ferramenta HTML.

	  10/10 (v.2.1.9)- Criei o banco de dados forumdb;
	   	DoD (Definition of Done): Concluída

	  10/10 (v.2.1.10)- Conectei o Banco de dados com arquivo db.js; 
	  Coloquei na pasta 'models';
	  Gravando como módulo de conexão;
	  Definindo sequelize com S maiúsculo e s minúsculo.
	  OBS: Para funcionar corretamente instale módulo npm install msql2;
	   	DoD (Definition of Done): Concluída

	  10/10 (v.2.1.11)- Criei o modulo Postagem;
	  Salvei na pasta models;
	  Esse módulo cria uma tabela 'postagens' no 'forumdb';
      DoD (Definition of Done): Concluída

	  12/10 (v.2.1.12)- Criei a pasta views, dentro uma pasta layouts com arquivo  formulario.handlebars e main.handlebars;
	  OBS: Instalei o módulo express e express-handlebars. Lembrando que o main é o template padrão onde imprimimos {{{body}}}.
	  	DoD (Definition of Done): Concluída 

		25/10 (v.2.1.13)- Criei a exibição da postagem com os dados do BD;
		Foi adicionado os objetos na página home.handlebars para exibição;
			DoD (Definition of Done): Concluída

-------------------------------------------

PRODUCT INCREMENT

		OBS: Refatorar o código da postagem de MySQL para MongoDB. Devido a falhas com atualizações do MySQL no SO.

		01/11 (v.2.2)
		Instalei MongoDB
		Instalei os módulos express, express-handlebars, body-parser e mongoose;

		01/11 (v.2.2.1) 
		Criei um módulo 'Postagem.js' na pasta 'models'
		Carreguei os módulos mongoose e Schema para o MongoDB;
		Defini os atributos nome, conteudo e data na collection postagens;
		Esse módulo cria uma collection 'postagens' no MongoDB.
			DoD (Definition of Done): Concluída

		02/11 (v.2.2.2)
===>		Parei na aula 47  5:44
			Tentei exibir a postagem na Publicação e não consegui. As variáveis nomePost, conteudoPost, dataPost não estão exibindo, embora estejam cadastradas no BD. 
			Outro erro é com o redirect para a rota admin/postagens/nova para admin/postagens.
			Exibição da postagem está solucionado e redirect funcionando corretamente.
				DoD (Definition of Done): Concluída
		
-------------------------------------------

06/11 (v.3.1)- CONSTRUIR PÁGINAS DE LOGIN

		07/11 (v.3.1.2)- Criei um arquivo 'Usuario.js' na pasta models;
		Defini os módulos e as configurações;
		Criei um arquivo "usuarios.js" na pasta routes para fazer as rotas;
		Criei dentro do diretório 'views', criei uma pasta "usuários" e dentro criei um arquivo 'registro.handlebars'. Em registro está o formulário de cadastro de conta de usuários;
			DoD (Definition of Done): Concluída

		09/11 (v.3.1.3)
		Validação de formulário de cadastro
		dentro do arquivo "usuarios" das rotas, criei a rota "router.post", criando as condições de validação dos campos do formulário.
			DoD (Definition of Done): Concluída

		10/11 (v.3.1.4)
		Cadastrando o usuário no Banco de Dados.
		Instalando o módulo de hash para a segurança com senhas "bcryptjs". 
====>		As mensagens 'error_msg' e 'success_msg não estão sendo exibidas devido ao alert ser um bootstrap.js. 
		Parei na aula #56

		20/11 (v.3.1.5)
		Autenticação com o módulo 'Passport'.
		Instalei o módulo passport e a estratégia passport-local.
===>		Minha rota de login não está carregando.
		Rota de Login carregando corretamente.
			DoD (Definition of Done): Concluída

		25/11 (v.3.1.6) 
		Validação de Login
		Foi criada a validação de Login comparando email não existente e senha incorreta.
		A Validação está na pasta "Config" no arquivo 'auth.js'.
		Foi colocado em login.handlebars {{if}} {{/if}} para exibição das variáveis de error.
		Foi criado um Middleware no arquivo 'appIngles' da declaração de mensagens de erro "error".
			DoD (Definition of Done): Concluída

		26/11 (v.3.1.7)
		Controle de Acesso
		Foi criado uma variável em Middleware no arquivo 'appIngles' para 'user'.
		Foi criado uma pasta "helpers" para armazenar pequenas funções de ajuda.
		Dentro da pasta "helpers" foi criado um arquivo 'eAdmin.js'.
		Foi criado um logout na rota 'usuarios.js'
			DoD (Definition of Done): Concluída

		Começar a aula #62.

Implementações para Futuro

- Exibir nome do usuário no menu Login;
- Exibir as mensagens de erros;
- Cria serviço de Comentários nos cards das postagens;
- Tornar o site totalmente responsivo;
- Conectar as aulas no menu Class;

REFERÊNCIAS

Documentação Módulo Express
< https://expressjs.com/pt-br/api.html >

Body-Parser
< http://expressjs.com/en/resources/middleware/body-parser.html >

Handlebars
< https://handlebarsjs.com >

Mongoose
< https://mongoosejs.com >

Connect-Flash
< https://www.npmjs.com/package/connect-flash >

Passport
< http://www.passportjs.org >

SCRUM
< https://mindmaster.com.br/scrum/ >

Curso de Node.js - Victor Lima - Guia do Programador - Playlist
< https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B >

Aprenda Tudo Sobre Handlebars
< https://github.com/diegovalemoreno/Mongodb/blob/master/handlebars/001-aprenda-tudo-sobre-handlebars.md >
