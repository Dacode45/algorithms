/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If 
the "compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters(a-z)
*/

export default function solution(str: string): string {
    const replaceConsecutive = str.replace(/(.)\1+/g, (match, p1, offset, string) => {
        const char = match[0];
        const count = match.length;
        const toReturn = `${char}${count}`
        return toReturn;
    })
    // aabcccccaaa is now a2bc5a3. Replace 'bc' with 'b1c'
    const replaceBreaks = replaceConsecutive.replace(/[^\d][^\d]/g, (match) => {
        const toReturn = match.split('').join('1');
        return toReturn;
    });
    return (replaceBreaks.length <= str.length) ? replaceBreaks : str;
}