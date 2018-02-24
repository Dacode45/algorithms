/**
 * Zero Matrrix: Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0
 */

 export default function solution(matrix: number[][]) {
     const zeros: [number, number][] = [];
     for (let i = 0; i < matrix.length; i ++) {
         const row = matrix[i];
         for (let j = 0; j < row.length; j++) {
             if (matrix[i][j] === 0) zeros.push([i, j]);
         }
     }

     for (let [i, j] of zeros) {
         const row = matrix[i];
         for (let k = 0; k < row.length; k++) {
             matrix[i][k] = 0;
             if (k < matrix.length) {
                 matrix[k][j] = 0;
             }
         }
     }

     return matrix;
 }