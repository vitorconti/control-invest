export class InvestmentProduct {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly type: 'CDB' | 'Tesouro' | 'Ações' | 'Fundo',
    public readonly annualRate: number, // Ex: 0.135 = 13.5% ao ano
  ) {}
}