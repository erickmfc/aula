# Estrutura do aplicativo

O projeto usa o `App.js` como entrada e separa a funcionalidade da aula em pastas simples, mantendo o MVP fácil de entender.

## Telas

- `HomeScreen`: resumo do dia;
- `AbsencesScreen`: controle de faltas por disciplina;
- `RemindersScreen`: criação e conclusão de lembretes;
- `InternshipScreen`: progresso e linha do tempo do estágio.
- `src/screens/CadastroScreen.js`: cadastro de atividades com `TextInput`, `useState` e `FlatList`.

## Componentes reutilizados

- barra de navegação;
- cartões de resumo;
- barra de progresso;
- títulos de seção;
- botões e campos de entrada.
- `src/components/ItemLista.js`: item reutilizável da lista com opção de remover.

## Pastas

- `src/components/`: componentes que podem ser reutilizados;
- `src/screens/`: telas do aplicativo;
- `src/services/`: reservado para futura API ou banco de dados.

## Estado local

Os dados do MVP ficam em estado local com `useState`. Assim, a primeira versão já permite interagir com as funções principais sem depender de banco de dados ou API.
