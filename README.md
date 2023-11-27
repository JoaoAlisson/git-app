# Sobre
Esta é uma aplicação client-side, que consulta a API do GitHub e mostra os repositórios mais populares de um determinado usuário.

**Link para demo**: [https://git-app-ochre.vercel.app](https://git-app-ochre.vercel.app)

Foi utilizada a cloud da [https://vercel.com/](Vecel) atual mantenedora do **Nextjs**.

## Stack

- Next v14.0.3 (Atual forma recomendada para criar um projeto React [ver](https://react.dev/learn/start-a-new-react-project))
- React v18.2.38
- React Bootstrap v5.3.2
- Axios v1.6.2

## Instalação

Baixando o projeto:
```bash
git clone https://github.com/JoaoAlisson/git-app.git
```

Renomear o arquivo **env.local** para **.env.local**:
```bash
.env.local
```

Atualizando pacotes com **NPM** (dentro da pasta git-app):
```bash
npm i
```

Atualizando pacotes com **Yarn** (dentro da pasta git-app):
```bash
yarn
```

Buildando com **NPM**:
```bash
npm run build
```

Buildando com **Yarn**:
```bash
yarn build
```

Executando com **NPM**:
```bash
npm run dev
```

Executando com **Yarn**:
```bash
yarn dev
```

A aplicação deve rodar por padrão na porta **3000**:
[http://localhost:3000](http://localhost:3000)


## Testes
Apenas a título de exemplo, implementei o teste do arquivo **api.ts**

Rodando testes com **NPM**:
```bash
npm run test
```

Rodando testes com **Yarn**:
```bash
yarn test
```