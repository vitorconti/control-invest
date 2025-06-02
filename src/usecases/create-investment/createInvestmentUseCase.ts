import { Investment } from "@/domain/entities/investment";
import { InvestmentProductRepository } from "@/domain/repositories/InvestmentProductRepository";
import { InvestmentRepository } from "@/domain/repositories/InvestmentRepository";

export interface CreateInvestmentDTO {
  id: number;
  productId: number;
  amount: number;
  date: Date;
}

export class CreateInvestmentUseCase {
  constructor(
    private investmentRepo: InvestmentRepository,
    private productRepo: InvestmentProductRepository
  ) {}

  async execute(data: CreateInvestmentDTO): Promise<Investment> {
    const product = await this.productRepo.findById(data.productId);

    if (!product) {
      throw new Error(`Product with id ${data.productId} does not exist`);
    }

    const investment = new Investment(
      data.id,
      product,
      data.amount,
      data.date
    );

    await this.investmentRepo.save(investment);

    return investment;
  }
}
