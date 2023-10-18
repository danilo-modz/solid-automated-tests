import { Management } from '../entities/management';

export interface ManagementsRepository {
    create(management: Management): Promise<void>;
    find(title: string): Promise<Management | null>;
}