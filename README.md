  <p align="center">
    <a href="https://unform.dev">
      <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/630ced17a99fbd99b6169b52_Logo-NLW-eSports.svg" height="250" width="275" alt="Unform" />
    </a>
  </p>

  
  ## Você ja quis achar algum companheiro para jogar o mesmo jogo que você? 
  O __NLW eSports__ trata-se de uma aplicação que permite com que jogadores criem seus anúncios ou achem seu _duo_ (parceiro) para jogar junto.
  

## Índice
* [Features](#features)
* [Instalação](#instalação)
* [Tecnologias](#tecnologias)
* [Autor](#autor)

### Features

- [x] Criação de anúncios de jogadores
- [x] Listagem de jogadores disponíveis
- [ ] Autenticação do usuário com o Discord

### Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/Leonardo-Oliveira1/nlw-esports-server.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-esports-server

# Instale as dependências
$ npm install

# Crie um arquivo .env na pasta raíz e coloque o seguinte conteúdo dentro dela:
$ DATABASE_URL="file:../src/database/db.sqlite"

# Execute o arquivo .ENV do Prisma
$ npx prisma generate

# Execute a aplicação em modo de desenvolvimento
$ node build/server.js

# O servidor iniciará na porta '3333' - acesse <http://localhost:3333>
# O servidor deverá ficar rodando em segundo plano para que o projeto Web e Mobile consumam os dados do banco.
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Base do [Figma](https://www.figma.com/community/file/1150897317533332617).

- Server
  - [Node.js](https://nodejs.org/en/)
  - [Hoppscotch](https://hoppscotch.io/)
  
- Web
  - [Vite](https://vitejs.dev/)
  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Sass](https://sass-lang.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [PostCss](https://postcss.org/)
  - [Redux](https://redux.js.org/)
  
- Mobile
  - [Expo](https://expo.io/)
  - [React Native](https://reactnative.dev/)
  - [TypeScript](https://www.typescriptlang.org/)


### Autor
---

Feito com ❤️ por Leonardo Oliveira 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Leonardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-oliveira1/)](https://www.linkedin.com/in/leonardo-oliveira1/) 
[![Gmail Badge](https://img.shields.io/badge/-oleonardo78@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:oleonardo78@gmail.com)](mailto:oleonardo78@gmail.com)

<h4 align="center"> 
✔️  NLW eSports Server 💻🚀 Concluído  ✔️
</h4>

