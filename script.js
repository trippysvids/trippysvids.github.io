function killPopup(){
    document.getElementById("welcome").style.display = "none";
    document.getElementById("shows").disabled = false;
    document.getElementById("movies").disabled = false;
}

function changePage(page){
    location.replace(page);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function goToShows(){
    location.replace("mainPlayer/shows.html");
}

function goToMovies(){
    location.replace("mainPlayer/movies.html");
}

function addClass(id, className){
    const object = document.getElementById(id);
    object.classList.add(className);
}

function removeClass(id, className){
    const object = document.getElementById(id);
    console.log(id);
    object.classList.remove(className);
}

const arrowL = document.getElementById("arrowLeft");
const arrowR = document.getElementById("arrowRight");
arrowL.addEventListener("click", arrowAnimationLeft);
arrowR.addEventListener("click", arrowAnimationRight);

let switching = false;
let previousChoiceLeft, previousIndexLeft, previousChoiceRight, previousIndexRight;
let activeChoice = "halloween";
let activeIndex = 0;
let projects = ["halloween", "christmas", "anime"];
async function arrowAnimationLeft(){
    if (!switching){
        switching = true;
        addClass(activeChoice, "exitLeft");
        await sleep(1000);
        removeClass(activeChoice, "titleScreenActive");
        addClass(activeChoice, "titleScreenInactive");
        removeClass(activeChoice, "exitLeft");
        if (!projects[activeIndex-1]){
            console.log("New Project: " + projects[projects.length-1]);
            activeChoice = projects[projects.length-1];
            activeIndex = projects.length-1;
        }else{
            activeChoice = projects[activeIndex-1];
            activeIndex = activeIndex-1;
        }
        removeClass(activeChoice, "titleScreenInactive");
        addClass(activeChoice, "titleScreenActive");
        addClass(activeChoice, "enterRight");
        await sleep(1000);
        removeClass(activeChoice, "enterRight");
        switching = false;
    }
}

async function arrowAnimationRight(){
    if (!switching){
        switching = true;
        addClass(activeChoice, "exitRight");
        await sleep(1000);
        removeClass(activeChoice, "titleScreenActive");
        addClass(activeChoice, "titleScreenInactive");
        removeClass(activeChoice, "exitRight");
        if (!projects[activeIndex+1]){
            activeChoice = projects[0];
            activeIndex = 0;
        }else{
            activeChoice = projects[activeIndex+1];
            activeIndex = activeIndex+1;
        }
        removeClass(activeChoice, "titleScreenInactive");
        addClass(activeChoice, "titleScreenActive");
        addClass(activeChoice, "enterLeft");
        await sleep(1000);
        removeClass(activeChoice, "enterLeft");
        switching = false;
    }
}