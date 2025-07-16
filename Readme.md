# 📧 email.send

Este é um projeto simples de servidor Node.js que permite o envio de e-mails utilizando o pacote [Nodemailer](https://nodemailer.com/about/), com suporte ao envio via conta Gmail. A API expõe um endpoint `/send` para receber os dados e encaminhar o e-mail.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Estrutura
```bash
email.send/
├── .env
├── package.json
├── server.js
└── README.md
```

## ⚙️ Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/DuasEstrelas1931/email.send.git
cd email.send
```

2. **Instale as depedências:**
```bash
npm install
```
3. **Configure o arquivo .env:**
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
EMAIL_USER=seu.email@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo

```
⚠️ Importante: Para contas do Gmail, você precisa gerar uma senha de aplicativo. Acesse: https://support.google.com/mail/?p=InvalidSecondFactor

▶️ Executar o servidor
```bash
npm start
```
O servidor estará disponível em: http://localhost:3001

📬 Enviar E-mail
Faça uma requisição POST para http://localhost:3001/send com o seguinte corpo JSON:

{
  "to": "destinatario@example.com",
  "subject": "Assunto do E-mail",
  "message": "Conteúdo do e-mail aqui"
}

Exemplo com curl:
```bash
curl -X POST http://localhost:3001/send \
  -H "Content-Type: application/json" \
  -d '{"to":"teste@example.com","subject":"Olá","message":"Este é um teste"}'
```

✅ Resposta Esperada
✅ E-mail enviado com sucesso! – quando tudo der certo.

❌ Falha ao enviar o e-mail. – se ocorrer algum erro.

📝 Licença
Este projeto está sob a licença ISC.

## 👤 Autor

Desenvolvido por **Ricardo Amor Divino**  
- 🔗 GitHub: [github.com/DuasEstrelas1931](https://github.com/DuasEstrelas1931)  
- 🔗 LinkedIn: [linkedin.com/in/ricardo-amor-divino-a562a9125](https://www.linkedin.com/in/ricardo-amor-divino-a562a9125)