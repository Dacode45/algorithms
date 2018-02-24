import solution, { solution2, solution3 } from './2';

describe('1.2', () => {
    it('shhould return true for permutations', () => {
        const source = 'abbccc';
        const perm = [
            'abbccc', 'abcbcc', 'abccbc', 'abcccb', 'acbbcc', 'acbcbc', 'acbccb', 'accbbc', 'accbcb', 'acccbb', 'babccc', 'bacbcc', 'baccbc', 'bacccb', 'bbaccc', 'bbcacc', 'bbccac', 'bbccca', 'bcabcc', 'bcacbc', 'bcaccb', 'bcbacc', 'bcbcac', 'bcbcca', 'bccabc', 'bccacb', 'bccbac', 'bccbca', 'bcccab', 'bcccba', 'cabbcc', 'cabcbc', 'cabccb', 'cacbbc', 'cacbcb', 'caccbb', 'cbabcc', 'cbacbc', 'cbaccb', 'cbbacc', 'cbbcac', 'cbbcca', 'cbcabc', 'cbcacb', 'cbcbac', 'cbcbca', 'cbccab', 'cbccba', 'ccabbc', 'ccabcb', 'ccacbb', 'ccbabc', 'ccbacb', 'ccbbac', 'ccbbca', 'ccbcab', 'ccbcba', 'cccabb', 'cccbab', 'cccbba',]
        for (let p of perm) {
            expect(solution(source, p)).toBeTruthy();
            expect(solution2(source, p)).toBeTruthy();
            expect(solution3(source, p)).toBeTruthy();
        }
    })
})