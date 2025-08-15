# Páginas e Rotas

As rotas são definidas em `src/routes/index.tsx` usando React Router. Cada entidade possui páginas de listagem (`ListPage`), criação (`CreatePage`) e edição (`EditPage`) localizadas em `src/pages/<Entidade>/`.

O componente `Layout` fornece a estrutura comum de navegação, enquanto cada página utiliza os repositórios para acessar os dados e o componente de tabela genérico para exibir informações.
