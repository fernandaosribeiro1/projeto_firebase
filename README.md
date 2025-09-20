# Projeto de Autenticação de Usuários com Firebase

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este é um projeto web front-end que implementa um fluxo completo de autenticação de usuários (cadastro, login, logout e proteção de página) utilizando os serviços do Firebase.

---

## ✨ Descrição

A aplicação consiste em três páginas principais: uma para **cadastro** de novos usuários, uma para **login** de usuários existentes e uma página **"home" protegida**, que só pode ser acessada após a autenticação bem-sucedida. O projeto foi desenvolvido com HTML, CSS e JavaScript puros (módulos ES6), conectando-se diretamente aos serviços do Firebase (Authentication e Firestore) no lado do cliente.

---

## 🚀 Funcionalidades

-   ✅ **Cadastro de Usuário:** Criação de novos usuários com nome, e-mail, CPF, telefone e senha.
-   ✅ **Autenticação por E-mail e Senha:** Login seguro para usuários já cadastrados.
-   ✅ **Armazenamento de Dados Adicionais:** As informações do perfil do usuário (além do e-mail/senha) são salvas no banco de dados Firestore.
-   ✅ **Página Protegida:** A `home.html` é uma rota privada que redireciona automaticamente para a página de login caso o usuário não esteja autenticado.
-   ✅ **Logout de Usuário:** Funcionalidade para encerrar a sessão do usuário de forma segura.
-   ✅ **Feedback Visual:** Botões com estados de "carregando" e mensagens de sucesso/erro para melhorar a experiência do usuário.

---

## 🔧 Tecnologias Utilizadas

-   **Front-end:**
    -   HTML5
    -   CSS3
    -   JavaScript (ES6 Modules)
-   **Backend como Serviço (BaaS):**
    -   **Firebase Authentication:** Para gerenciamento de usuários.
    -   **Firebase Firestore:** Para armazenamento de dados no banco NoSQL.

---

## 📁 Estrutura de Pastas

O projeto segue a seguinte estrutura para organização dos arquivos:

```
SEU_PROJETO/
├── css/
│   └── style.css
├── js/
│   ├── cadastro.js
│   └── login.js
├── cadastro.html
├── home.html
├── login.html
└── README.md
```

---

## ⚙️ Como Executar o Projeto

Por ser um projeto com arquivos estáticos, não é necessário um processo de build. Basta servi-lo a partir de um servidor local.

1.  **Servidor Local:** A forma mais fácil é usar uma extensão como o **Live Server** no Visual Studio Code.
2.  **Configuração do Firebase:** Este é o passo mais importante. Para que o projeto funcione, você precisa conectá-lo à sua própria conta do Firebase.

### Configuração do Firebase (Passo a Passo)

1.  **Crie um Projeto:** Vá ao [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.
2.  **Crie um App Web:** Dentro do seu projeto, crie um novo aplicativo Web (ícone `</>`).
3.  **Ative a Autenticação:** No menu à esquerda, vá em **Authentication > Sign-in method** e ative o provedor **"E-mail/senha"**.
4.  **Crie o Firestore:** No menu, vá em **Firestore Database > Criar banco de dados** e inicie em modo de produção.
5.  **Copie suas Chaves:** Nas configurações do seu projeto (⚙️ > Configurações do projeto), encontre o objeto `firebaseConfig` e copie suas credenciais.
6.  **Cole as Chaves no Código:** Você precisa colar suas chaves em **TRÊS** lugares:
    -   No topo do arquivo `js/cadastro.js`
    -   No topo do arquivo `js/login.js`
    -   No bloco `<script>` dentro do arquivo `home.html`
7.  **Atualize as Regras de Segurança:** No **Firestore Database**, vá para a aba **Regras** e substitua o conteúdo pelo seguinte código para permitir que os usuários criem e leiam dados:
    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /usuarios/{docId} {
          allow create: if request.auth != null;
          allow read: if request.auth != null;
          allow update, delete: if request.auth.uid == resource.data.uid;
        }
      }
    }
    ```

---

## 🚨 Principais Aprendizados e Pontos de Atenção

Este projeto foi uma jornada de debugging que revelou vários pontos cruciais no desenvolvimento com Firebase:

-   **Chaves de API (`apiKey`):** A chave de API no objeto `firebaseConfig` é a "senha" da sua aplicação. Se ela estiver errada, com um placeholder ou incompleta, o erro `auth/api-key-not-valid` impedirá qualquer conexão.
-   **Regras de Segurança do Firestore:** O Firestore é seguro por padrão. É **obrigatório** configurar as regras para permitir operações de `create` (no cadastro) e `read` (para carregar dados na home).
-   **Cache do Navegador:** O navegador pode guardar versões antigas dos seus arquivos `.js` ou `.css`. Usar **`Ctrl + Shift + R`** (Hard Refresh) é essencial durante o desenvolvimento para forçar o carregamento das últimas alterações.
-   **Verificação de Autenticação (`onAuthStateChanged`):** Para proteger uma página, a função `onAuthStateChanged` é a forma correta de "escutar" o estado de login em tempo real, evitando loops de redirecionamento.
-   **Caminhos de Arquivo:** Erros `404 Not Found` em arquivos CSS ou JS geralmente indicam um problema na estrutura de pastas ou um erro de digitação no caminho `href` ou `src` no HTML.

---
