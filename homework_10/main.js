const noteDo = new Audio('sounds/note_do.mp3');
const noteRe = new Audio('sounds/note_re.mp3');
const noteMi = new Audio('sounds/note_mi.mp3');
const noteFa = new Audio('sounds/note_fa.mp3');
const noteSol = new Audio('sounds/note_sol.mp3');
const noteLja = new Audio('sounds/note_lja.mp3');
const noteSi = new Audio('sounds/note_si.mp3');
document.addEventListener('keydown', function(e){
    switch(e.code){
        case 'Digit1': 
    noteDo.currentTime = 0; noteDo.play(); break;
        case 'Digit2': 
    noteRe.currentTime = 0;noteRe.play(); break;
        case 'Digit3': 
    noteMi.currentTime = 0;noteMi.play(); break;
        case 'Digit4': 
    noteFa.currentTime = 0;noteFa.play(); break;
        case 'Digit5': 
    noteSol.currentTime = 0;noteSol.play(); break;
        case 'Digit6': 
    noteLja.currentTime = 0;noteLja.play(); break;
        case 'Digit7': 
    noteSi.currentTime = 0;noteSi.play(); break;
    }
});