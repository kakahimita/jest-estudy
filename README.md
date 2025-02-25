# Estudo sobre Jest: Testando um Carrinho de Compras

Este repositório é parte do meu aprendizado sobre testes unitários com Jest. Ele demonstra como testar uma classe `Item` e uma classe `Carrinho` que simula um carrinho de compras. O objetivo é fornecer exemplos práticos e claros de como usar Jest para garantir a qualidade do código.

## Conteúdo

*   [Estrutura do Projeto](#estrutura-do-projeto)
*   [Instalação](#instalação)
*   [Executando os Testes](#executando-os-testes)
*   [Exemplos](#exemplos)
    *   [Testando a Classe Item](#testando-a-classe-item)
    *   [Testando a Classe Carrinho](#testando-a-classe-carrinho)
*   [Contribuição](#contribuição)
*   [Licença](#licença)

## Estrutura do Projeto
```
jest-study/
├── src/
│ ├── item.js # Classe para representar um item no carrinho
│ ├── carrinho.js # Classe para gerenciar o carrinho de compras
│ └── README.md # Detalhes sobre as classes Item e Carrinho
├── tests/
│ ├── item.test.js # Testes para a classe Item
│ ├── carrinho.test.js # Testes para a classe Carrinho
│ └── README.md # Detalhes sobre os testes
├── README.md # Este arquivo (documentação principal)
└── package.json # Arquivo de configuração do projeto
```

*   **`src/`**: Contém o código-fonte das classes `Item` e `Carrinho`. Consulte o `README.md` dentro desta pasta para mais detalhes sobre essas classes.
*   **`tests/`**: Contém os testes unitários escritos com Jest para as classes em `src/`. Consulte o `README.md` dentro desta pasta para mais informações sobre a estrutura dos testes e os matchers utilizados.

## Instalação

1.  Clone este repositório:

    ```bash
    git clone https://github.com/SEU_USUARIO/jest-study.git
    ```

    (Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub).

2.  Navegue até o diretório do projeto:

    ```bash
    cd jest-study
    ```

3.  Instale as dependências:

    ```bash
    npm install  # ou yarn install
    ```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test  # ou yarn test
```
Isso executará todos os testes definidos nos arquivos .test.js dentro da pasta tests/.

### Exemplos
### Testando a Classe Item
Os testes para a classe Item garantem que:

*   Um item pode ser criado com um nome e preço válidos.
*   O preço é formatado corretamente.
*   Erros são lançados quando o nome ou preço são inválidos.

**Exemplo de teste:**
```javaScript
it('Deve criar um item com nome e preço válidos', () => {
  const item = new Item('Camiseta', 29.99);
  expect(item.nome).toBe('Camiseta');
  expect(item.preco).toBe(29.99);
});
```
### Testando a Classe Carrinho
Os testes para a classe Carrinho garantem que:

*   Itens podem ser adicionados ao carrinho.
*   O total do carrinho é calculado corretamente.
*   Itens podem ser removidos do carrinho.
*   O carrinho pode ser esvaziado.
*   A quantidade total de itens no carrinho é calculada corretamente.
*   Erros são lançados quando operações inválidas são realizadas.

**Exemplo de teste:**
```javaScript
it('Deve adicionar um item ao carrinho', () => {
  const item = new Item('Caneta', 2.50);
  carrinho.adicionarItem(item, 2);
  expect(carrinho.itens.length).toBe(1);
  expect(carrinho.itens[0].item).toBe(item);
  expect(carrinho.itens[0].quantidade).toBe(2);
});
```

Consulte os arquivos tests/item.test.js e tests/carrinho.test.js para ver todos os testes implementados.

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request com melhorias, correções ou novos exemplos.
