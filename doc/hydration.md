# Hidratação de Entidades

Os registros são persistidos com referências por ID. Ao ler do banco, funções de hidratação montam os objetos completos buscando os dados relacionados em seus respectivos repositórios.

Exemplo: `hydrateContribution` recebe `levelId` e `equipamentId`, consulta `LevelRepository` e `EquipamentRepository` e retorna uma instância de `Contribution` pronta para uso na interface.

Esse processo mantém o banco normalizado e evita duplicação de dados.
