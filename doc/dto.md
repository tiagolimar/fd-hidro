# DTOs e Mapeamento

A aplicação utiliza objetos de transferência de dados (DTOs) para persistir informações no IndexedDB.

- Os DTOs residem em `src/dto/`.
- Cada repositório converte entre o DTO plano e a classe de domínio correspondente.
- Essa camada desacopla o formato salvo no banco do modelo de domínio, facilitando evoluções futuras.

