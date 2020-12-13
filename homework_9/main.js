getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
generateBlocks = () => {
    const SIDE_LENGTH_OF_SQUARE = 50;
    const NUMBER_OF_SQUARES = 25;
    const NUMBER_PER_LINE = 5;
    const baseForSquares = document.getElementById('baseForSquares');
    baseForSquares.style.width = `${NUMBER_PER_LINE * SIDE_LENGTH_OF_SQUARE}px`;
    baseForSquares.style.display = 'inline-flex';
    baseForSquares.style.flexWrap = 'wrap';
    baseForSquares.innerHTML = "";
    for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
        const squere = document.createElement("div");
        squere.style.height = squere.style.width =  `${SIDE_LENGTH_OF_SQUARE}px`;
        squere.style.backgroundColor = getRandomColor();
        baseForSquares.append(squere);
    }
}
generateBlocksInterval = () => {
    generateBlocks();
    setInterval(generateBlocks,1000);
}
generateBlocksInterval();