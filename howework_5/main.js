getRandomArray = (length, min, max) => {
const randomArray = Array(length);
for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = getRandomNumber(min, max)
}
return randomArray; 
}

getRandomNumber = (min, max) => {
    randomNumber = +(Math.random() * (max - min) + min).toFixed();
    return randomNumber;
}

getModa = (...numbers) => {
	const sortArrayNumbers = getArrayIntegerNumbers(...numbers).sort(function(a, b){return a - b});
	let count = 0, maxCount = 0;
	const moda = sortArrayNumbers.reduce((moda, number, i) => {
		if(sortArrayNumbers[i] === sortArrayNumbers[i + 1]){
			count++;
		}
		else{
			count = 0;
		}
		if(count > maxCount){
			maxCount = count;
			moda = number;
		}
		return moda;
	})
	return moda;
}

getArrayIntegerNumbers = (...numbers) => {
    const arrayIntegerNumbers = numbers.filter(number => Number.isInteger(number));
    return arrayIntegerNumbers;
}

getAverage = (...numbers) => {
    arrayIntegerNumbers = getArrayIntegerNumbers(...numbers);
    const sumNumbers = arrayIntegerNumbers.reduce((sumNumbers, number) => {
        sumNumbers += number;
        return sumNumbers;
    })
    return sumNumbers/arrayIntegerNumbers.length;
}

getMedian = (...numbers) => {
	const sortArrayNumbers = getArrayIntegerNumbers(...numbers).sort(function(a, b){return a - b});
	const median = sortArrayNumbers.reduce((median, number, i) => {
		if (parseInt(sortArrayNumbers.length) % 2 === 0){
			return (sortArrayNumbers[parseInt(sortArrayNumbers.length/2)] +
			sortArrayNumbers[(parseInt(sortArrayNumbers.length/2)) - 1]) / 2;
		}
		else{
			return sortArrayNumbers[parseInt(sortArrayNumbers.length/2)];
		}
	})
	return median;
}

filterEvenNumbers = (...numbers) => {
	const evenNumbers = numbers.filter(number => number % 2 === 1);
	return evenNumbers;
}

countPositiveNumbers = (...numbers) => {
	let countPosNum = 0;
	countPosNum = numbers.reduce((countPosNum, number) => {
		if (number > 0){
			countPosNum++
		}
		return countPosNum;
	})
	return countPosNum;
}

getDividedByFive = (...numbers) => {
	const dividedByFive = numbers.filter(number => number % 5 === 0);
	return dividedByFive;
}

replaceBadWords = (string) => {
	const arrayWords = string.split(" ");
	badWords.forEach((badWord) => {
		const badWordIndex = arrayWords.findIndex((word) => {
			return word === badWord;
		})
		return arrayWords.splice(badWordIndex, 1, "***");
	})
	return arrayWords.join(" ");
}

divideByThree = (word) => {
	if(word.length > 3){
		const arrayLaters = word.split(/(.{3})/);
		return arrayLaters.join(" ").toLowerCase();
	}
	else{
		return word.toLowerCase();
	}
}

document.writeln(`getRandomArray: ${getRandomArray(15, 1, 100)} </br>`);
document.writeln(`getModa: 
${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </br>`);
document.writeln(`getAverage: 
${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </br>`);
document.writeln(`getMedian: 
${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </br>`);
document.writeln(`filterEvenNumbers: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} </br>`);
document.writeln(`countPositiveNumbers: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} </br>`);
document.writeln(`getDividedByFive: 
${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </br>`);
const badWords = ["shit", "fuck"];
document.writeln(`replaceBadWords: ${replaceBadWords("Holy shit!")} </br>`)
document.writeln(`divideByThree: ${divideByThree("live")} <br>`)