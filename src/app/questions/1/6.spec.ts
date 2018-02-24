import solution from './6';

describe('1.6', () => {
    it('should replace', () => {
        expect(solution('aabcccccaaa')).toEqual('a2b1c5a3');
    })
})