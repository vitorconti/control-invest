import { soma, ehPar } from './utils';

describe('Funções utilitárias', () => {
  test('soma corretamente dois números', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('verifica se número é par', () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(5)).toBe(false);
  });
});
