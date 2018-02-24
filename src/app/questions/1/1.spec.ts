import solution, { solution2 } from './1';

describe('1.1', () => {
    it('should return true for unique strings', () => {
        const testCases = [
            'tes',
            'very',
            'm',
            'me',
            'the',
            'them',
            'hel word'
        ];
        for (let test of testCases) {
            expect(solution(test)).toBeTruthy();
            expect(solution2(test)).toBeTruthy();
        }
    });
    it('should return false for non unique strings', () => {
        const testCases = [
            'testt',
            'i am unique',
            'mm',
            'emm',
            'mme',
            'them might',
            'hello world'
        ];
        for (let test of testCases) {
            expect(solution(test)).toBeFalsy();
            expect(solution2(test)).toBeFalsy();
        }
    });    
})