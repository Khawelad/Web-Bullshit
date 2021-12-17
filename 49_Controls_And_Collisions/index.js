const ResetButton = document.querySelector('.btn-reset');
const NpcDialogue = document.querySelector('.npc-dialogue');

// Character Information Starts --->

    const Character = document.querySelector('.character');

    // let CharacterObj = {
    //     name: "Retard Boy",
    //     level: 1,
    //     mana: 3,
    //     isAlive: true
    // }

    let CharacterBoundingBox;

//Character Information Ends <--

// NPC Weapon Seller Information --->

    const WeaponSeller = document.querySelector('.weapon-seller');

    // let WeaponSellerObj = {
    //     name: "Zuko",
    //     profession: "weaponseller"
    // }

    let WeaponBoundingBox;

// NPC Weapon Seller Information Ends <---

window.onload = () => {
    Character.style.margin = 0 + 'px';
}

// window.addEventListener('keydown', (e) => {
//     if (e.key == 'd') {
//         MoveRight();
//     }
//     else if (e.key == 'a') {
//         MoveLeft();
//     }
//     else if (e.key == 'w') {
//         MoveUp();
//     }
//     else if (e.key == 's') {
//         MoveDown();
//     }
// })

// window.addEventListener('keydown', (e) => {
//     let key = e.key;
//     switch(key) {
//         case 'w':
//             MoveUp();
//             break;
//         case 'a':
//             MoveLeft();
//             break;
//         case 's':
//             MoveDown();
//             break;
//         case 'd':
//             MoveRight();
//             break;
//         default:
//             console.log("Default Switch, Key: " + key);
//             break;
//     }
// })

// function MoveRight() {
//     let LeftMargin = parseInt(Character.style.marginLeft);
//     let ChangedLeftMargin = LeftMargin + Speed;
//     Character.style.marginLeft = ChangedLeftMargin + 'px';
// }

// function MoveLeft() {
//     let RightMargin = parseInt(Character.style.marginRight);
//     let ChangedRightMargin = RightMargin + Speed;
//     Character.style.marginRight = ChangedRightMargin + 'px';
// }

// function MoveUp() {
//     let BottomMargin = parseInt(Character.style.marginBottom);
//     let ChangedBottomMargin = BottomMargin + Speed;
//     Character.style.marginBottom = ChangedBottomMargin + 'px';
// }

// function MoveDown() {
//     let TopMargin = parseInt(Character.style.marginTop);
//     let ChangedTopMargin = TopMargin + Speed;
//     Character.style.marginTop = ChangedTopMargin + 'px';
// }

// window.addEventListener('keydown', (e) => {
//     switch(true) {
//         case (e.key ==='w' && e.ctrlKey == false):
//             MoveCharacter("up", 10);
//             break;
//         case (e.key ==='a' && e.ctrlKey == false):
//             MoveCharacter("left", 10);
//             break;
//         case (e.key ==='s' && e.ctrlKey == false):
//             MoveCharacter("down", 10);
//             break;
//         case (e.key ==='d' && e.ctrlKey == false):
//             MoveCharacter("right", 10);
//             break;
//         case (e.key ==='w' && e.ctrlKey == true):
//             MoveCharacter("up", 5);
//             break;
//         case (e.key ==='a' && e.ctrlKey == true):
//             MoveCharacter("left", 5);
//             break;
//         case (e.key ==='s' && e.ctrlKey == true):
//             MoveCharacter("down", 5);
//             break;
//         case (e.key ==='d' && e.ctrlKey == true):
//             MoveCharacter("right", 5);
//             break;
//         case (e.key === 'W'):
//             MoveCharacter("up", 20);
//             break;
//         case (e.key === 'A'):
//             MoveCharacter("left", 20);
//             break;
//         case (e.key === 'S'):
//             MoveCharacter("down", 20);
//             break;
//         case (e.key === 'D'):
//             MoveCharacter("right", 20);
//             break;
//         default:
//             console.log("Default Switch, Key: " + e.key);
//             console.log(e);
//             break;
//     }
// })

window.addEventListener('keydown', (e) => {
    let key = e.key;
    switch(key) {
        case 'w':
            MoveCharacter("up", 10);
            break;
        case 'a':
            MoveCharacter("left", 10);
            break;
        case 's':
            MoveCharacter("down", 10);
            break;
        case 'd':
            MoveCharacter("right", 10);
            break;
        case 'W':
            MoveCharacter("up", 20);
            break;
        case 'A':
            MoveCharacter("left", 20);
            break;
        case 'S':
            MoveCharacter("down", 20);
            break;
        case 'D':
            MoveCharacter("right", 20);
            break;
        default:
            console.log("Default Switch, Key: " + key);
            console.log(e);
            break;
    }
})

function MoveCharacter(Direction, Speed) {

    // Collision Detection Starts --->

    CharacterBoundingBox = Character.getBoundingClientRect();
    WeaponBoundingBox = WeaponSeller.getBoundingClientRect();

    if ((CharacterBoundingBox.x) <= (WeaponBoundingBox.x + WeaponBoundingBox.width) &&
    (CharacterBoundingBox.x + CharacterBoundingBox.width) >= (WeaponBoundingBox.x) &&
    (CharacterBoundingBox.y) <= (WeaponBoundingBox.y + WeaponBoundingBox.height) &&
    (CharacterBoundingBox.y + CharacterBoundingBox.height) >= (WeaponBoundingBox.y)) {
        // Character Is Colliding RN
        NpcDialogue.style.opacity = 1;
    } else {
        NpcDialogue.style.opacity = 0;
    }

    //Collision Detection Ends <---

    switch(Direction) {
        case "left":
            Character.style.marginRight = parseInt(Character.style.marginRight) + Speed + 'px';
            break;
        case "right":
            Character.style.marginLeft = parseInt(Character.style.marginLeft) + Speed + 'px';
            break;
        case "up":
            Character.style.marginBottom = parseInt(Character.style.marginBottom) + Speed + 'px';
            break;
        case "down":
            Character.style.marginTop = parseInt(Character.style.marginTop) + Speed + 'px';
            break;
        default:
            break;
    }
} 

ResetButton.addEventListener('click', () => {
    Character.style.margin = 0;
})