<div align="center">
  <h1>SportMap</h1>
  <p>Aplicativo de Esportes, desenvolvido com Node.js e Express e React Native.</p>
</div>

<h1 style="margin-top: 20px;">BackEnd</h1>

<p>O backend do <strong>SportMap</strong> fornece a API para o aplicativo, permitindo a comunicação com o banco de dados e a autenticação dos usuários. Ele é construído com <strong>Node.js</strong> e <strong>Express</strong> e utiliza <strong>Sequelize</strong> para interagir com o banco de dados MySQL.</p>

<h3>Funcionalidades</h3>
<ul>
  <li><strong>Autenticação de Usuários:</strong> Registro, login e logout.</li>
  <li><strong>Gerenciamento de Marcadores:</strong> Adição, recuperação e modificação de coordenadas no mapa.</li>
  <li><strong>Favoritos:</strong> Adição e remoção de itens favoritos.</li>
  <li><strong>Histórico de Rotas:</strong> Armazenamento e gerenciamento do histórico de rotas dos usuários.</li>
</ul>

<h3>Tecnologias Utilizadas</h3>
<ul>
  <li><strong>Node.js:</strong> Ambiente de execução para JavaScript no backend.</li>
  <li><strong>Express:</strong> Framework para construção de APIs.</li>
  <li><strong>Sequelize:</strong> ORM para interação com o banco de dados MySQL.</li>
  <li><strong>MySQL:</strong> Sistema de gerenciamento de banco de dados relacional.</li>
  <li><strong>bcrypt:</strong> Biblioteca para criptografia de senhas.</li>
  <li><strong>jsonwebtoken:</strong> Biblioteca para criação e verificação de tokens JWT.</li>
  <li><strong>Cors:</strong> Middleware para habilitar requisições cross-origin.</li>
  <li><strong>body-parser:</strong> Middleware para análise de dados de requisições HTTP.</li>
</ul>

<h3>Estrutura do Projeto</h3>
<ul>
  <li><strong>server/:</strong> Código fonte do backend.
    <ul>
      <li><strong>config/:</strong> Configurações do banco de dados e do projeto.</li>
      <li><strong>migrations/:</strong> Scripts de migração para criação e modificação de tabelas no banco de dados.</li>
      <li><strong>models/:</strong> Modelos Sequelize para o banco de dados.</li>
      <li><strong>routes/:</strong> Definições de rotas da API.</li>
      <li><strong>test/:</strong> Teste de conexão do banco de dados.</li>
      <li><strong>configDB.js:</strong> Configuração do Sequelize.</li>
      <li><strong>server.js:</strong> Ponto de entrada do servidor.</li>
    </ul>
  </li>
</ul>

<h3>Rotas da API</h3>
<p>Aqui está uma visão geral das principais rotas da API:</p>

<h4>Rotas de Autenticação</h4>
<ul>
  <li><strong>POST /criarUser</strong> - Cria um novo usuário.</li>
  <li><strong>POST /emails</strong> - Retorna todos os emails dos usuários cadastrados.</li>
  <li><strong>POST /login</strong> - Realiza o login do usuário e retorna um token JWT.</li>
</ul>

<h4>Rotas de Coordenadas</h4>
<ul>
  <li><strong>GET /marks</strong> - Retorna todas as coordenadas (marcadores) cadastradas.</li>
  <li><strong>POST /mandarCoords</strong> - Adiciona novas coordenadas ao banco de dados.</li>
</ul>

<h4>Rotas de Favoritos</h4>
<ul>
  <li><strong>GET /pegarFavoritos</strong> - Retorna os favoritos de um usuário.</li>
  <li><strong>POST /adicionarFavoritos</strong> - Adiciona um novo favorito para um usuário.</li>
  <li><strong>DELETE /removerFavorito</strong> - Remove um favorito de um usuário.</li>
</ul>

<h4>Rotas de Histórico</h4>
<ul>
  <li><strong>GET /historico</strong> - Retorna o histórico de rotas de um usuário.</li>
  <li><strong>POST /addHistorico</strong> - Adiciona um novo item ao histórico do usuário.</li>
  <li><strong>DELETE /removerHistorico</strong> - Remove um item do histórico do usuário.</li>
</ul>

<h1 style="margin-top: 20px;">FrontEnd</h1>

<p>O frontend do <strong>SportMap</strong> é desenvolvido com <strong>React Native</strong> e utiliza diversas bibliotecas para proporcionar uma experiência de usuário fluida e intuitiva. O aplicativo faz uso da <strong>API do Google</strong> para criar rotas e buscar endereços físicos, e é estilizado com fontes do <strong>expo-google-fonts</strong>.</p>

<h3>Funcionalidades</h3>
<ul>
  <li><strong>Mapas:</strong> Exibição de mapas interativos com marcadores e rotas.</li>
  <li><strong>Autenticação:</strong> Registro, login e gerenciamento de sessões de usuários.</li>
  <li><strong>Favoritos:</strong> Adição e visualização de locais favoritos.</li>
  <li><strong>Histórico de Rotas:</strong> Visualização e gerenciamento do histórico de rotas dos usuários.</li>
</ul>

<h3>Tecnologias Utilizadas</h3>
<ul>
  <li><strong>React Native:</strong> Framework para desenvolvimento de aplicativos móveis.</li>
  <li><strong>React Native Async Storage:</strong> Armazenamento local para gerenciamento de dados persistentes.</li>
  <li><strong>expo-google-fonts:</strong> Biblioteca para incluir fontes do Google Fonts no aplicativo.</li>
  <li><strong>React Navigation:</strong> Biblioteca para gerenciamento de navegação entre telas.</li>
  <li><strong>React Native Maps:</strong> Biblioteca para integração com mapas e visualização de coordenadas.</li>
  <li><strong>Google Maps API:</strong> API para criação de rotas e busca de endereços físicos.</li>
</ul>

<h3>Estrutura do Projeto</h3>
<ul>
  <li><strong>src/:</strong> Código fonte do frontend.
    <ul>
      <li><strong>assets/:</strong> Recursos estáticos como imagens e fontes.</li>
      <li><strong>components/:</strong> Componentes reutilizáveis do aplicativo.</li>
      <li><strong>environments/:</strong> Configurações de ambiente e variáveis.</li>
      <li><strong>routes/:</strong> Definições de navegação entre telas.</li>
      <li><strong>screens/:</strong> Telas e views do aplicativo.</li>
    </ul>
  </li>
</ul>

<h3>Exemplos de Telas</h3>
<ul>
  <li><strong>Tela de Registro:</strong> Permite que novos usuários se registrem no aplicativo.</li>
  <li><strong>Tela de Login:</strong> Permite que usuários existentes façam login.</li>
  <li><strong>Tela de Mapa:</strong> Exibe o mapa interativo com marcadores e rotas.</li>
  <li><strong>Tela de Favoritos:</strong> Mostra os locais favoritos do usuário.</li>
  <li><strong>Tela de Histórico:</strong> Exibe o histórico de rotas do usuário.</li>
</ul>


<h1 style="margin-top: 20px;">Inicialização</h1>
<p>Aqui está o passo a passo para inicializar o aplicativo:</p>

<h3>Passo 1: Clonar o Repositório</h3>
<p>Primeiro, clone o repositório do projeto para sua máquina local:</p>
<pre><code>git clone https://github.com/PedroTatibanoWorkSpace/SportMap.git</code></pre>

<h3>Passo 2: Instalar Dependências</h3>
<p>Instale as dependências do projeto utilizando o npm:</p>
<pre><code>npm install</code></pre>

<h3>Passo 3: Configurar o Backend</h3>
<p>Após instalar as dependências, navegue até o diretório do backend e configure o banco de dados:</p>
<pre><code>cd .\BackEnd\server\</code></pre>
<p>Edite o arquivo <strong>config/config.json</strong> para configurar as credenciais do banco de dados.</p>
<p>Em seguida, crie as tabelas no banco de dados executando:</p>
<pre><code>npx sequelize-cli db:migrate</code></pre>

<h3>Passo 4: Inicializar o Backend</h3>
<p>Inicie o servidor backend:</p>
<pre><code>node server</code></pre>

<h3>Passo 5: Configurar o Frontend</h3>
<p>Abra um novo terminal, navegue até o diretório do frontend e configure os ambientes:</p>
<pre><code>cd .\FrontEnd\</code></pre>
<p>Atualize os arquivos de configuração em <strong>environments/</strong>, substituindo o IP do seu computador ou local de trabalho e a chave da API do Google.</p>

<h3>Passo 6: Inicializar o Frontend</h3>
<p>Emule o aplicativo utilizando o Expo:</p>
<pre><code>npm start</code></pre>

<h1>Prints das Telas</h1>
<p>Aqui estão alguns prints das telas do aplicativo:</p>

<div align="center">
  <div style="display: flex; flex-wrap: wrap; justify-content: center;">
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Tela de Registro</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/print6.png" alt="Tela de Registro" style="width: 20%; max-width: 150px;"/>
    </div>
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Tela de Login</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/Print5.png" alt="Tela de Login" style="width: 20%; max-width: 150px;"/>
    </div>
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Tela de Mapa</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/Print1.png" alt="Tela de Mapa" style="width: 20%; max-width: 150px;"/>
    </div>
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Criando marcação</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/print4.png" alt="Criando marcação" style="width: 20%; max-width: 150px;"/>
    </div>
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Exemplo de seleção de rota</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/Print2.png" alt="Tela de Favoritos" style="width: 20%; max-width: 150px;"/>
    </div>
    <div style="flex: 1 1 45%; padding: 5px;">
      <p><strong>Fazendo a rota até a marcação</strong></p>
      <img src="https://github.com/PedroTatibanoWorkSpace/images/blob/main/print%203.png" alt="Tela de Histórico" style="width: 20%; max-width: 150px;"/>
    </div>
  </div>
</div>

<h3>Este projeto está licenciado sob a Licença MIT - veja o arquivo <strong><a href="https://github.com/PedroTatibanoWorkSpace/SportMap/blob/master/LICENSE" target="_blank">LICENSE</a></strong> para detalhes.</h3>



