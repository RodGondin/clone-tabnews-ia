# AGENTS.md

Instruções para agentes de IA que trabalham neste repositório.

## Sobre o projeto

Repositório do curso [curso.dev](https://curso.dev), com o objetivo de implementar um clone do [TabNews](https://www.tabnews.com.br) usando agentes de IA.

## Stack

- **Next.js** com App Router
- **React**
- JavaScript (sem TypeScript), CSS puro (sem Tailwind ou outras bibliotecas)

As versões das dependências são fixadas exatamente (`npm install --save-exact`), sem `^`.

## Comandos

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento em http://localhost:3000
npm run build   # build de produção
npm run start   # servidor de produção (precisa do build antes)
```

## Convenções

- Manter o código **o mais simples possível**, com o mínimo necessário, seguindo as convenções modernas do Next.js.
- Textos da interface, nomes de variáveis/funções e mensagens de commit em **português (pt-BR)**.
- Usar Server Components por padrão; `"use client"` só onde há interatividade.
- Cores ficam como variáveis CSS em `:root` no `app/globals.css`; reutilize-as em vez de valores fixos.

## Git

- A branch principal é `main`, com remoto em https://github.com/RodGondin/clone-tabnews-ia.
- Mensagens de commit em pt-BR, no imperativo.
