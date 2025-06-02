import { Investment } from '@/domain/entities/investment';
import { InvestmentRepository } from '@/domain/repositories/InvestmentRepository';
import { CreateInvestmentUseCase } from './createInvestmentUseCase';
import { InvestmentProductRepository } from '@/domain/repositories/InvestmentProductRepository';
import { InvestmentProduct } from '@/domain/entities/investmentProduct';

class InMemoryInvestmentRepository implements InvestmentRepository {
  investments: Investment[] = [];

  async save(investment: Investment): Promise<void> {
    this.investments.push(investment);
  }

  async findById(id: number): Promise<Investment | null> {
    return this.investments.find(i => i.id === id) ?? null;
  }

  async findAll(): Promise<Investment[]> {
    return this.investments;
  }
}

class InMemoryInvestmentProductRepository implements InvestmentProductRepository {
  product: InvestmentProduct [] = [];
  async findById(id: number): Promise<InvestmentProduct | null> {
    return this.product.find(p => p.id === id) ?? null;
  }
  async findAll(): Promise<InvestmentProduct[]> {
    return this.product;
  }

}

describe('CreateInvestmentUseCase', () => {
  let useCase: CreateInvestmentUseCase;
  let investmentRepo: InMemoryInvestmentRepository;
  let productRepo: InMemoryInvestmentProductRepository;

  beforeEach(() => {
    investmentRepo = new InMemoryInvestmentRepository();
    productRepo = new InMemoryInvestmentProductRepository();
    useCase = new CreateInvestmentUseCase(investmentRepo, productRepo);
  });

  it('should create and save a new investment', async () => {
    const dto = {
      id: 1,
      productId: 1,
      amount: 1000,
      date: new Date('2025-06-01'),
    };

     const product = new InvestmentProduct(1, 'Tesouro Selic', 'Tesouro', 0.13);
    productRepo.product.push(product);
    const investment = await useCase.execute(dto);

    expect(investment).toBeInstanceOf(Investment);
    expect(investment.id).toBe(dto.id);
    expect(investment.amount).toBe(dto.amount);

    const stored = await investmentRepo.findById(dto.id);
  expect(stored).toEqual(investment);
  });
});
