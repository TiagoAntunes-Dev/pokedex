# 📱 PokeExpo

![React Native](https://img.shields.io/badge/React%20Native-Expo-000020?logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![PokeAPI](https://img.shields.io/badge/API-PokeAPI-EF5350?logo=pokemon&logoColor=white)
![status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

> Um aplicativo móvel estilo Pokédex desenvolvido em React Native e TypeScript, focado no consumo de dados em tempo real e na renderização dinâmica de sprites da PokéAPI.

---

## ✨ Sobre o Projeto

O **PokeExpo** foi criado como parte de estudos práticos de desenvolvimento mobile full-stack e arquitetura de componentes com React Native. O aplicativo consome a **PokéAPI** de forma assíncrona, processando dados paralelos com `Promise.all` para exibir uma lista interativa contendo informações detalhadas e sprites oficiais (frente e verso) de cada Pokémon.

O foco do projeto não é só "puxar dados de uma API" — é lidar com os problemas reais de UI mobile: carregamento assíncrono em lista, tratamento de estado de loading/erro, tipagem estrita de uma resposta de API que você não controla, e roteamento por arquivo com o Expo Router.

## 🎯 Funcionalidades

- 🔍 Listagem de Pokémons consumida diretamente da PokéAPI
- ⚡ Requisições paralelas com `Promise.all` para reduzir tempo de carregamento
- 🖼️ Renderização dinâmica de sprites oficiais (frente e verso)
- 📄 Tela de detalhes com informações de cada Pokémon
- 🧭 Navegação baseada em arquivos via Expo Router
- ✅ Tipagem estrita de ponta a ponta com TypeScript

## 🚀 Tecnologias e Ferramentas Utilizadas

- **React Native** & **Expo** (com Expo Router para roteamento baseado em arquivos)
- **TypeScript** para tipagem estrita e segura de dados
- **PokéAPI** para o consumo de dados REST em tempo real
- **StyleSheet** nativa para estilização e design flexível
- **Git** (branch principal: `develop`)

## 📂 Estrutura do Projeto

```
PokeExpo/
├── app/              # Rotas (Expo Router — roteamento baseado em arquivos)
├── components/       # Componentes reutilizáveis da UI
├── services/         # Camada de consumo da PokéAPI
├── types/            # Tipagens TypeScript dos dados da API
├── assets/           # Ícones, fontes e imagens estáticas
└── app.json          # Configuração do projeto Expo
```

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Expo Go](https://expo.dev/go) instalado no celular (ou um emulador Android/iOS configurado)

### 1. Clonar o repositório

```bash
git clone https://github.com/TiagoAntunes-Dev/PokeExpo.git
```

### 2. Acessar a pasta do projeto

```bash
cd PokeExpo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Rodar o projeto

```bash
npx expo start
```

Depois disso, escaneie o QR Code exibido no terminal com o app **Expo Go** (Android/iOS) ou rode em um emulador pressionando `a` (Android) ou `i` (iOS) direto no terminal.

## 🗺️ Roadmap

- [ ] Tela de busca/filtro por tipo e geração
- [ ] Favoritar Pokémons localmente
- [ ] Tema claro/escuro
- [ ] Testes automatizados dos componentes principais

## 👤 Autor

**Tiago Antunes**

- GitHub: [@TiagoAntunes-Dev](https://github.com/TiagoAntunes-Dev)
- LinkedIn: [Tiago Antunes Paz de Oliveira](https://linkedin.com/in/tiago-antunes-paz-de-oliveira-174687254)

## 📄 Licença

Este projeto está sob a licença MIT.
