async function getRandomChinese (length) {
    const DELAY = 50;
    let resultString = '';
    for(let i = 0; i <= length; i++){
        const getRandomChinesChar = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    return resolve(String.fromCharCode(String(Date.now()).slice(-5)))
                },DELAY)
            });
        };
        resultString += await getRandomChinesChar();
    };
	return resultString;
}
getRandomChinese(4).then((result) => console.log(result));