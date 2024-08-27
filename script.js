let running = true;
let oldTime = performance.now();
let accumulator = 0;
let parent = document.getElementById("oceanRoom");
let player;
let playerHV = 0;
let playerJH = -1.6;
let playerSpd = .2;
let playerClbS = -.15;
let playerVV = 0;
let onGround = false;
let playerRect = {x: 5, y: 20, w: 4, h:15};
let inv = {};
const grv = 0.05;
const FPS = 60;
const frameDuration = 1000 / FPS;
let isJumping = false;
let focusedItem;
let paused = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const allCategories = ["items", "skills", "equip", "craft"];
function switchCategory (category){
    allCategories.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById(category).style.display = "block";
}

function openInv(){
    document.getElementById("inv").style.display = "block";
}

function closeInv(){
    if (focusedItem){
        document.getElementById(focusedItem+"Inv").disabled = false;
        document.getElementById(focusedItem+"Inv").style.backgroundColor = "wheat";
        focusedItem = null;
    }

    document.getElementById("inv").style.display = "none";
}


async function updateDesc(){
    if (focusedItem){
        let itemData = await window.electron.readJSONFile('data/buildings.json');
        let desc = itemData[focusedItem]["desc"];
        document.getElementById("itemDesc").innerText = ("Desc: " + Object.entries(desc).map(([key, value]) => `${value}`).join(""));
    
    }
}

function updFocusItem(item){
    if (focusedItem == item){
        return;
    }

    document.getElementById(item+"Inv").disabled = false;
    document.getElementById(item+"Inv").style.backgroundColor = "wheat";
    
    focusedItem = item;
    document.getElementById(item+"Inv").disabled = true;
    document.getElementById(item+"Inv").style.backgroundColor = "purple";
}

let invElem = {}
function addToInv(item, amount, cat) {
    if (inv.hasOwnProperty(item)) {
        inv[item] += amount;
        invElem[item].innerText = item + " : " + inv[item];
    } else {
        inv[item] = amount;
        let newTag = document.createElement("button");
        newTag.classList.add("invTag");
        newTag.id = item+"Inv";
        newTag.onclick = function(){updFocusItem(item)}
        newTag.innerText = item + " : " + inv[item];
        document.getElementById(cat).appendChild(newTag);
        invElem[item] = newTag;
    }

    
}

function trashItem(){
    if (inv.hasOwnProperty(focusedItem)){
        if (inv[focusedItem] - 1 <= 0){
            document.getElementById("items").removeChild(invElem[focusedItem]);
            delete invElem[focusedItem];
            delete inv[focusedItem];
            focusedItem = null;
        }else {
            inv[focusedItem] -= 1;
            invElem[focusedItem].innerText = focusedItem + " : " + inv[focusedItem];

        }

    }
}

function isCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.w &&
           rect1.x + rect1.w > rect2.x &&
           rect1.y < rect2.y + rect2.h &&
           rect1.y + rect1.h > rect2.y;
}

function createPlayer() {
    player = document.createElement("div");
    player.classList.add("player", "idle");
    parent.appendChild(player);
}

let buttonsUp = [false, false];
let buttonsVUp = [false, false];

function handleKeyDown(event){
    console.log("Key pressed: ", event.key, "Focused Element: ", window.onfocus);
    switch(event.key){
        case "a":
        case "A":
            if (!paused){
                buttonsUp[0] = true;
                playerHV = -1;
            }
            break;
        case "d":
        case "D":
            if (!paused){
                buttonsUp[1] = true;
                playerHV = 1;
            }
            break;
        case "w":
        case "W":
            if (!paused){
                buttonsVUp[0] = true;
                playerVV = -1;
            }
            break;
        case "s":
        case "S":
            if (!paused){
                buttonsVUp[1] = true;
                playerVV = 1;
            }
            break;        
       
    }

    switch (event.code){
        case "Space":
            if (!isJumping && onGround && !paused){
                isJumping = true;
                playerVV = playerJH;
                onGround = false;
            }
            break;
        
    }
}

function handleKeyUp(event){
    switch(event.key){
        case "a":
        case "A":
            buttonsUp[0] = false;
            break;
        
        case "d":
        case "D":
            buttonsUp[1] = false;
            break;

        case "w":
        case "W":
            buttonsVUp[0] = false;
            break;

        case "s":
        case "S":
            buttonsVUp[1] = false;
            break;   
       
    }
}

const buttons = document.getElementsByClassName("moveButton");

function init() {
    createPlayer();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    console.log("events started");

    requestAnimationFrame(mainLoop);
}

function updatePlayerPos(x, y) {
    playerRect.x = x;
    playerRect.y = y;
    player.style.left = x + "vw";
    player.style.top = y + "vh";
}

const city = document.getElementById("city1");
const ocean = document.getElementById("oceanRoom");
const oceanCol = ocean.getElementsByClassName("col");
const oceanElem = Array.prototype.filter.call(
    oceanCol,
    (oceanCol) => oceanCol.nodeName === "DIV"
);

let oceanColRects = [];

function updateColliders() {

    oceanColRects = [];

    for (let i = 0; i < oceanElem.length; i++) {
        let style = getComputedStyle(oceanElem[i]);
        let x = style.left;
        let y = style.top;

        if (x.includes("px")) {
            x = parseInt(x, 10);
        } else if (x.includes("%")) {
            x = window.innerWidth * ((parseInt(x, 10)) / 100);
        }

        if (y.includes("px")) {
            y = parseInt(y, 10);
        } else if (y.includes("%")) {
            y = window.innerHeight * ((parseInt(y, 10)) / 100);
        }

        oceanColRects.push({x: (x/window.innerWidth)*100, y: (y/window.innerHeight)*100, w: (parseInt(style.width, 10)/window.innerWidth)*100, h: (parseInt(style.height, 10)/window.innerHeight)*100, walkthrough: oceanElem[i].classList.contains("walkthrough")});
    }
}
updateColliders();

function handleCollisions() {
    let newPRect = {x: playerRect.x+(playerHV*playerSpd), y: playerRect.y + playerVV, w: playerRect.w, h: playerRect.h};
    
    if (parent.id === "oceanRoom") {
        oceanColRects.forEach(collider => {
            //horizontal collisions first

            
            if (isCollision(newPRect ,collider)){
                if (playerRect.y + playerRect.h + playerVV < collider.y){
                    playerVV = 0;
                    playerRect.y = collider.y - playerRect.h;
                }
                if (playerRect.y > collider.y + collider.w){
                    playerVV = 0;
                    playerRect.y = collider.y+collider.w;
                }
                    playerHV = 0;
                    if (playerRect.x > collider.x+collider.w){
                        playerRect.x = collider.x+collider.w;
                    }
                    if (playerRect.x+playerRect.w < collider.x){
                        playerRect.x = collider.x-playerRect.w;
                    }
                
            }
        });
        
    }


    if (playerRect.y + playerRect.h + playerVV > 100) {
        playerVV = 0;
        playerRect.y = 100 - playerRect.h;
    }
    
}

function getRandomInt(min,max){ 
    return Math.floor(Math.random() * (max-min) + min);
}

floatingItems = [];
numOfFloating = 0;
function spawnFloatingItems(itemType, itemSpeed) {
    let spawnItem = getRandomInt(0, 20000);
    if (spawnItem <= 25 && numOfFloating < 20) {
        let newItem = document.createElement("div");
        newItem.classList.add(itemType, "floatingItem");
        parent.appendChild(newItem);


        let itemStyle = getComputedStyle(newItem);
        let initialX = 120; // Start position off the right side of the screen
        let initialY = 100 - ((parseInt(itemStyle.height)/window.innerHeight)*100) - getRandomInt(0, 4); // Random vertical position

        // Set the initial position of the floating item
        newItem.style.position = 'absolute';
        newItem.style.left = initialX + 'vw';
        newItem.style.top = initialY + 'vh';

        floatingItems.push({
            element: newItem,
            position: { x: initialX, y: initialY },
            width: (parseInt(itemStyle.width)/window.innerWidth) * 100,
            height: (parseInt(itemStyle.height, 10)/window.innerHeight) * 100,
            speed: itemSpeed,
            name: itemType
        });
        numOfFloating += 1;
    }
}

function updateFloatingItems() {
    floatingItems.forEach((item, index) => {
        item.position.x -= item.speed;

        if (isCollision(playerRect, {x:item.position.x, y:item.position.y, w:item.width, h:item.height})){
            if (parent.contains(item.element)){
                parent.removeChild(item.element);
            }
            floatingItems.splice(index, 1);
            addToInv(item.name, 1, "items");
            numOfFloating -= 1;
            console.log("picked up wood");
        }else if (item.position.x <= -10){
            if (parent.contains(item.element)){
                parent.removeChild(item.element);
            }
            floatingItems.splice(index, 1);
            numOfFloating -= 1;
        }else{
            item.element.style.left = item.position.x + 'vw';
            item.element.style.top = item.position.y + 'vh';
        }
    });
}

function update() {
    let pStyle = getComputedStyle(player);

    if (!buttonsUp.includes(true)){
        playerHV = 0;
    }
    if (!buttonsVUp.includes(true)){
        playerVV = 0;
    }

    updateColliders();
    if (!paused){
        spawnFloatingItems("wood", .07);
        updateFloatingItems();
        handleCollisions();
        updatePlayerPos(playerRect.x + (playerHV * playerSpd), playerRect.y + playerVV);
    }
}

function mainLoop(currentTime) {
    if (!running) return;

    let deltaTime = currentTime - oldTime;
    oldTime = currentTime;
    accumulator += deltaTime;

    while (accumulator >= frameDuration) {
        update();
        accumulator -= frameDuration;
    }

    requestAnimationFrame(mainLoop);
}

init();
