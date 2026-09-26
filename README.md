# Despertar da Consciência Financeira

Plataforma educativa para explorar conceitos de educação financeira por meio de conteúdos organizados e atividades interativas.

**[Acessar o projeto](https://despertar-a-consciencia-financeira.vercel.app/)**

## Sobre

O Despertar da Consciência Financeira é um projeto desenvolvido como atividade extensionista do curso de Análise e Desenvolvimento de Sistemas. A proposta é utilizar a tecnologia para facilitar o acesso a conteúdos introdutórios sobre educação financeira, com uma experiência de navegação simples e acessível.

## Funcionalidades

* **Módulos educativos:** conteúdos organizados sobre conceitos e temas de educação financeira.
* **Quiz interativo:** atividade para testar conhecimentos, com três níveis de dificuldade.
* **Experiência responsiva:** interface adaptada para diferentes tamanhos de tela.
* **Formulário de contato:** espaço para enviar mensagens diretamente pelo site.

## Tecnologias

* **Nuxt 4** — framework da aplicação.
* **Vue 3** — construção da interface.
* **TypeScript** — tipagem do código.
* **Nuxt Server API** — endpoints do backend.
* **Resend** — envio de e-mails.
* **GitHub Actions** — automação das verificações de integração contínua.
* **Commitlint** — validação das mensagens de commit.
* **Semgrep** — análise estática de segurança (SAST).
* **OWASP ZAP** — análise dinâmica de segurança (DAST).

## Arquitetura

A aplicação adota uma **arquitetura monolítica modular**, utilizando o Nuxt como framework full-stack. A interface e o backend são desenvolvidos e implantados em uma única aplicação, com responsabilidades organizadas em módulos. O frontend concentra as páginas, componentes e estilos, enquanto o backend utiliza as rotas de API do Nuxt para processar requisições e integrar serviços externos. Os dados do quiz ficam separados da lógica dos endpoints, organizados por nível de dificuldade, facilitando a manutenção e a evolução do projeto.


```text
app/
├── pages/
├── components/
└── assets/
    └── styles/

server/
├── api/
│   ├── contato.post.ts
│   └── quiz/
│       └── perguntas.get.ts
└── data/
    └── quiz/
        ├── easy.ts
        ├── medium.ts
        ├── hard.ts
        └── index.ts

public/
└── images/
```

### Interface

As páginas são construídas com Vue e organizadas pelo sistema de rotas do Nuxt. Os componentes reutilizáveis concentram elementos compartilhados, enquanto os estilos ficam organizados entre arquivos globais e específicos.

### Backend

O backend utiliza as rotas de servidor do Nuxt para processar as requisições da aplicação.

* `POST /api/contato`: recebe os dados do formulário e solicita o envio da mensagem.
* `GET /api/quiz/perguntas?nivel=facil`: retorna perguntas conforme o nível selecionado.

### Quiz

As perguntas ficam organizadas em arquivos separados por dificuldade. A API disponibiliza as questões do nível solicitado para a interface do quiz.

### Contato

O formulário envia os dados para uma API interna, que utiliza o Resend para encaminhar a mensagem por e-mail. A chave de acesso é mantida nas variáveis de ambiente do servidor.

## Integração contínua e segurança

O projeto possui um pipeline de CI configurado com GitHub Actions para automatizar verificações.

1. **Commitlint:** valida as mensagens de commit.
2. **Build:** verifica a compilação da aplicação.
3. **SAST — Semgrep:** analisa o código em busca de possíveis problemas de segurança.
4. **DAST — OWASP ZAP:** testa a aplicação em execução para identificar possíveis problemas.

## Executar localmente

**Requisitos:** Node.js e npm.

Clone o repositório:

```bash
git clone https://github.com/miqueias-eduardo/Despertar-a-consciencia-financeira.git
cd Despertar-a-consciencia-financeira
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e configure a chave do Resend:

```env
NUXT_RESEND_API_KEY=sua_chave
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

## Deploy

O projeto está publicado na Vercel:

**https://despertar-a-consciencia-financeira.vercel.app/**

## Autor

**Miqueias Eduardo**

[GitHub](https://github.com/miqueias-eduardo)
