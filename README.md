<h1 align="center">
  💻 Projeto Vitrine
</h1>

<br>
  <p align="center" style="margin: 5px;">
    <img alt="print1" src="./src/assets/print.png" height="600px">    
  </p>

<br>

## 📛 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ReactJS
- Redux
- Styled Components
- Java EE
- Java Spring Boot
- JPA
- MySql
- Glassfish
- Tomcat
- Amazon Cloud

## 🧠 Projeto

Vitrine, a inteção é ser realmente uma vitrine, aonde um prestador de serviços ou empresario (lojista) possa compartilhar "deixar à mostra" seu produto ou serviço

<br>

## 📜 Documentação API

<br>
  <p align="center">
  Base url: http://3.17.4.232:8080/api-vitrine/api
</p>
<br>

## GET - Lista todos os usuários

     /usuario

     return BODY:

     [
       {
             "id": int,
         }
     ]

<br>

## POST - Salvar um usuario

     /evento/salvar


     return BODY:

     [
       {
             "id": int,
         }
     ]

<br>

## POST - Apagar um usuário

     /usuario/apagar

     id: ID

     return HEADER:

      header.mensagem = Apagado com sucesso! || Error ao apagar!
      header.result = true || false
 
 <br>
 <br>
