# Repositórios

A camada de repositório encapsula o acesso ao IndexedDB. Cada entidade possui um arquivo em `src/repositories/` responsável por operações CRUD.

Os repositórios expõem métodos assíncronos como `create`, `getAll`, `update` e `delete`. Eles recebem e retornam objetos de domínio, convertendo internamente para DTOs usados pelo Dexie.

Esse padrão isola a persistência do restante da aplicação e facilita a substituição futura por outro mecanismo de armazenamento.
