import solution from './4';

describe('1.4', () => {
    it('should detect pallidrome permutations', () => {
        //atco cta'
        const cases = [
            'Tact Coa',
            'taco cat',
            'atco cta',
        ];
        for (let test of cases) {
            expect(solution(test)).toBeTruthy();
        }
    })
})