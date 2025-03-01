import Carrinho from "../carrinho";
import Item from "../item";

describe('Testes do carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.subtotal).toBe(null);
    })

    it('Deve ter itens', () => {
        const item = new Item('Batata', 2, 4);
        const item2 = new Item('Uva', 6, 2);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    })

    it('Deve ter a propriedade "total" na inicilialização', () => {
        const carrinho = new Carrinho();
        const item = new Item('Maça', 2, 4);
        carrinho.adicionaFrete(15);
        carrinho.adiciona(item);

        // .toHaveProperty verifica se a propriedade fornecida na referência 'keyPath' existe para um objeto.
        expect(carrinho).toHaveProperty('total');

        // você pode fornecer um argumento opcional 'value' para comparar o valor da propriedade recebida. Nesse exemplo estamos verificando se o carrinho possui a propriedade 'frete' com valor 15.
        expect(carrinho).toHaveProperty('frete', 15);
    })
})