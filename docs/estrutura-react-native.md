# Estrutura do aplicativo

O projeto usa uma única entrada `App.js`, separada em telas e componentes pequenos para manter o MVP fácil de entender.

## Telas

- `HomeScreen`: resumo do dia;
- `AbsencesScreen`: controle de faltas por disciplina;
- `RemindersScreen`: criação e conclusão de lembretes;
- `InternshipScreen`: progresso e linha do tempo do estágio.

## Componentes reutilizados

- barra de navegação;
- cartões de resumo;
- barra de progresso;
- títulos de seção;
- botões e campos de entrada.

## Estado local

Os dados do MVP ficam em estado local com `useState`. Assim, a primeira versão já permite interagir com as funções principais sem depender de banco de dados ou API.
