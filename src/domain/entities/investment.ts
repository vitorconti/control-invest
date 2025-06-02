import { InvestmentProduct } from './investmentProduct';

export class Investment {
  constructor(
    public readonly id: number,
    public readonly product: InvestmentProduct,
    public readonly amount: number,
    public readonly startDate: Date
  ) {}

  calculateProjectedReturn(endDate: Date): number {
    const years = (endDate.getTime() - this.startDate.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return this.amount * Math.pow(1 + this.product.annualRate, years);
  }

  getInvestmentAgeInDays(): number {
    const now = new Date();
    return Math.floor((now.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
  }
}