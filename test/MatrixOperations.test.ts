import MatrixOperations from '../src/Classes/MatrixOperations';

describe('MatrixOperations', () => {
    describe('add', () => {
        it('adds two matrices element-wise', () => {
            const a = [
                [1, 2],
                [3, 4],
            ];
            const b = [
                [5, 6],
                [7, 8],
            ];

            const result = MatrixOperations.add(a, b);

            expect(result).toEqual([
                [6, 8],
                [10, 12],
            ]);
        });

        it('handles negative and mixed numbers', () => {
            const a = [
                [-1, 4],
                [0, 2],
            ];
            const b = [
                [3, -4],
                [10, -2],
            ];

            expect(MatrixOperations.add(a, b)).toEqual([
                [2, 0],
                [10, 0],
            ]);
        });
    });

    describe('subtract', () => {
        it('subtracts two matrices element-wise', () => {
            const a = [
                [10, 5],
                [3, 8],
            ];
            const b = [
                [1, 2],
                [3, 4],
            ];

            expect(MatrixOperations.subtract(a, b)).toEqual([
                [9, 3],
                [0, 4],
            ]);
        });
    });

    describe('multiply', () => {
        it('multiplies matrices with valid dimensions', () => {
            const a = [
                [1, 2, 3],
                [4, 5, 6],
            ];

            const b = [
                [7, 8],
                [9, 10],
                [11, 12],
            ];

            expect(MatrixOperations.multiply(a, b)).toEqual([
                [58, 64],
                [139, 154],
            ]);
        });

        it('throws if dimensions do not match', () => {
            const a = [[1, 2]];
            const b = [[1, 2]];

            expect(() => MatrixOperations.multiply(a, b)).toThrow(
                'Cannot multiply matrices: Invalid dimensions'
            );
        });
    });

    describe('determinant', () => {
        it('returns determinant of a 1x1 matrix', () => {
            expect(MatrixOperations.determinant([[5]])).toBe(5);
        });

        it('calculates determinant of a 2x2 matrix', () => {
            const m = [
                [4, 6],
                [3, 8],
            ];

            expect(MatrixOperations.determinant(m)).toBe(14);
        });

        it('calculates determinant of a 3x3 matrix', () => {
            const m = [
                [6, 1, 1],
                [4, -2, 5],
                [2, 8, 7],
            ];

            expect(MatrixOperations.determinant(m)).toBe(-306);
        });

        it('throws if matrix is not square', () => {
            const m = [
                [1, 2, 3],
                [4, 5, 6],
            ];

            expect(() => MatrixOperations.determinant(m)).toThrow(
                'Matrix must be square to calculate determinant'
            );
        });
    });
});
