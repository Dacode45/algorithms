//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures.

export default function solution(str: string): boolean {
    const seen: { [k: string]: boolean } = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char]) return false;
        seen[char] = true;
    }
    return true;
}

// Another solution is to sort the string
export function solution2(str: string): boolean {
    const chars = str.split('');
    if (chars.length < 2) return true;
    if (chars[0] === chars[1]) return false;
    chars.sort();
    for (let i = 1; i < chars.length - 1; i++) {
        if (chars[i] === chars[i - 1] || chars[i] === chars[i + 1]) {
            return false;
        }
    }
    return true;
}