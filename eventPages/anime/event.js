let ids = {
    "Uncle Grandpa": "tt3042608",
    "American Dad": "tt0397306",
    "Rick and Morty": "tt2861424",
    "Smiling Friends": "tt12074628",
    "Paradise PD": "tt8235236",
    "Farzar": "tt14589904",
    "Family Guy": "tt0182576",
    "The Simpsons": "tt0096697",
    "King of the Hill": "tt0118375",
    "Hoops": "tt9077562",
    "Chicago Party Aunt": "tt15125616",
    "Adventure Time": "tt1305826",
    "Regular Show": "tt1710308",
    "Spongebob Squarepants": "tt0206512",
    "Gravity Falls": "tt1865718",
    "Futurama": "tt0149460",
    "South Park": "tt0121955",
    "Teen Titans": "tt0343314",
    "Courage the Cowardly Dog": "tt0220880",
    "DuckTales": "tt5531466",
    "Dexter's Laboratory": "tt0115157",
    "The Grim Adventures of Billy & Mandy": "tt0292800",
    "Animaniacs": "tt0105941",
    "Samurai Jack": "tt0278238",
    "Scooby Doo Mystery Incorporated": "tt1660055",
    "Batman the Animated Series": "tt0103359",
    "Avatar the Last Airbender": "tt0417299",
    "Total Drama": "tt1173427",
    "Ben 10": "tt0760437",
    "The Legend of Korra": "tt1695360",
    "Codename Kids Next Door": "tt0312109",
    "Archer": "tt1486217",
    "Big Mouth": "tt6524350",
    "Bob's Burgers": "tt1561755",
    "Solar Opposites": "tt8910922",
    "BoJack Horseman": "tt3398228",
    "The Venture Bros.": "tt0417373",
    "Beavis and Butt-Head": "tt0105950",
    "Final Space": "tt6317068",
    "Tuca & Bertie": "tt8036272",
    "Superjail!": "tt1031283",
    "Mr. Pickles": "tt2950342",
    "Happy Tree Friends": "tt0770762",
    "Sealab 2021": "tt0278877",
    "Robot Chicken": "tt0437745",
    "The Owl House": "tt8050756",
    "Hilda": "tt6385540",
    "Primal": "tt10332508",
    "The Midnight Gospel": "tt11639414",
    "The Amazing World of Gumball": "tt1942683",
    "Star Wars: Rebels": "tt2930604",
    "Teen Titans Go!": "tt2771780",
    "The Addams Family": "tt0101272",
    "The Proud Family": "tt0293737",
    "Moral Orel": "tt0476922",
    "Mighty Magiswords": "tt4847134",
    "Krapopolis": "tt14016574",
    "Beastars": "tt11043632"
};

let showInfo = {
    "Uncle Grandpa": {seasons:5, episodes:[49, 26, 26, 26, 23]},
    "Gravity Falls": {seasons:2, episodes:[20, 21]},
    "American Dad!": { seasons: 20, episodes: [23, 19, 20, 20, 18, 20, 19, 20, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] },
    "Rick and Morty": { seasons: 7, episodes: [11, 10, 10, 10, 10, 10, 10] },
    "Smiling Friends": {seasons: 2, episodes:[9,8]},
    "Family Guy": { seasons: 22, episodes: [7, 21, 22, 30, 18, 21, 16, 22, 21, 19, 23, 21, 18, 21, 20, 18, 19, 18, 20, 20, 20, 22] },
    "The Simpsons": { seasons: 35, episodes: [13, 22, 24, 22, 24, 25, 25, 25, 25, 25, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] },
    "King of the Hill": { seasons: 13, episodes: [12, 24, 25, 24, 20, 22, 23, 24, 22, 15, 18, 22, 24] },
    "Adventure Time": { seasons: 10, episodes: [26, 26, 26, 26, 26, 26, 26, 27, 14, 16] },
    "Teen Titans": {seasons:5, episodes:[13,13,13,13,13]},
    "Samurai Jack": {seasons:5, episodes:[13, 13, 13, 13, 10]},
    "Scooby Doo Mystery Incorporated": {seasons:2, episodes:[26,26]},
    "Batman the Animated Series": {seasons:4, episodes:[50,10,10,5]},
    "Avatar the Last Airbender": {seasons:3, episodes:[20, 20, 21]},
    "Total Drama": {seasons:5, episodes:[28,27,26,13,26]},
    "Ben 10": {seasons:4, episodes:[13,13,13,13]},
    "The Legend of Korra": {seasons:4, episodes:[12, 14, 13, 13]},
    "Codename Kids Next Door": {seasons:6, episodes:[13, 13, 13, 13, 13, 13]},
    "Archer": { seasons: 14, episodes: [10, 13, 13, 13, 13, 13, 10, 8, 8, 9, 8, 8, 8, 8] },
    "BoJack Horseman": { seasons: 6, episodes: [12, 12, 12, 12, 16, 16] },
    "The Venture Bros.": { seasons: 7, episodes: [13, 13, 13, 16, 16, 8, 10] },
    "Beavis and Butt-Head": { seasons: 10, episodes: [7, 24, 50, 42, 50, 50, 50, 50, 50, 50] },
    "Primal": {seasons:2, episodes:[10,10]},
    "Paradise PD": { seasons: 4, episodes: [10,8,12,10] },
    "Farzar": { seasons: 1, episodes: [10] },
    "Hoops": { seasons: 1, episodes: [10] },
    "Chicago Party Aunt": { seasons: 2, episodes: [8,8] },
    "Spongebob Squarepants": { seasons: 14, episodes: [20,20,20,20,20,26,26,26,26,11,26,26,26,16] },
    "Courage the Cowardly Dog": { seasons: 4, episodes: [13,13,13,13] },
    "Dexter's Laboratory": { seasons: 4, episodes: [13,40,13,13] },
    "The Grim Adventures of Billy & Mandy": { seasons: 6, episodes: [15,16,13,7,13,12] },
    "Animaniacs": { seasons: 5, episodes: [50,4,13,8,9] },
    "Final Space": { seasons: 3, episodes: [10,13,13] },
    "Tuca & Bertie": { seasons: 3, episodes: [10,10,10] },
    "Superjail!": { seasons: 4, episodes: [11,10,10,6] },
    "Mr. Pickles": { seasons: 4, episodes: [10,10,10,1] },
    "Happy Tree Friends": { seasons: 5, episodes: [28,8,6,14,5] },
    "Sealab 2021": { seasons: 5, episodes: [10,11,12,11,8] },
    "Robot Chicken": { seasons: 11, episodes: [22, 21, 20, 20, 20, 21, 20, 20, 20, 20, 20] },
    "The Owl House": { seasons: 3, episodes: [19,21,3] },
    "Hilda": { seasons: 3, episodes: [13,13,8] },
    "The Midnight Gospel": { seasons: 1, episodes: [8] },
    "The Amazing World of Gumball": { seasons: 7, episodes: [36, 40, 40, 46, 40, 44, 15] },
    "Star Wars: Rebels": { seasons: 4, episodes: [14, 22, 22, 15] },
    "Teen Titans Go!": {seasons: 9, episodes:[52, 52, 52, 52, 52, 52, 52, 52, 52]},
    "The Addams Family": {seasons: 1, episodes:[21]},
    "The Proud Family": {seasons: 2, episodes:[13, 39]},
    "Moral Orel": {seasons: 3, episodes:[13, 13, 13]},
    "Mighty Magiswords": {seasons: 2, episodes:[20, 68]},
    "Krapopolis": {seasons: 1, episodes:[10]},
    "Beastars": {seasons: 3, episodes:[12, 12, 12]}
};
  

function changePage(page){
    location.replace(page);
}

const reversedIds = Object.fromEntries(
    Object.entries(ids).map(([show, id]) => [id, show])
);

function killPopup(){
    document.getElementById("popup").style.display = "none";
}

let currentId;

let isShow = false;
let isMovie = false;
let isVid = true;
let isMulti = false;

function isshowormovie(id){
    const showInput = findShowById(id);
    if (showInfo[showInput]){
        isShow = true;
        isMovie = false;
    }
    if (!showInfo[showInput]){
        isMovie = true;
        isShow = false;

    }
}

function toMulti(){
    document.getElementById("vidsrc").disabled = false;
    document.getElementById("multiembed").disabled = true;
    isVid = false;
    isMulti = true;
}

function toVid(){
    document.getElementById("multiembed").disabled = false;
    document.getElementById("vidsrc").disabled = true;
    isMulti = false;
    isVid = true;
}

let activeSeason = 1;
let activeEpisode = 1;

function findShowById(idToFind) {
    return reversedIds[idToFind] || null; // Direct lookup
}

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('video');

    if (iframe) {
        iframe.addEventListener('load', () => {
            const iframeDocument = iframe.contentDocument;
            if (iframeDocument) {
                const style = document.createElement('style');
                style.textContent = `
                    .overlay-class, .ads-class {
                        display: none !important;
                    }
                `;
                iframeDocument.head.appendChild(style);

                iframeDocument.addEventListener('click', (event) => {
                    if (event.target.matches('.overlay-class, .ads-class')) {
                        event.stopImmediatePropagation();
                        console.log('Blocked click on overlay or ad');
                    }
                });
            }
        });
    }

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const infoDiv = document.getElementById('info');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query == ""){
            listShows();
        }else if (query) {
            searchIMDb(query);
        }
    });

    function listShows() {
        resultsContainer.innerHTML = '';

        for (const [title, id] of Object.entries(ids)) {
            const resultButton = document.createElement('button');
            resultButton.textContent = `${title}`;
            resultButton.id = id;
            resultButton.addEventListener('click', () => {
                updateIframeSource(id);
            });
            resultButton.classList.add("searchResult");
            resultsContainer.appendChild(resultButton);
        }
    }
    listShows()
    function searchIMDb(query) {
        resultsContainer.innerHTML = '';

        for (const [title, id] of Object.entries(ids)) {
            if (title.toLowerCase().includes(query.toLowerCase())) {
                const resultButton = document.createElement('button');
                resultButton.textContent = `${title}`;
                resultButton.addEventListener('click', () => {
                    updateIframeSource(id);
                });
                resultButton.classList.add("searchResult");
                resultsContainer.appendChild(resultButton);
            }
        }

    }

    function updateIframeSource(id) {
        isshowormovie(id);
        if (isShow){
            const season = document.getElementById("season")?.value || 1;
            const episode = document.getElementById("episode")?.value || 1;
            currentId = id;
            if (isVid){
                iframe.src = `https://vidsrc.xyz/embed/tv?imdb=${id}&season=${activeSeason}&episode=${activeEpisode}`;
            }
            if (isMulti){
                iframe.src = `https://multiembed.mov/?video_id=${id}&s=${activeSeason}&e=${activeEpisode}`;
            }
            displaySeasonsAndEpisodes(id);
        }else if (isMovie) {
            if (isVid){
                iframe.src = `https://vidsrc.xyz/embed/movie?imdb=${id}`;
            }
            if (isMulti){
                iframe.src = `https://multiembed.mov/?video_id=${id}`;
            }
        
        }
    }

    function displaySeasonsAndEpisodes(id) {
        const showInput = findShowById(id);
        const imdbIdDisplay = document.getElementById("imdbIdDisplay");
        const seasonsContainer = document.getElementById("seasonsPlace");
        const infoDiv = document.getElementById("info");
        seasonsContainer.innerHTML = "";
    
        seasonsContainer.innerHTML = null;
        
        if (ids[showInput]) {
    
            if (showInfo[showInput]) {
                const seasons = showInfo[showInput].seasons;
                const episodes = showInfo[showInput].episodes;
    
                for (let i = 0; i < seasons; i++) {
                    const seasonBut = document.createElement("button");
                    seasonBut.innerText = `S ${i + 1}`;
                    seasonBut.id = `s${i+1}`;
                    seasonBut.classList.add("seasonDis");
                    seasonBut.addEventListener('click', (event) => {
                        updateSeason(i + 1);
                        updateEps(id);
                    });
                    seasonsContainer.appendChild(seasonBut);
                }
            }
        }
    }

    function updateEps(id) {
        const showInput = findShowById(id);
        const seasons = showInfo[showInput].seasons;
        const episodes = showInfo[showInput].episodes;

        let seasonDiv = document.getElementById("seasonDiv");
        seasonDiv.innerHTML = null;

        for (let x = 0; x < episodes[activeSeason-1]; x++) {
            const episodeBtn = document.createElement("button");
            episodeBtn.classList.add("episodeBtn");
            episodeBtn.innerText = `E ${x+1}`;
            episodeBtn.id = `E${x+1}`;
            episodeBtn.addEventListener('click', (event) => {
                updateEpisode(x+1);
                updateIframeSource(currentId);
            });
            seasonDiv.appendChild(episodeBtn);
        }
    }
});

function playNextEpisode(){
    const showInput = findShowById(currentId);
    const seasons = showInfo[showInput].seasons;
    const episodes = showInfo[showInput].episodes;

    if (activeEpisode+1 > episodes[activeSeason-1]){
        if (activeSeason+1 > seasons){
            console.log("No more seasons or episodes");
            alert("you finished the show congrats");
        }else {
            console.log("No more episodes in season");
            activeSeason += 1;
            activeEpisode = 1;
            playEpisode();
        }
    }else {
        console.log("changing to next episode");
        activeEpisode += 1;
        playEpisode();
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let prevSeas, prevEpis;
function updateSelection(){
    console.log(`S${activeSeason} E${activeEpisode}`);
    if (prevEpis){
        prevEpis.style.backgroundColor = "#FEF3E2";
        prevEpis.style.color = "#333";
    }
    if (prevSeas){
        prevSeas.style.backgroundColor = "#BBE9FF";
        prevSeas.style.color = "#333";
    }

    let newseason = document.getElementById(`s${activeSeason}`);
    let newepisode = document.getElementById(`E${activeEpisode}`);
    prevSeas = newseason;
    prevEpis = newepisode;
    if (newseason) {
        newseason.style.backgroundColor = "#B1AFFF";
     } else {
        console.error(`Element with ID S${activeSeason} not found`);
    }

    if (newepisode) {
        newepisode.style.backgroundColor = "#EF5A6F";
    } else {
        console.error(`Element with ID E${activeEpisode} not found`);
    }
}

async function update(){
    await sleep(100);
    updateSelection();

    window.requestAnimationFrame(update);
}

function init(){
    window.requestAnimationFrame(update);
}
init();

function updateSeason(season){
    activeSeason = season;
}

function updateEpisode(ep){
    activeEpisode = ep;
}

function playEpisode(){
    if (isShow){
        const iframe = document.getElementById('video');
        if (isVid){
            iframe.src = `https://vidsrc.xyz/embed/tv?imdb=${currentId}&season=${activeSeason}&episode=${activeEpisode}`;
        }
        if (isMulti){
            iframe.src = `https://multiembed.mov/?video_id=${currentId}&s=${activeSeason}&e=${activeEpisode}`;
        }
    }
}
