# DESAFIO - Banco Imobiliário

Esse projeto contém o código fonte da desafio banco imobiliário

## Pré-requisitos

Para começar a trabalhar no projeto você vai precisar dos programas abaixo instalados em sua máquina:

- [GIT](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

Para configurar o projeto em sua máquina, siga o passo a passo abaixo:

## Clonando o projeto

- Clone o projeto usando o git, via SSH ou HTTPS, clicando no botão **Clone**, na página do GIT do projeto ou usando os comandos abaixo:

Clone via SSH:

```
git clone git@github.com:asolivs/desafio-imobiliario.git
```

Clone via HTTPS:

```
git clone https://github.com/asolivs/desafio-imobiliario.git
```

## Instalando as dependências

Para instalar as dependências , acesse a pasta onde o projeto foi clonado e em seguida execute o comando abaixo:

```
npm install
```

## Executando o projeto

O projeto pode ser executado usando Docker ou NPM.
Para execução do projeto usando Docker, execute o comando abaixo. Com isso o container será criado e executando o projeto logo em seguida.

```bash
 npm run start:dev
```

```bash
docker-compose up 
```

## Visualizando o projeto

Por padrão, o projeto pode ser acessado através da URL abaixo, caso esteja sendo executado com NPM:

POST - [http://localhost:3000/api](http://localhost:3000/api)

Caso o projeto esteja sendo executado usando Docker, por padrão poderá ser acessado através do endereço:

POST - [http://localhost:9799/api](http://localhost:9799/api)

## PLUS => Disponibilizando o projeto na web

Para disponibilizar o projeto na web e testar, utilize o [Ngrok](https://ngrok.com/download).
Abra o ngrok e digite o comando abaixo.

Levando em conta que o projeto está rodando na porta 3000 e você está no diretório onde está o executável do Ngrok:

```bash
ngrok.exe http 3000
```

Após executar, será exibida uma tela com os parâmetros da sessão iniciada. Copie a URL do último parâmetro **_Forwarding_**. Essa será a URL com protocolo HTTPS e finalizará com ngrok.io.

Exemplo:

```
https://1a47-181-191-170-225.ngrok.io
```
