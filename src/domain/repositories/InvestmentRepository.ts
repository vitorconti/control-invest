import { Investment } from "../entities/investment";

export interface InvestmentRepository {
  save(investment: Investment): Promise<void>;
  findById(id: number): Promise<Investment | null>;
  findAll(): Promise<Investment[]>;
}
