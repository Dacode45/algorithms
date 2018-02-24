//1.2 Check Perumutation: Given two strings, write a method to decide if one is a permuttion of the other

// sort
export default function solution(str1, str2): boolean {
    if (str1.length !== str2.length) return false;
    const chars1 = str1.split('').sort().join('');
    const chars2 = str2.split('').sort().join('');
    return chars2 === chars1;
}

// Look at each character
export function solution2(str1, str2): boolean {
    if (str1.length !== str2.length) return false;

    const charFound = new Array(str1.length);
    charFound.fill(false, 0);
    for(let i = 0; i < str1.length; i++) {
        let found = false;
        for(let j = 0; j < str2.length; j++) {
            if (charFound[j]) continue;
            if (str1[i] !== str2[j]) continue;
            charFound[j] = true;
            found = true;
            break;
        }
        if (!found) return false;
    }
    return true;
}

// Character count
export function solution3(str1, str2): boolean {
    if (str1.length !== str2.length) return false;
    const count1 = str1.split('').reduce(getCount, {});
    const count2 = str2.split('').reduce(getCount, {});
    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;

    function getCount(acc, char) {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }
}