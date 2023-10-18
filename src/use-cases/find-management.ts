import { Management } from '../entities/management';
import { ManagementsRepository } from '../repositories/managements-repository';

type FindManagementResponse = Management;

export class FindManagement {
    constructor (private ManagementsRepository: ManagementsRepository) {}

    async execute (title: string): Promise<FindManagementResponse | null> {
        const management = await this.ManagementsRepository.find(title);

        return management;
    }
}