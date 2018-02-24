/* Palidrome Permutation: Given a string, write a function to check if it is a permutation of a 
palidrome. A palidrome is a word or phrase that is the same forwards and backwards. A perumtation 
is a rearrangement of letters. The palidrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

export default function solution(chars: string): boolean {
    // All palidroms have an even number of each character in the string,
    // except for the middle which will have exactly 1.
    let str = chars.replace(/\s/, '');
    str = str.toLowerCase();
    const odd = (str.length % 2) === 1;
    const count: { [k: string]: number } = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    let foundOddChar = false;
    for (let key of str) {
        if ((count[key] % 2) !== 0) {
            if (odd && !foundOddChar) {
                foundOddChar = true;
            } else {
                return false;
            }
        }
    }
    return true;
}