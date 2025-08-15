# Dexie e Persistência

A aplicação utiliza [Dexie.js](https://dexie.org/) como camada de acesso ao IndexedDB.

- A instância do banco está em `src/db/db.ts`.
- Cada store define `++id` para auto incremento das chaves primárias.
- O arquivo `src/seeds/index.ts` popula o banco na primeira execução.

Dexie permite consultas assíncronas e transações, mantendo os dados localmente no navegador.
