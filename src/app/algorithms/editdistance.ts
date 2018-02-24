export type METHOD = 'match' | 'insert' | 'delete' | null;

export interface cell {
    cost: number;
    method: METHOD;
}

const emptyCell: cell = {
    cost: 0,
    method: null,
}

export type MatchCostFunc = (c1: string, c2: string) => number;
export type InDelCostFunc = (c: string) => number;

export default function editdistance(
    str1: string,
    str2: string,
    matchCost: MatchCostFunc,
    indelCost: InDelCostFunc): number {
        // Initialize matrix
        const size = Math.max(str1.length, str2.length);
        const matrix: cell[][] = new Array(size);
        for(let i = 0; i <= size; i++) {
            matrix[i] = new Array(size);
            matrix[i].fill(null, 0);
        }
        matrix[0][0] = emptyCell;
        for (let i = 1; i <= str1.length; i++) {
            matrix[0][i] = matrix[i][0] = {
                cost: i,
                method: 'insert'
            }
        }

        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                const options = {
                    match: 0,
                    insert: 0,
                    delete: 0,
                }
                options.match = (matrix[i - 1][j - 1]).cost + matchCost(str1[i - 1], str2[j - 1]);
                options.insert = (matrix[i][j - 1]).cost + indelCost(str2[j - 1]);
                options.delete = (matrix[i - 1][j]).cost + indelCost(str1[i - 1]);
                let lowest = options.match;
                let lowestKey: METHOD = 'match';
                if (options.insert < lowest) {
                    lowest = options.insert;
                    lowestKey = 'insert';
                }
                if (options.delete < lowest) {
                    lowest = options.delete;
                    lowestKey = 'delete'
                }
                matrix[i][j] = {
                    cost: lowest,
                    method: lowestKey,
                }
            }
        }
        return matrix[str1.length - 1][str2.length - 1].cost;
}