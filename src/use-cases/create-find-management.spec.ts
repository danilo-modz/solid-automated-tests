import { describe, expect, it } from 'vitest';
import { CreateManagement } from './create-management';
import { Management } from '../entities/management';
import { InMemoryManagementsRepository } from '../repositories/in-memory/in-memory-managements-repository';
import { FindManagement } from './find-management';

describe('Create and Find Management', () => {
    const ManagementsRepository = new InMemoryManagementsRepository();

    it('should be able to create an management', () => {
        const createManagement = new CreateManagement(ManagementsRepository);

        expect(createManagement.execute({
            title: 'Testes automatizados de software',
            author: 'Mauricio Aniche',
            genre: 'técnico/prático'
        })).resolves.toBeInstanceOf(Management)
    });

    it('should be able to find an management', () => {
        const findManagement = new FindManagement(ManagementsRepository);

        expect(findManagement.execute(
            'Testes automatizados de software'
        )).resolves.toBeInstanceOf(Management)
    });
});