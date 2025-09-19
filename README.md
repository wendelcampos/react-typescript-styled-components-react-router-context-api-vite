# 🚀 Ignite Timer

Um aplicativo de timer baseado na técnica Pomodoro, desenvolvido durante o curso Ignite da Rocketseat. Este projeto implementa um sistema completo de gerenciamento de ciclos de trabalho com interface moderna e funcionalidades avançadas.

![Timer Preview](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)

## 📋 Sobre o Projeto

O Ignite Timer é uma aplicação web que permite aos usuários gerenciar seus ciclos de trabalho utilizando a técnica Pomodoro. A aplicação oferece uma interface intuitiva para criar, controlar e acompanhar ciclos de trabalho, com persistência de dados no localStorage.

### 🎯 Principais Características

- ⏱️ **Timer Pomodoro**: Ciclos de trabalho configuráveis entre 5 e 60 minutos
- 📝 **Gerenciamento de Tarefas**: Criação e acompanhamento de tarefas específicas
- 📊 **Histórico Completo**: Visualização de todos os ciclos realizados
- 💾 **Persistência de Dados**: Salvamento automático no localStorage
- 🎨 **Interface Moderna**: Design responsivo com tema personalizável
- ⚡ **Performance Otimizada**: Desenvolvido com Vite para máxima velocidade

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para construção de interfaces
- **TypeScript 5.6.2** - Tipagem estática para JavaScript
- **Vite 6.0.1** - Build tool moderna e rápida
- **React Router DOM 7.0.2** - Roteamento de páginas
- **Styled Components 6.1.13** - CSS-in-JS para estilização

### Gerenciamento de Estado
- **Context API** - Gerenciamento de estado global
- **useReducer** - Gerenciamento de estado complexo
- **Immer 10.1.1** - Imutabilidade de estado simplificada

### Formulários e Validação
- **React Hook Form 7.54.1** - Gerenciamento de formulários
- **Zod 3.24.1** - Validação de schemas
- **Hookform Resolvers 3.9.1** - Integração entre React Hook Form e Zod

### Utilitários
- **date-fns 4.1.0** - Manipulação de datas
- **Phosphor React 1.4.1** - Ícones modernos

### Desenvolvimento
- **ESLint** - Linting de código
- **TypeScript ESLint** - Linting específico para TypeScript
- **Rocketseat ESLint Config** - Configuração de linting da Rocketseat

## 🚀 Funcionalidades

### ✅ Implementadas
- [x] Criação de novos ciclos de trabalho
- [x] Timer com contagem regressiva visual
- [x] Interrupção de ciclos em andamento
- [x] Finalização automática de ciclos
- [x] Histórico completo de ciclos
- [x] Persistência de dados no localStorage
- [x] Validação de formulários
- [x] Interface responsiva
- [x] Navegação entre páginas
- [x] Tema personalizável

### 🔄 Estados dos Ciclos
- **Em Andamento**: Ciclo ativo sendo executado
- **Concluído**: Ciclo finalizado com sucesso
- **Interrompido**: Ciclo interrompido pelo usuário

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Header/         # Cabeçalho da aplicação
├── contexts/           # Contextos do React
│   └── CyclesContext.tsx # Contexto dos ciclos
├── layouts/            # Layouts da aplicação
│   └── DefaultLayout/  # Layout padrão
├── pages/              # Páginas da aplicação
│   ├── Home/           # Página principal com timer
│   └── History/        # Página de histórico
├── reducers/           # Reducers para gerenciamento de estado
│   └── cycles/         # Reducer dos ciclos
├── styles/             # Estilos globais e temas
│   └── themes/         # Configurações de tema
└── @types/             # Definições de tipos TypeScript
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ignite-timer.git
   cd ignite-timer
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador em `http://localhost:5173`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Cria build de produção

# Linting
npm run lint         # Executa o ESLint

# Preview
npm run preview      # Visualiza o build de produção
```

## 🎨 Interface

### Página Principal (Home)
- Formulário para criação de novos ciclos
- Timer visual com contagem regressiva
- Botões de controle (Iniciar/Interromper)
- Validação em tempo real dos campos

### Página de Histórico
- Tabela com todos os ciclos realizados
- Informações detalhadas de cada ciclo
- Status visual dos ciclos (Concluído/Interrompido/Em andamento)
- Formatação de datas em português

## 🔧 Configurações

### Validação de Formulários
- **Tarefa**: Campo obrigatório
- **Duração**: Entre 5 e 60 minutos

### Persistência de Dados
- Dados salvos automaticamente no localStorage
- Chave de armazenamento: `@timer: cycles-state-1.0.0`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

Projeto desenvolvido durante o curso **Ignite** da [Rocketseat](https://rocketseat.com.br/).

---

⭐ Se este projeto te ajudou, considere dar uma estrela!