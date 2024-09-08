let ids = {
    "Simpsons Treehouse Of Horrors": "tt0096697",
    "Halloween (1978)": "tt0077651",
    "Halloween II (1981)": "tt0082495",
    "Halloween III Seasons of the Witch (1982)": "tt0085636",
    "Halloween 4 The Return of Micheal Myers" : "tt0095271",
    "Halloween 5 The Revenge of Micheal Myers" : "tt0097474",
    "Halloween The Curse of Micheal Myers": "tt0113253",
    "Halloween H20: 20 years later": "tt0120694",
    "Halloween Resurrection": "tt0220506",
    "Regular Show: Tales From The Park": "tt1710308",
    "Firday the 13th (1980)": "tt0080761",
    "Friday the 13th Part Two (1981)": "tt0082418",
    "Friday the 13th Part Three (1982)": "tt0083972",
    "Friday the 13th The Final Chapter": "tt0087298",
    "Friday the 13th A New Beginning": "tt0089173",
    "Friday the 13th Part VI Jason Lives": "tt0091080",
    "Friday the 13th Part VII The New Blood": "tt0095179",
    "Friday the 13th Part VIII Jason Take Manhattan": "tt0097388",
    "Friday the 13th Part IX Jason Goes to Hell": "tt0107254",
    "Friday the 13th Part X Jason X": "tt0211443",
    "Freddy Vs Jason": "tt0329101",
    "Trick 'r Treat": "tt0862856",
    "The Shining": "tt0081505",
    "Doctor Sleep": "tt5606664",
    "Shaun of the Dead": "tt0365748",
    "Dawn of the Dead": "tt0363547",
    "Night of the Living Dead": "tt0063350",
    "The Cabin In The Woods": "tt1259521",
    "American Dad": "tt0397306",
    "Mandy": "tt6998518",
    "Evil Bong": "tt0829424",
    "A Nightmare On Elm Street (1984)": "tt0087800",
    "A Nightmare On Elm Street 2 Freddy's Revenge": "tt0089686",
    "A Nightmare On Elm Street 3 Dream Warriors": "tt0093629",
    "A Nightmare On Elm Street 4 The Dream Master": "tt0095742",
    "A Nightmare On Elm Street 5 The Dream Child": "tt0097981",
    "Freddy's Dead The Final Nightmare": "tt0101917",
    "Wes Cravens New Nightmare": "tt0111686",
    "It": "tt1396484",
    "It Chapter 2": "tt7349950",
    "The Evil Dead (1981)": "tt0083907",
    "Evil Dead 2 (1987)": "tt0092991",
    "Army of Darkness (1992)": "tt0106308",
    "Killer Klownz From Outer Space": "tt0095444",
    "The Mist (2007)": "tt0884328",
    "Candyman (1992)": "tt0103919",
    "Candyman Farewell to the Flesh": "tt0112625",
    "Candyman 3: Day of the Dead": "tt0165662",
    "Candyman (2021)": "tt9347730",
    "The Mist (2017)": "tt5639976",
    "Hocus Pocus": "tt0107120",
    "Hocus Pocus 2": "tt11909878",
    "Evil Dead (2013)": "tt1288558",
    "Evil Dead Rise (2023)": "tt13345606", 
    "Halloweentown (1998)": "tt0173886",
    "Halloweentown 2 Kalabar's Revenge": "tt0274761",
    "Halloweentown High": "tt0414078",
    "Return to Halloweentown": "tt0816520",
    "Halloween (2007)": "tt0373883",
    "Halloween 2 (2009)": "tt22485786",
    "Halloween (2018)": "tt1502407",
    "Halloween Kills (2021)": "tt10665338",
    "Halloween Ends (2022)": "tt10665342",
     
};

let showInfo = {
    "Simpsons Treehouse Of Horrors": {seasons: 35, episodes:[0, 3, 6, 5, 5, 6, 6, 1, 5, 4, 4, 1, 1, 1, 1, 1, 4, 4, 5, 4, 4, 4, 3, 2, 2, 4, 5, 4, 4, 4, 4, 4, 3, [5,6], 5, 5]},
    "Regular Show: Tales From The Park": {seasons: 8, episodes:[0, 0, 4, 3, 8, 4, 8, 19]},
    "American Dad": {seasons:18, episodes:[18, 2, 0, [5,7], 18, 3, [1,2], 0, [2, 10], 0, 10, [9, 17, 21], [8, 20], [4, 17], [7, 9], 22, [17, 21], 4]},
};

const reversedIds = Object.fromEntries(
    Object.entries(ids).map(([show, id]) => [id, show])
);

function changePage(page){
    location.replace(page);
}

function findShowById(idToFind) {
    return reversedIds[idToFind] || null; // Direct lookup
}

let currentId;

let isShow = false;
let isMovie = false;
let isVid = true;
let isMulti = false;

let activeSeason = 1;
let activeEpisode = 1;

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

document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('resultContainer');
    const infoDiv = document.getElementById('info');

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
    listShows();
    function updateIframeSource(id) {
        const iframe = document.getElementById("video");
        currentId = id;
        isshowormovie(id);
        if (isShow){
            if (isVid){
                iframe.src = `https://vidsrc.xyz/embed/tv?imdb=${id}&season=${1}&episode=${1}`;
            }
            if (isMulti){
                iframe.src = `https://multiembed.mov/?video_id=${id}&s=${1}&e=${1}`;
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

    function displaySeasonsAndEpisodes(id) {
        const showInput = findShowById(id);
        const seasonsContainer = document.getElementById("seasonsPlace");
        const episodes = showInfo[showInput].episodes;
        const infoDiv = document.getElementById("info");
        seasonsContainer.innerHTML = "";
    
        seasonsContainer.innerHTML = null;
        
        if (ids[showInput]) {
    
            if (showInfo[showInput]) {
                const seasons = showInfo[showInput].seasons;
                const episodes = showInfo[showInput].episodes;
    
                for (let i = 0; i < seasons; i++) {
                    if (episodes[i] > 0 || Array.isArray(episodes[i])){
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
    }

    function updateEps(id) {
        const showInput = findShowById(id);
        const seasons = showInfo[showInput].seasons;
        const episodes = showInfo[showInput].episodes;
    
        let seasonDiv = document.getElementById("seasonDiv");
        seasonDiv.innerHTML = ""; // Clear the div
    
        // Check if the episodes at the current season is an array or a single value
        if (Array.isArray(episodes[activeSeason - 1])) {
            // Loop through each episode in the array
            episodes[activeSeason - 1].forEach((episode) => {
                const episodeBtn = document.createElement("button");
                episodeBtn.classList.add("episodeBtn");
                episodeBtn.innerText = `E ${episode}`;
                episodeBtn.id = `E${episode}`;
                episodeBtn.addEventListener('click', (event) => {
                    activeEpisode = episode; // Set activeEpisode to the episode number
                    playEpisode();
                });
                seasonDiv.appendChild(episodeBtn);
            });
        } else if (episodes[activeSeason - 1] > 0) {
            // Handle the case where the episodes for this season is a single number
            const episodeBtn = document.createElement("button");
            episodeBtn.classList.add("episodeBtn");
            episodeBtn.innerText = `E ${episodes[activeSeason - 1]}`;
            episodeBtn.id = `E${episodes[activeSeason - 1]}`;
            episodeBtn.addEventListener('click', (event) => {
                activeEpisode = episodes[activeSeason - 1]; // Set activeEpisode
                playEpisode();
            });
            seasonDiv.appendChild(episodeBtn);
        } else {
            // No episodes available for this season, clear the episode div
            seasonDiv.innerHTML = "No episodes available for this season.";
        }
    }
    
    function playNextEpisode() {
        isshowormovie(currentId);
        let seasons, episodes, currentEpisodes = [];
        const showInput = findShowById(currentId);
    
        if (showInfo[showInput]) {
            seasons = showInfo[showInput].seasons;
            episodes = showInfo[showInput].episodes;
            currentEpisodes = episodes[activeSeason - 1]; // Get current season's episodes
        }

            // Check if episodes are an array or a single value
            if (Array.isArray(currentEpisodes)) {
                const nextIndex = currentEpisodes.indexOf(activeEpisode) + 1;
                
                // Check if this is the last episode in the array
                if (nextIndex >= currentEpisodes.length) {
                    // If so, move to the next season
                    if (activeSeason < seasons) {
                        activeSeason++;
                        activeEpisode = Array.isArray(episodes[activeSeason - 1])
                            ? episodes[activeSeason - 1][0]  // Start of the new season
                            : episodes[activeSeason - 1]; // If it's just a single episode
                        playEpisode();
                    } else {
                        // If no more seasons, move to the next show
                        moveToNextShow();
                    }
                } else {
                    activeEpisode = currentEpisodes[nextIndex]; // Move to next episode
                    playEpisode();
                }
            } else {
                // If it's a single episode per season, move to the next season
                if (activeEpisode < currentEpisodes) {
                    activeEpisode++;
                    playEpisode();
                } else {
                    if (activeSeason < seasons) {
                        activeSeason++;
                        activeEpisode = episodes[activeSeason - 1];
                        playEpisode();
                    } else {
                        moveToNextShow();
                    }
                }
            }
        
    }
    
    function moveToNextShow() {
        const showTitles = Object.keys(ids);
        const currentShowIndex = showTitles.indexOf(findShowById(currentId));
        let nextShowIndex = currentShowIndex + 1;
    
        if (nextShowIndex >= showTitles.length) {
            alert("Congrats on finishing the Halloween section");
        } else {
            const nextShowTitle = showTitles[nextShowIndex];
            currentId = ids[nextShowTitle];
            updateIframeSource(currentId);
        }
    }
    
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    let prevSeas, prevEpis, prevShow;
    function updateSelection(){
        console.log(`S${activeSeason} E${activeEpisode}`);
        if (prevEpis){
            prevEpis.style.backgroundColor = "#e9bc83";
            prevEpis.style.color = "#333";
        }
        if (prevSeas){
            prevSeas.style.backgroundColor = "#e56a49";
            prevSeas.style.color = "#333";
        }
        if (prevShow){
            prevShow.style.backgroundColor = "#e56a49";
            prevShow.style.color = "#333";
        }
    
        let newseason = document.getElementById(`s${activeSeason}`);
        let newepisode = document.getElementById(`E${activeEpisode}`);
        let newShow = null;
        if (currentId){
            newShow = document.getElementById(currentId);
            prevShow = newShow;
        }
        prevSeas = newseason;
        prevEpis = newepisode;

        if (newseason) {
            newseason.style.backgroundColor = "#6e3845";
        }

        if (newShow){
            newShow.style.backgroundColor = "#6e3845";
        }
    
        if (newepisode) {
            newepisode.style.backgroundColor = "#cd7f4f";
        }
    }
    
    async function update(){
        await sleep(100);
        if (isShow){
            updateSelection();
        }
    
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
        isshowormovie(currentId);
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

    const playButton = document.getElementById("play");
    playButton.addEventListener('click', function(){
        playNextEpisode();
    });
});
