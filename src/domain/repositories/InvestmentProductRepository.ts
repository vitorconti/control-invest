import { InvestmentProduct } from "../entities/investmentProduct";


export interface InvestmentProductRepository {
  findById(id: number): Promise<InvestmentProduct | null>;
  findAll(): Promise<InvestmentProduct[]>;
}