## 👋 Olá! Eu sou Diego R. Pereira

Sou um profissional em formação com foco em **Qualidade de Software** e **Testes Automatizados**. 
Estou constantemente explorando ferramentas modernas de QA, como Cypress, Postman e Git, com projetos práticos que envolvem automação de testes E2E, testes de API REST e uso de CI/CD.
Atualmente participo do curso da EBAC em Engenharia de Qualidade de Software, onde venho desenvolvendo projetos reais com aplicação de boas práticas, versionamento e documentação.


### AutomacaoCypressUI

###### Sobre o Projeto
# 🧪 Testes Automatizados E2E com Cypress

Automatização de cenários de teste de ponta a ponta (E2E) para os fluxos de **cadastro de usuário** e **checkout (carrinho de compras)** utilizando **Cypress com JavaScript**. O projeto segue boas práticas com `PageObjects`, comandos customizados, dados dinâmicos com `Faker.js`, e integração contínua com **GitHub Actions**.

---

## 🚀 Tecnologias Utilizadas

- ✅ [Cypress](https://www.cypress.io/) — Framework de automação de testes E2E
- ✅ [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- ✅ [Faker.js](https://github.com/marak/Faker.js/) — Geração de dados dinâmicos
- ✅ [Mochawesome](https://github.com/adamgruber/mochawesome) — Relatórios customizados
- ✅ [GitHub Actions](https://docs.github.com/en/actions) — Integração e entrega contínua (CI/CD)
- ✅ [Node.js](https://nodejs.org/) — Ambiente de execução JS

---

## 📐 Metodologia

A estrutura do projeto segue boas práticas de automação de testes:

- **Page Object Model (POM)** para separar responsabilidades de elementos e interações.
- **Fixtures** com dados estáticos e mocks reutilizáveis.
- **Faker.js** para garantir variabilidade e independência dos dados.
- **Comandos customizados (`commands.js`)** para reaproveitamento de ações repetitivas.
- **Workflow CI/CD com GitHub Actions** para execução automática dos testes a cada push.
- **Relatórios com Mochawesome** gerados automaticamente na pasta `cypress/results`.

---

## ✅ Resultados Esperados

Ao rodar os testes, os seguintes fluxos são validados:

### 1. Cadastro de Usuário

- Preenchimento do formulário com dados dinâmicos
- Validação de mensagens de sucesso e redirecionamentos
- Cobertura de casos com campos obrigatórios, inválidos e edge cases

### 2. Checkout / Carrinho de Compras

- Adição e remoção de produtos no carrinho
- Preenchimento de dados de pagamento e envio
- Confirmação de pedido com validação de valores

> Todos os resultados de testes são exportados em **formato HTML** via Mochawesome, com screenshots automáticos em caso de falha.

---

## ⚙️ Como Executar


```bash
git clone https://github.com/seuusuario/testes-e2e-cypress.git
cd testes-e2e-cypress
````
Instale as Dependências
```bash
npm install
```
# Abre o Test Runner do Cypress
```bash
npx cypress open
```
# Ou executa em modo headless com geração de relatório
```bash
npx cypress run --reporter mochawesome
````
Visualize os Relatórios
```bash
cypress/results/mochawesome-report/mochawesome.html
```
🔁 Integração Contínua (GitHub Actions)
O projeto possui um workflow configurado em .github/workflows/ci.yml que:

Instala as dependências

Executa os testes Cypress em ambiente headless

Gera relatórios com Mochawesome

Exibe os resultados no histórico do GitHub

O fluxo é executado automaticamente a cada push ou pull request na branch main.

📝 Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.


🙋‍♂️ Contribuição
Sinta-se livre para abrir issues ou pull requests com melhorias, sugestões de novos cenários ou correções. Toda contribuição é bem-vinda!




### Detalhes

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=droxo63&show_icons=true&theme=dark)](https://github.com/anuraghazra/github-readme-stats)


### Linguagens utilizadas

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=droxo63&layout=compact)](https://github.com/anuraghazra/github-readme-stats)


### Contatos

[<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='Linkedin' height='30'>](www.linkedin.com/in/dirpereira)
