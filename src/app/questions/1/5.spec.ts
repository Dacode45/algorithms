import solution from './5';

describe('1.5', () => {
    it('all distances less than or equal to 1', () => {
        //atco cta'
        const cases = [
            ['pale', 'ple', true],
            ['pales', 'pale', true],
            ['pale', 'bale', true],
            ['pale', 'bake', false],
        ];
        for (let [str1, str2, match] of cases) {
            expect(solution(str1, str2) === match).toBeTruthy();
        }
    })
})