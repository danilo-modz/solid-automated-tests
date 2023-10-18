import { ManagementProps, Management } from '../entities/management';
import { ManagementsRepository } from '../repositories/managements-repository';

type CreateManagementRequest = ManagementProps;

type CreateManagementResponse = Management;

export class CreateManagement {
    constructor (private ManagementsRepository: ManagementsRepository) {}

    async execute ({ title, author, genre }: CreateManagementRequest): Promise<CreateManagementResponse> {
        const management = new Management({
            title,
            author,
            genre
        });

        await this.ManagementsRepository.create(management)

        return management;
    }
}