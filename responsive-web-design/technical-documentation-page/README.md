# Report

## Scrollspy com CSS
Não deu certo porque os elementos section e nav não são irmãos no caso deste projeto, acabei fazendo com JavaScript.
https://github.com/omarov-frontend/CSS-Fake-Scrollspy

## Development Problems

1. Barra de scroll não aperecia mesmo com overflow-y ajustado para auto
- Solução: O container nav não estava com height 100% 

2. Na tag code, o content estava gigante
- Solução: Retirar os espaços no próprio HTML, causado pelo CSS (white-space, word-break ou word-wrap) 

3. O scrollspy implementado com javascript precisa de Debounce ?
- Solução: Não solucionado