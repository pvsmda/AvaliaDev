<h1 align="center">✨ AvaliaDev ✨</h1>

<a href="https://vimeo.com/1132974581?share=copy&fl=sv&fe=ci" target="_blank">
  <img src="./frontend/public/Screenshot%20From%202025-11-02%2019-01-34.png" alt="Assista ao vídeo">
</a>
<h2 align="center">
Clique na imagem para ver o vídeo
</h2>
<br>
<a href="https://avaliadev-zg6to.sevalla.app/" target="__blank">
  Aplicação na web
</a>
<br>
<br>
✨ Highlights:

- 🧑‍💻 Editor de código com tecnologia VSCode
- 🔐 Autenticação via Clerk
- 🎥 Salas de entrevistas em vídeo individuais
- 🧭 Painel com estatísticas ao vivo
- 🔊 Alternar microfone e câmera, compartilhamento de tela e gravação
- 💬 Mensagens de bate-papo em tempo real
- ⚙️ Execução segura de código em ambiente isolado
- 🎯 Feedback automático — Sucesso / Falha com base em casos de teste
- 🎉 Confete sobre Sucesso + Notificações sobre Falha
- 🧩 Página de Problemas de Prática (modo de codificação solo)
- 🔒 Bloqueio de sala — permite apenas 2 participantes
- 🧠 Trabalhos em segundo plano com Inngest (tarefas assíncronas)
- 🧰 API REST com Node.js e Express
- ⚡ Busca e cache de dados via consulta TanStack
- 🤖 CodeRabbit para análise de RP e otimização de código
- 🧑‍💻 Fluxo de trabalho do Git e GitHub (ramificações, PRs, mesclagens)
- 🚀 Implantação no Sevalla (compatível com nível gratuito)

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
NODE_ENV=development

DB_URL=sua_mongodb_connection_url

INNGEST_EVENT_KEY=sua_inngest_event_key
INNGEST_SIGNING_KEY=sua_inngest_signing_key

STREAM_API_KEY=sua_stream_api_key
STREAM_API_SECRET=sua_stream_api_secret

CLERK_PUBLISHABLE_KEY=sua_clerk_publishable_key
CLERK_SECRET_KEY=sua_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=sua_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=sua_stream_api_key
```

---

## 🔧 Run the Backend

```bash

cd backend
npm install
npm run dev
```

---

## 🔧 Run the Frontend

```bash

cd frontend
npm install
npm run dev
```
