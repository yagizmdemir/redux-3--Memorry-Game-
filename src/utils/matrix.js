export const shuffleArray = (array) => {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
};

export const matrix = (array) => {
    const shuffled = shuffleArray(array);
    const matrixArray = [...shuffled, ...shuffled];

    const matrix = [];
    const numberOfRows = 5;
    const numberOfColumns = 5;

    for (let row = 0; row < numberOfRows; row++) {
        const newRow = [];
        for (let col = 0; col < numberOfColumns; col++) {
            newRow.push(matrixArray[row * numberOfColumns + col]);
        }
        matrix.push(newRow);
    }

    return matrix;
}
