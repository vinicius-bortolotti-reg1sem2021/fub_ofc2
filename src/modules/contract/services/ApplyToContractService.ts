import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationHelper } from '@shared/helpers/ContractApplicationHelper';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class ApplyToContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(ContractApplicationHelper);

    const { contract, userInfo } = await helper.execute(id, user);

    // @ts-ignore
    if (user.id === contract.employer) {
      throw new Error('You cannot apply to your own contract');
    }

    contract.interested.forEach((interestedUser) => {
      // @ts-ignore
      if (interestedUser === user.id) {
        throw new Error('You already has applied to this job');
      }
    });

    await this.contractRepository.applyToContract(id, userInfo);
  }
}
