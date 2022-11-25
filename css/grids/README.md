# CSS GRID

## GRID

- Bimensional
- Divião de toda a pagina em linhas e colunas
- Colocar elementos onde quiseer nessa divisão


## GRID OU FLEX

- Grid: bidmensional (colunas e linhas)
- Flex: unidimensional (colunas ou linhas)
- Um complementa o tabalho do outro 
- Verificar a conpatibilidade dos navegadores para o **Grid**


---

## PRORIEDADES

separando em `container` e `intem(s)`:

### CCONTAINER

- display: grid;
- grid-template-columns;
- grid-template-rows;
- grid-grap
    - grid-row-grap
    - grid-column-grap
- grid-template-areas;

...e mais 4 propriedades e **alinhamentos**

### ITEM(S)

- gird-column
    - gird-column-start
    - gird-column-end
-grid-row
    - grid-row-start
    - grid-row-end
- grid-area

... e mais 2 propriedades de **alinhamentos**


## GRID ALINHAMENTO

Existem 6 propriedade para alinhamento:
1. `justify-content`
2. `align-content`
3. `justify-items`
4. `justify-self`
5. `align-self`

Vamos separá-los em 2 grupos
1. `justify` e `align`
2.  `content`, `items` e `self`

## Justify e Align

Sabendo que grid e bidimensional, nós temmos o eixo x e o y.

O **eixo x** é o posicionamento horizontal, da esquerda para direita.
O **eixo y** é o posicionamento vertical, de cima para baixo.


## Content, Items e Self

Juntando o `justify`, ou `align`, com esse elementos: `content`, `items` e `self`;
nós observamos nossas propriedades.

### Content

`justify-content` e `align-content` nos permite alinhar o próprio grid, relativo ao espaço fora dele.

O uso dessas propriedades são raras, pois só é aplicado caso o grid seja menor que a area definida.
(Por exemplo, quando usamos o px no tabalho do grid, podemos temiar com um gird pequenao para o tanho da 
area do grid)

Podemos uar **7 valores**:
1. start
2. end
3. center
4. stretch
5. space-between
6. space-around
8. space-evenly


### Items

`justify-items` e `align-items` vão permitir alinhar os itens do nosso grid, em qualquer espaço disponivél, na célula que ele habitar.

Podemos usar **4 valores**:
1. start
2. end
3. center
4. satretch


### Self

`justify-self` e `align-self` vai nos permitir alinhar o item em si.
Faz a mesma coisa qiue `justify-items` e `align-items`, porém, aplicado diretamente no item de um grid.
