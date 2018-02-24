/* 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has
sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)

EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
*/

export default function solution(str: string, length: number): string {
    let next = str.trim();
    return str.replace(' ', '%20');
}

// In place
export function solution2(url: string, length: number): string {
    const str = url.split(''); // strings are read only in javascript
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') continue;
        insertInPlace(str, '0', i);
        insertInPlace(str, '2', i);
        insertInPlace(str, '%', i);
    }
    return str.join('');
    function insertInPlace(s, char, index) {
        if (index === s.length - 1) {
            s[index] = char;
            return;
        }
        let temp = '';
        do {
            temp = s[index];
            s[index] = char;
            char = s[index+1];
            s[index+1] = temp;
            index++;
        } while(index < s.length - 1);
    }
}