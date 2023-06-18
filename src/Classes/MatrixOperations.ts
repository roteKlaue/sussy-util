export default class MatrixOperations {
    static add(matrixA: number[][], matrixB: number[][]): number[][] {
        const rows = matrixA.length;
        const cols = matrixA[0].length;
        const result: number[][] = [];

        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }

        return result;
    }

    public static subtract(matrixA: number[][], matrixB: number[][]): number[][] {
        const rows = matrixA.length;
        const cols = matrixA[0].length;
        const result: number[][] = [];

        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                result[i][j] = matrixA[i][j] - matrixB[i][j];
            }
        }

        return result;
    }

    public static multiply(matrixA: number[][], matrixB: number[][]): number[][] {
        const rowsA = matrixA.length;
        const colsA = matrixA[0].length;
        const rowsB = matrixB.length;
        const colsB = matrixB[0].length;

        if (colsA !== rowsB) {
            throw new Error("Cannot multiply matrices: Invalid dimensions");
        }

        const result: number[][] = [];

        for (let i = 0; i < rowsA; i++) {
            result[i] = [];
            for (let j = 0; j < colsB; j++) {
                let sum = 0;
                for (let k = 0; k < colsA; k++) {
                    sum += matrixA[i][k] * matrixB[k][j];
                }
                result[i][j] = sum;
            }
        }

        return result;
    }

    public static determinant(matrix: number[][]): number {
        const rows = matrix.length;
        const cols = matrix[0].length;

        if (rows !== cols) {
            throw new Error("Matrix must be square to calculate determinant");
        }

        if (rows === 1) {
            return matrix[0][0];
        }

        let det = 0;
        for (let i = 0; i < cols; i++) {
            const subMatrix = [];
            for (let j = 1; j < rows; j++) {
                subMatrix[j - 1] = matrix[j].filter((_, index) => index !== i);
            }
            det += matrix[0][i] * Math.pow(-1, i) * this.determinant(subMatrix);
        }

        return det;
    }
}