/**
 * Rotate Matrix: given an image represented by an NxN matrix, where each pixel
 * in the image is 4 bytes, write a method to rotate the image by 90 degrees,
 * Can you do this in place?
 */

export default function solution(matrix: number[][]): number[][] {
    // This is really flipping the rows and columns of the matrix.
    for (let layer = 0; layer < matrix.length / 2; layer++) {
        let first = layer;
        let last = matrix.length - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            let top = matrix[first][i];
            // left -> top
            matrix[first][i] = matrix[last-offset][first];

            // bottom -> left
            matrix[last-offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last];
            
            // top -> right
            matrix[i][last] = top;
        }
    }
    return matrix;
}