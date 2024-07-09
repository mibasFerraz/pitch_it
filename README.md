# Repositório de documentação do Pitch It!

Aqui está toda a documentação realizada do projeto Pitch It! ao longo da disciplina de EPS 2024-1 com o professor Dr. Ricardo Matos Chaim.

## Equipe
| Nome | Github | email |
|------|--------|-------|
| Lucas Lima Ferraz | mibasFerraz | lucasllff@gmail.com |

## Localhost 
Para rodar localmente o repositório de documentos, utilizar o comando `python3 -m http.server`

Para rodar localmente o repositório de front-end, utilizar o comando `npm run dev` ou utilizando o docker `sudo docker compose build` e depois `sudo docker-compose up` após realizar o clone do repositório https://github.com/mibasFerraz/pitch_it/

Para rodar localmente o repositório do back-end, utilizar o comando `docker-compose up --build` após realizar o clone do repositório https://gitlab.com/fga-eps/agenday/-/tree/

## Back-End
O gerador de pitch e o chatbot deixei atrelado diretamente ao front para facilitar modificações futuras (é necessário criar uma conta no ChatGPT e gerar um token para utilização). 

Após rodar o back-end do CRUD de usuários, acessar o link 'http://localhost:8081/swagger-ui/index.html' e lá há 3 API's disponíveis, das quais tem uma para criar usuário, outra para realizar o login e uma terceira para retornar o token jwt.

## Front-End
O front da aplicação foi deixado de maneira bem "dummy" pra só rodar o front e entender como tudo está funcionando de forma prática, sem precisar rodar o docker para subir o back-end da aplicação.


## Qualidade
Para rodar os testes basta usar o comando `npm test`. Foram atrelados ao SonarCloud, e por o front ser criado com vite, tem que realizar uma configuração extra para o SonarCloud pegar a cobertura de teste.

![image](https://github.com/mibasFerraz/pitch_it_docs/assets/50213258/810765c8-c8c2-4f85-927f-2d4fe899c8b1)
