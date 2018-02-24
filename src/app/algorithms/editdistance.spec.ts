import editdistance from './editdistance';

describe('edit distance', () => {
    it('should work', () => {
        const cost = editdistance('hello', 'helo', (a, b) => ( a === b ? 0 : 1), () => 1);
        expect(cost).toEqual(1);
    });
})