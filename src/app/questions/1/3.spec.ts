import solution, { solution2 } from './3';

describe('1.3', () => {
    it('shshould replace spaces', () => {
        const test = 'Mr John Smith    ';
        const length = test.length;
        const expected = 'Mr520John%20Smith'
        expect(solution(test, length) === expected);
        expect(solution2(test, length) === expected);
    })
})