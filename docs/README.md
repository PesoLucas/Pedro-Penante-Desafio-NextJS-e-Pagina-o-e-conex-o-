Siga esses Passos e será possível abrir o site localmente

1* Certifique-se de ter instalado o node.js e o git
//
2* Clonar o Repositório git clone https://github.com/PesoLucas/Pedro-Penante-Desafio-NextJS-e-Pagina-o-e-conex-o-.git
//
3* instale as dependencias npm install
//
4* execute o servidor npm run dev
//
5* acesse pelo vscode ou pelo navegador pelo http://localhost:3000/ ou similar
////
API utilizada: DummuJSON //// link: https://dummyjson.com/docs
////
PERGUNTAS TEÓRICAS DE REFLEXÃO
//1* pergunta//
1 Por que a busca inicial dos dados na rota /explorar foi feita em um Server Component em vez de um Client Component?

Resposta: A utilização de server component ao invés dos client component favorece o site fazendo com que ele seja mais recomendado pelos algoritmos dos navegadores, pois dessa forma ele tem um SEO melhor, e também o site fica significativamente mais leve, pois grande parte dos códigos serão carregados pelo servidor exclusivamente, e o navegador carregara o que é preciso que tenha interação do cliente. Portanto o site funciona melhor em ambientes com poucos dados moveis ou baixa memória ram o tornando mais acessível.

//2* pergunta//
2 Se precisarmos adicionar um botão de "Curtir / Favoritar" dentro de cada Card da vitrine, como você estruturaria esse componente mantendo a performance da aplicação?

Resposta: Primeiramente criaria um novo componente para ser esse botão de curtida que utiliza o use state para gerenciar entre o estado de curtidou ou não curtido, quando o usuário clicar no botão ele vai alterar o estado dele, além disso dentro do localstorage deve ter uma chava com uma lista de ids que quando fosse disparado o state do botão ele adicionaria o id do curso que o botão está inserido dentro dessa lista. e Por fim esse componente seria adicionado dentro do CourseCard

//3* pergunta//
3 Em sua implementação, como você usou o useState e useEffect? Como eles impactam as renderizações do sistema?

Resposta: o useState foi utilizado no CourseList para permitir a atualização de cursos e deletar cursos da tela, foi utilizado no SearchAndFilters para controlar o termo que está sendo digitado na barra de pesquisa. É utilizado em CreatePostModal onde controla os campos de escrita da criação do post, controla se o pop up da criação está aberto ou não e controla a menssagem de feedback. Também é utilizado no componente contactsection na landingpage, servindo para controlar os campos de escrita de informações do contato.
O useEffect foi utilizado para trazer os dados do localStorage para o CourseList, além disso é utilizado para sincronizar os dados com programas externos como APIs. O impacto do state na renderização se dá pelo fato do state ativa a re-renderização, que é o ato de renderizar de novo, dos componentes que ele está relacionado, nisso quando um state ativa outros ao invés de renderizar cada mudança individualmente o react agrupa essas mudanças em um grupo e realiza uma única renderização. Já o effect executa uma segunda renderização para carregar os cardes, e utiliza um array vazio para evitar um looping de renderização que acabaria com o crashing do site

//4* pergunta//
4 Quais métodos HTTP foram utilizados e por que o projeto utiliza principalmente o método GET?

Resposta: Os métodos utilizados foram get, post e delete e os motivos do get ser o mais utilizado pois ele é um método seguro e não provoca alterações colaterais dentro do servidor, ele é pode ser armazenado dentro do cache do navegador e por fim tendo em vista que poucas são as operações do site que é preciso realizar um post ou um delete, sendo que a imensa maioria é resgate de informações portanto a get ela é mais utlizada do que as demais.

//5* pergunta//
5 Foram usadas variáveis centralizadas no código? Como você implementou isso?

resposta: sim, foi implementada por meio de 3 formas a primeira foi na transcrição de dados para as categorias, passando as categorias de filtro padrões da api para os nomes que se relacionam com a Metalkingdom, foi utilizado também na estrutura da interface do post que foi exportado de forma global.

//6* pergunta//
6 Como a aplicação se adapta a telas de celular, tablet e desktop? Quais mecanismos você utilizou para isso?

resposta: Ela se adapta Colocando os elementos e componentes que antes eram horizontais na vertical, exceto o header, os cards se adaptam para a melhor distribuição de grid possível, para o espaço mobile, tablet e desktop, o mesmo vale para as categorias e a barra de pesquisa. Essa implementação se da através dos prefixos dos prefíxos no tailwind nas classes, no caso dos cards eles leem a quantidade de coluns na grid, sendo mobile 1, tablet 2 e desktop 3. o formulário no mobile tem apenas 1 coluna o que faz com que fique uma cor em cima e outra em baixo, nos demais ela tem 12 colunas onde a parte vermelha são as 5 primeiras e o cinza é o resto.

//7* pergunta//
7 O filtro é aplicado apenas aos itens da página atual ou a todos os itens disponíveis na API?

Resposta: o filtro é aplicado sobre todos os itens disponiveis, pois isso é feino no Courselist que utiliza a getAllCourses que atingi os dados de todos os cursos