const buttonGetIndex = document.getElementById('buttonGetIndex');
const backgroundId = document.getElementById('backgroundId');
function* getId() {
    let i = 0;
    while(true) yield ++i;
}
const idGenerator = getId();
buttonGetIndex.addEventListener('click', () => backgroundId.innerHTML += idGenerator.next().value + '</br>');
const keyFontUp = document.getElementById('keyFontUp');
const keyFontDown = document.getElementById('keyFontDown');
const text = document.getElementById('text');
function* newFontGenerator(textSize){
	while (true) {
		const char = yield textSize;
		if(char === 'up') ++textSize;
		else if(char === 'down') --textSize;
	}
}
const currentFont = parseInt(getComputedStyle(text).fontSize);
const fontGenerator = newFontGenerator(currentFont);
keyFontUp.addEventListener('click', function() {
    text.style.fontSize = `${fontGenerator.next('up').value}px`;
});
keyFontDown.addEventListener('click', function() {
    text.style.fontSize = `${fontGenerator.next('down').value}px`;
});