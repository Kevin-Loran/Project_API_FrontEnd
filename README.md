# Frontend da API_REST

Esse projeto é o frontend de uma aplicação para gerenciar alunos e usuários, consumindo uma API REST construída com Node.js e Express. Foi desenvolvido como projeto de estudo seguindo um curso de JavaScript e React.

## Sobre o projeto

A ideia é simples: uma interface onde você consegue criar uma conta, fazer login, gerenciar alunos (criar, editar, excluir e adicionar fotos), tudo integrado com uma API rodando na nuvem do Google Cloud.

## Tecnologias utilizadas

* React 17
* Redux com Redux Saga e Redux Persist
* Axios para comunicação com a API
* Styled Components para estilização
* React Router v5 para navegação
* React Toastify para notificações
* Validator para validação de formulários

## Funcionalidades

* Cadastro e login de usuários
* Edição de perfil
* Listagem de alunos
* Cadastro e edição de alunos
* Upload de foto de perfil para cada aluno
* Exclusão de alunos com confirmação
* Logout

## Como rodar localmente

Antes de tudo você precisa ter o Node.js instalado na sua máquina.

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação vai abrir em `http://localhost:3000`. O proxy já está configurado para apontar para a API em produção.

## Deploy

O projeto está hospedado em uma VM do Google Cloud. O nginx serve os arquivos estáticos na porta 8080 e faz proxy das requisições para a API que roda na porta 3001.

http://34.95.208.101:8080


## Estrutura do projeto

```
src/
  components/     Componentes reutilizáveis (Header)
  pages/          Páginas da aplicação
    Login/
    register/
    aluno/        Cadastro e edição de aluno
    alunos/       Listagem de alunos
    Fotos/        Upload de foto
    page404/
  services/       Configuração do axios e history
  store/          Redux (actions, reducers, sagas)
  styles/         Estilos globais
  Routes/         Configuração de rotas
```

## Autor

Kevin Loran
