import { Management } from '../../entities/management';
import { ManagementsRepository } from '../managements-repository';

export class InMemoryManagementsRepository implements ManagementsRepository {
    private management: Management[] = [];

    async create(management: Management): Promise<void> {
        this.management.push(management);
    }

    async find(title: string): Promise<Management | null> {        
        const managementFound = this.management.find(management => management.title.toLowerCase().includes(title.toLowerCase()));

        return managementFound ?? null;
    }
}