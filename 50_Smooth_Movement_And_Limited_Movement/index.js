let Character = document.querySelector('.character');
let oCharacter = {
    w: 32,
    h: 32,
    top: (window.innerHeight / 2) - 32,
    left: (window.innerWidth / 2) - 32,
}

document.body.onload = () => {
    InitializeCharacter();
}

function InitializeCharacter() {
    Character.style.width = oCharacter.w + "px";
    Character.style.height = oCharacter.h + "px";
    Character.style.top = oCharacter.top + "px";
    Character.style.left = oCharacter.left + "px";
}

window.addEventListener('keypress', MovePlayer);

function MovePlayer(e) {

    let CharacterTop = parseInt(Character.style.top);
    let CharacterLeft = parseInt(Character.style.left);

    if (CharacterTop >= window.innerHeight || 
        CharacterTop <= 0 || 
        CharacterLeft >= window.innerWidth || 
        CharacterLeft <= 0) {

    } else {
        switch(e.key) {
            case 'w':
                oCharacter.top = (parseInt(Character.style.top)) - oCharacter.h;
                Character.animate([
                    {top: oCharacter.top + "px"},
                ], {
                    duration: 100,
                })
                setTimeout(() => {
                    Character.style.top = oCharacter.top + "px";
                }, 50)
                break;
            case 'a':
                oCharacter.left = (parseInt(Character.style.left)) - oCharacter.w;
                Character.animate([
                    {left: oCharacter.left + "px"}
                ], {
                    duration: 100,
                })
                setTimeout(() => {
                    Character.style.left = oCharacter.left + "px";
                }, 50)
                break;
            case 's':
                oCharacter.top = (parseInt(Character.style.top)) + oCharacter.h;
                Character.animate([
                    {top: oCharacter.top + "px"}
                ], {
                    duration: 100,
                })
                setTimeout(() => {
                    Character.style.top = oCharacter.top + "px";
                }, 50)
                break;
            case 'd':
                oCharacter.left = (parseInt(Character.style.left)) + oCharacter.w;
                Character.animate([
                    {left: oCharacter.left + "px"}
                ], {
                    duration: 100,
                })
                setTimeout(() => {
                    Character.style.left = oCharacter.left + "px";
                }, 50)
                break;
            default:
                console.log("Default Switch, Key: " + e.key);
                break;
        }
    }
}