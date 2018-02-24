/* One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check fi they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

import editdistance from '@algorithms/editdistance';

export default function solution(str1, str2): boolean {
    const cost = editdistance(str1, str2, (a, b) => (a === b ? 0 : 1), () => 1);
    return cost <= 1;
}