import { expect, test } from 'vitest';
import { Management } from './management';

test('create an management', () => {
    const management =  new Management({
        title: 'Testes automatizados de software',
        author: 'Mauricio Aniche',
        genre: 'técnico/prático'
    });

    expect(management).toBeInstanceOf(Management);
});