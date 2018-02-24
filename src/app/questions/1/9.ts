/**
 *  1.9 String Rotation: Assume you have a method isSubstring which checks if one word
 * of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only 
 * one call to isSubstring('waterbottle', is a rotation of 'erbottlewat)
 */

 export default function solution(str1: string, str2: string): boolean {
     const string = str2 + str2;
     return string.includes(str1);
 }