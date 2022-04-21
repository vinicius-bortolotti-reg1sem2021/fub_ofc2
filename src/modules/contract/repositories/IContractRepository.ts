import { IContractDTO } from '@modules/contract/dtos/IContractDTO';

export interface IContractRepository {
  create(data: IContractDTO): Promise<void>;

  list(): Promise<IContractDTO[]>;

  findById(id: number): Promise<IContractDTO | undefined>;

  update(id: number, data: Partial<IContractDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;
}