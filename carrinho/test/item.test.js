import Item from "../item";

describe('Testes dos itens', () => {
    it('Deve ter 3 campos: nome, valor e quantidade', () => {

        const item = new Item('Beterraba', 2.5, 10);

        // Matcher .toBe() Verifica se o valor é estritamente igual (===)
        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    })
    it('Deve ter o preço calculado de acordo com a quantidade', () => {

        const item = new Item('Maça', 0.1, 3); // Problema de ponto flutuante.

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3); // .ToBeCloseTo(): Matcher para verificar se um número está proximo de outro, útil para lidar com precisões de ponto flutuante
    })
});