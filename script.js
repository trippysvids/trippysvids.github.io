let ids = {
    "Rick and Morty": "tt2861424",
    "South Park": "tt0121955",
    "Family Guy": "tt0182576",
    "The Simpsons": "tt0096697",
    "BoJack Horseman": "tt3398228",
    "Futurama": "tt0149460",
    "Archer": "tt1486217",
    "Big Mouth": "tt6524350",
    "Bob's Burgers": "tt1561755",
    "Solar Opposites": "tt8910922",
    "King of the Hill": "tt0118375",
    "The Venture Bros.": "tt0417373",
    "American Dad!": "tt0397306",
    "DuckTales": "tt5531466",
    "Beavis and Butt-Head": "tt0105950",
    "Daria": "tt0118298",
    "Final Space": "tt6317068",
    "Tuca & Bertie": "tt8036272",
    "Superjail!": "tt1031283",
    "Mr. Pickles": "tt2950342",
    "Happy Tree Friends": "tt0770762",
    "Sealab 2021": "tt0278877",
    "Robot Chicken": "tt0437745",
    "Adventure Time": "tt1305826",
    "Gravity Falls": "tt1865718",
    "Regular Show": "tt1710308",
    "Samurai Jack": "tt0278238",
    "The Owl House": "tt8050756",
    "Hilda": "tt6385540",
    "Primal Fear": "tt0117381",
    "The Midnight Gospel": "tt11639414",
    "Bing": "tt3789822",
    "The Amazing World of Gumball": "tt1942683",
    "Star Wars: The Clone Wars": "tt0458290",
    "Star Wars: Rebels": "tt2930604",
    "Teen Titans Go!": "tt2771780",
    "The Addams Family": "tt0101272",
    "The Proud Family": "tt0293737",
    "Moral Orel": "tt0476922",
    "Mighty Magiswords": "tt4847134",
    "Krapopolis": "tt14016574",
    "Beastars": "tt11043632",
    "Breaking Bad": "tt0903747",
    "Game of Thrones": "tt0944947",
    "Stranger Things": "tt4574334",
    "The Office": "tt0386676",
    "Friends": "tt0108778",
    "The Crown": "tt4786824",
    "Black Mirror": "tt2085059",
    "Narcos": "tt2707408",
    "The Mandalorian": "tt8111088",
    "Westworld": "tt0475784",
    "Better Call Saul": "tt3032476",
    "The Sopranos": "tt0141842",
    "Mad Men": "tt0804503",
    "Sherlock": "tt1475582",
    "The Wire": "tt0306414",
    "Ozark": "tt5071412",
    "Parks and Recreation": "tt1266020",
    "Fargo": "tt2802850",
    "True Detective": "tt2356777",
    "The Haunting of Hill House": "tt6763664",
    "Vikings": "tt2306299",
    "The X-Files": "tt0106179",
    "The Americans": "tt2149175",
    "The West Wing": "tt0200276",
    "Curb Your Enthusiasm": "tt0264235",
    "Brooklyn Nine-Nine": "tt2467372",
    "Supernatural": "tt0460681",
    "How I Met Your Mother": "tt0460649",
    "Modern Family": "tt1442437",
    "House of Cards": "tt1856010",
    "Sons of Anarchy": "tt1124373",
    "Deadwood": "tt0348914",
    "Mr. Robot": "tt4158110",
    "The Big Bang Theory": "tt0898266",
    "GLOW": "tt5770786",
    "Atlanta": "tt4288182",
    "The Expanse": "tt3230854",
    "The Magicians": "tt4254242",
    "Avenue 5": "tt10234362",
    "The Good Place": "tt4955642",
    "The Last Kingdom": "tt4179452",
    "Lucifer": "tt4052886",
    "My Brilliant Friend": "tt7278862",
    "The Umbrella Academy": "tt1312171",
    "The Boys": "tt1190634",
    "Hannibal": "tt2243973",
    "Narcos: Mexico": "tt8714904",
    "Schitt's Creek": "tt3526078",
    "You": "tt7335184",
    "Killing Eve": "tt7016936",
    "The Great": "tt2235759",
    "Ramy": "tt7649694",
    "Ted Lasso": "tt10986410",
    "The Sandman": "tt1751634",
    "Foundation": "tt0804484",
    "Andor": "tt9253284",
    "The Godfather": "tt0068646",
    "Pulp Fiction": "tt0110912",
    "Inception": "tt1375666",
    "The Shawshank Redemption": "tt0111161",
    "Fight Club": "tt0137523",
    "Forrest Gump": "tt0109830",
    "The Dark Knight": "tt0468569",
    "The Matrix": "tt0133093",
    "Interstellar": "tt0816692",
    "Parasite": "tt6751668",
    "The Avengers": "tt0848228",
    "The Lord of the Rings: The Fellowship of the Ring": "tt0120737",
    "Gladiator": "tt0172495",
    "The Departed": "tt0407887",
    "Django Unchained": "tt1853728",
    "Joker": "tt7286456",
    "The Silence of the Lambs": "tt0102926",
    "Goodfellas": "tt0099685",
    "Braveheart": "tt0112573",
    "The Usual Suspects": "tt0114814",
    "La La Land": "tt3783958",
    "The Revenant": "tt1663202",
    "Her": "tt1798709",
    "Whiplash": "tt2582802",
    "The Wolf of Wall Street": "tt0993846",
    "Once Upon a Time... in Hollywood": "tt7131622",
    "1917": "tt8579674",
    "A Beautiful Mind": "tt0268978",
    "The Green Mile": "tt0120689",
    "Se7en": "tt0114369",
    "City of God": "tt0317248",
    "Pan's Labyrinth": "tt0457430",
    "The Prestige": "tt0482571",
    "No Country for Old Men": "tt0477348",
    "The Grand Budapest Hotel": "tt2278388",
    "Catch Me If You Can": "tt0264464",
    "American Beauty": "tt0169547",
    "The Truman Show": "tt0120382",
    "There Will Be Blood": "tt0469494",
    "Gangs of New York": "tt0217505",
    "The Shape of Water": "tt5580390",
    "Blade Runner 2049": "tt1856101",
    "Arrival": "tt2543164",
    "Ex Machina": "tt0470752",
    "Gone Girl": "tt2267998",
    "The Big Short": "tt1596363",
    "Room": "tt3170832",
    "Spotlight": "tt1895587",
    "Midnight in Paris": "tt1605783",
    "Sicario": "tt3397884",
    "The Lighthouse": "tt7984734",
    "Hereditary": "tt7784604",
    "Annihilation": "tt2798920",
    "Jumanji: Welcome to the Jungle": "tt2283362",
    "The Imitation Game": "tt2084970",
    "The Nice Guys": "tt3799694",
    "Hacksaw Ridge": "tt2119532",
    "The Hunt for Red October": "tt0099810",
    "Casino Royale": "tt0381061",
    "Skyfall": "tt1074638",
    "The Bourne Identity": "tt0258463",
    "John Wick": "tt2911666",
    "The Equalizer": "tt0455944",
    "Drive": "tt0780504",
    "The Cabin in the Woods": "tt1259521",
    "Battlestar Galactica": "tt0407362",
    "Altered Carbon": "tt2261227",
    "Dark Matter": "tt19231492",
    "Star Trek: The Next Generation": "tt0092455",
    "Stargate SG-1": "tt0118480",
    "Fringe": "tt1119644",
    "Doctor Who": "tt0436992",
    "The Orville": "tt5691552",
    "Star Trek: Discovery": "tt5171438",
    "Firefly": "tt0303461",
    "The 100": "tt2661044",
    "Terra Nova": "tt1641349",
    "Vagrant Queen": "tt10394778",
    "Raised by Wolves": "tt9170108",
    "3 Body Problem": "tt13016388",
    "Blade Runner": "tt0083658",
    "Minority Report": "tt0181689",
    "Star Wars: Episode IV: A New Hope - Deleted Scenes": "tt8933914",
    "Star Wars: Episode V - The Empire Strikes Back": "tt0080684",
    "The Fifth Element": "tt0119116",
    "E.T. the Extra-Terrestrial": "tt0083866",
    "Terminator 2: Judgment Day": "tt0103064",
    "2001: A Space Odyssey": "tt0062622",
    "Gattaca": "tt0119177",
    "Looper": "tt1276104",
    "The Terminator": "tt0088247",
    "Children of Men": "tt0206634",
    "Predator": "tt0093773",
    "District 9": "tt1136608",
    "American Horror Story": "tt1844624",
    "Bates Motel": "tt2188671",
    "Penny Dreadful": "tt2628232",
    "The Exorcist": "tt0070047",
    "Marianne": "tt10875696",
    "Castle Rock": "tt6548228",
    "The Outsider": "tt8550800",
    "Fear the Walking Dead": "tt3743822",
    "Channel Zero": "tt4820370",
    "The Terror": "tt2708480",
    "Santa Clarita Diet": "tt5580540",
    "Ash vs Evil Dead": "tt4189022",
    "The Walking Dead": "tt1520211",
    "The Shining": "tt0081505",
    "Get Out": "tt5052448",
    "The Conjuring": "tt1457767",
    "It Ends with Us": "tt10655524",
    "A Quiet Place: Day One": "tt13433802",
    "The Babadook": "tt2321549",
    "The Witch": "tt4263482",
    "Rosemary's Baby": "tt0063522",
    "Psycho": "tt0054215",
    "Halloween": "tt0077651",
    "Scream": "tt0117571",
    "Bird Box": "tt2737304",
    "The Lord of the Rings: The Rings of Power": "tt7631058",
    "The Descent": "tt0435625",
    "Insidious": "tt1591095",
    "Evil Dead II": "tt0092991",
    "Midsommar": "tt8772262",
    "Terrifier": "tt4281724",
    "Terrifier 2": "tt10403420",
    "Basket Case": "tt0083624",
    "Basket Case 2": "tt0099108",
    "Basket Case 3": "tt0103773",
    "Guardians of the Galaxy": "tt2015381",
    "Guardians of the Galaxy 2": "tt3896198",
    "Guardians of the Galaxy 3": "tt6791350",
    "My Neighbor Totoro": "tt0096283",
    "Spirited Away": "tt0245429",
    "Castle in the Sky": "tt1620710",
    "The Secret World of Arrietty": "tt1568291",
    "Ponyo": "tt0876563",
    "Howl's Moving Castle": "tt0347149",
    "The Cat Returns": "tt0347618",
    "Adventure Time Fionna & Cake": "tt15248880",
    "Adventure Time Distant Lands": "tt11165358",
}

let showInfo = {
    "Rick and Morty": { seasons: 7, episodes: [11, 10, 10, 10, 10, 10, 10] },
    "South Park": { seasons: 27, episodes: [13, 17, 18, 17, 14, 17, 15, 14, 17, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 10, 10, 10, 6, 6, 6] },
    "Family Guy": { seasons: 22, episodes: [7, 21, 22, 30, 18, 21, 16, 22, 21, 19, 23, 21, 18, 21, 20, 18, 19, 18, 20, 20, 20, 22] },
    "The Simpsons": { seasons: 35, episodes: [13, 22, 24, 22, 24, 25, 25, 25, 25, 25, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] },
    "Bojack Horseman": { seasons: 6, episodes: [12, 12, 12, 12, 12, 16] },
    "Futurama": { seasons: 11, episodes: [9, 20, 15, 18, 16, 26, 26, 26, 26, 26, 26] },
    "Archer": { seasons: 14, episodes: [10, 13, 10, 13, 13, 13, 13, 10, 9, 8, 8, 8, 8, 10] },
    "Big Mouth": { seasons: 7, episodes: [10, 10, 10, 10, 10, 10, 10] },
    "Bob's Burgers": { seasons: 14, episodes: [13, 9, 23, 22, 22, 19, 22, 22, 22, 22, 22, 22, 22, 22] },
    "Solar Opposites": { seasons: 4, episodes: [8, 8, 12, 11] },
    "King of the Hill": { seasons: 13, episodes: [12, 24, 25, 24, 20, 22, 23, 24, 22, 15, 18, 22, 24] },
    "The Venture Bros.": { seasons: 7, episodes: [13, 13, 13, 13, 13, 13, 10] },
    "American Dad!": { seasons: 20, episodes: [23, 19, 20, 20, 18, 20, 19, 20, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] },
    "DuckTales": { seasons: 3, episodes: [65, 10, 30] },
    "Beavis and Butt-Head": { seasons: 9, episodes: [22, 19, 20, 8, 14, 7, 8, 12, 23] },
    "Daria": { seasons: 5, episodes: [13, 13, 13, 13, 13] },
    "Final Space": { seasons: 3, episodes: [10, 13, 13] },
    "Tuca & Bertie": { seasons: 3, episodes: [10, 10, 10] },
    "Superjail!": { seasons: 4, episodes: [10, 10, 10, 8] },
    "Mr. Pickles": { seasons: 4, episodes: [10, 10, 10, 10] },
    "Happy Tree Friends": { seasons: 4, episodes: [13, 13, 13, 13] },
    "Sealab 2021": { seasons: 4, episodes: [13, 13, 13, 13] },
    "Robot Chicken": { seasons: 12, episodes: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    "Adventure Time": { seasons: 10, episodes: [26, 26, 26, 26, 26, 26, 26, 27, 14, 16] },
    "Gravity Falls": { seasons: 2, episodes: [20, 20] },
    "Regular Show": { seasons: 8, episodes: [12, 24, 40, 39, 37, 39, 31, 31] },
    "Samurai Jack": { seasons: 5, episodes: [13, 13, 13, 13, 10] },
    "The Owl House": { seasons: 3, episodes: [19, 21, 3] },
    "Hilda": { seasons: 2, episodes: [13, 13] },
    "Primal": { seasons: 2, episodes: [10, 10] },
    "Midnight Gospel": { seasons: 1, episodes: [8] },
    "The Amazing World of Gumball": { seasons: 6, episodes: [36, 20, 21, 40, 40, 44] },
    "Star Wars: The Clone Wars": { seasons: 7, episodes: [22, 22, 20, 22, 13, 13, 12] },
    "Star Wars Rebels": { seasons: 4, episodes: [15, 22, 22, 16] },
    "Teen Titans Go!": { seasons: 8, episodes: [51, 52, 53, 52, 51, 52, 51, 54] },
    "The Addams Family (1992)": { seasons: 2, episodes: [13, 8] },
    "The Proud Family": { seasons: 2, episodes: [21, 21] },
    "Moral Orel": { seasons: 3, episodes: [10, 20, 13] },
    "Mighty Magiswords": { seasons: 2, episodes: [20, 20] },
    "Krapopolis": { seasons: 1, episodes: [6] },
    "Beastars": { seasons: 2, episodes: [12, 12] },
    "Breaking Bad": { seasons: 5, episodes: [7, 13, 13, 13, 16] },
    "Game of Thrones": { seasons: 8, episodes: [10, 10, 10, 10, 10, 10, 7, 6] },
    "Stranger Things": { seasons: 4, episodes: [8, 9, 8, 9] },
    "The Office": { seasons: 9, episodes: [6, 22, 23, 24, 28, 26, 26, 24, 23] },
    "Friends": { seasons: 10, episodes: [24, 24, 25, 24, 24, 25, 24, 24, 24, 18] },
    "The Crown": { seasons: 6, episodes: [10, 10, 10, 10, 10, 10] },
    "Black Mirror": { seasons: 6, episodes: [3, 6, 6, 6, 3, 5] },
    "Narcos": { seasons: 3, episodes: [10, 10, 10] },
    "The Mandalorian": { seasons: 3, episodes: [8, 8, 8] },
    "Westworld": { seasons: 4, episodes: [10, 10, 8, 8] },
    "Better Call Saul": { seasons: 6, episodes: [10, 10, 10, 10, 10, 13] },
    "The Sopranos": { seasons: 6, episodes: [13, 13, 13, 13, 13, 21] },
    "Mad Men": { seasons: 7, episodes: [13, 13, 13, 13, 13, 13, 14] },
    "Sherlock": { seasons: 4, episodes: [3, 3, 3, 3] },
    "The Wire": { seasons: 5, episodes: [13, 12, 12, 13, 10] },
    "Ozark": { seasons: 4, episodes: [10, 10, 14, 14] },
    "Mindhunter": { seasons: 2, episodes: [10, 9] },
    "True Detective": { seasons: 3, episodes: [8, 8, 8] },
    "The Boys": { seasons: 4, episodes: [8, 8, 8, 8] },
    "The Witcher": { seasons: 3, episodes: [8, 8, 8] },
    "The Haunting of Hill House": { seasons: 1, episodes: [10] },
    "Vikings": { seasons: 6, episodes: [10, 10, 10, 10, 10, 20] },
    "The X-Files": { seasons: 11, episodes: [24, 25, 25, 24, 25, 24, 24, 24, 24, 24, 11] },
    "The Americans": { seasons: 6, episodes: [13, 13, 13, 13, 13, 10] },
    "The West Wing": { seasons: 7, episodes: [22, 22, 21, 23, 22, 23, 21] },
    "Curb Your Enthusiasm": { seasons: 12, episodes: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
    "Brooklyn Nine-Nine": { seasons: 8, episodes: [22, 22, 23, 22, 22, 22, 22, 10] },
    "Supernatural": { seasons: 15, episodes: [22, 22, 22, 22, 22, 22, 22, 22, 22, 20, 23, 20, 23, 23, 20] },
    "How I Met Your Mother": { seasons: 9, episodes: [22, 22, 22, 24, 24, 24, 24, 24, 24] },
    "Modern Family": { seasons: 11, episodes: [24, 24, 24, 24, 24, 24, 22, 22, 22, 22, 18] },
    "House of Cards": { seasons: 6, episodes: [13, 13, 13, 13, 13, 8] },
    "Sons of Anarchy": { seasons: 7, episodes: [13, 13, 13, 13, 13, 13, 13] },
    "Deadwood": { seasons: 3, episodes: [12, 12, 12] },
    "Mr. Robot": { seasons: 4, episodes: [10, 12, 12, 12] },
    "The Big Bang Theory": { seasons: 12, episodes: [17, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] },
    "GLOW": { seasons: 3, episodes: [10, 10, 10] },
    "Atlanta": { seasons: 4, episodes: [10, 11, 11, 10] },
    "The Expanse": { seasons: 6, episodes: [10, 10, 12, 10, 10, 10] },
    "The Magicians": { seasons: 5, episodes: [13, 13, 13, 13, 13] },
    "Avenue 5": { seasons: 1, episodes: [9] },
    "The Good Place": { seasons: 4, episodes: [13, 13, 13, 14] },
    "The Last Kingdom": { seasons: 5, episodes: [8, 8, 8, 8, 8] },
    "Lucifer": { seasons: 6, episodes: [10, 10, 10, 10, 10, 10] },
    "My Brilliant Friend": { seasons: 4, episodes: [8, 8, 8, 8] },
    "The Umbrella Academy": { seasons: 3, episodes: [10, 10, 10] },
    "Hannibal": { seasons: 3, episodes: [13, 13, 13] },
    "Narcos: Mexico": { seasons: 3, episodes: [10, 10, 10] },
    "Schitt's Creek": { seasons: 6, episodes: [13, 13, 13, 13, 14, 14] },
    "You": { seasons: 5, episodes: [10, 10, 10, 10, 10] },
    "Killing Eve": { seasons: 4, episodes: [8, 8, 8, 8] },
    "The Great": { seasons: 2, episodes: [10, 10] },
    "Ramy": { seasons: 3, episodes: [10, 10, 10] },
    "Ted Lasso": { seasons: 3, episodes: [10, 12, 12] },
    "The Sandman": { seasons: 1, episodes: [11] },
    "Foundation": { seasons: 2, episodes: [10, 10] },
    "Andor": { seasons: 1, episodes: [12] },
    "American Horror Story": { seasons: 12, episodes: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11] },
    "Bates Motel": { seasons: 5, episodes: [10, 10, 10, 10, 10] },
    "Penny Dreadful": { seasons: 3, episodes: [8, 10, 9] },
    "The Exorcist": { seasons: 2, episodes: [10, 10] },
    "Marianne": { seasons: 1, episodes: [8] },
    "Castle Rock": { seasons: 2, episodes: [10, 10] },
    "The Outsider": { seasons: 1, episodes: [10] },
    "Fear the Walking Dead": { seasons: 8, episodes: [16, 16, 16, 16, 16, 16, 16, 16] },
    "Channel Zero": { seasons: 4, episodes: [6, 6, 6, 6] },
    "The Terror": { seasons: 2, episodes: [10, 10] },
    "Santa Clarita Diet": { seasons: 3, episodes: [10, 10, 10] },
    "Ash vs Evil Dead": { seasons: 3, episodes: [10, 10, 10] },
    "The Walking Dead": { seasons: 11, episodes: [6, 16, 16, 16, 16, 16, 16, 16, 16, 24, 24] },
    "Adventure Time Fionna & Cake": { seasons: 1, episodes:[11]},
    "Adventure Time Distant Lands": { seasons: 1, episodes:[4]},
};

const reversedIds = Object.fromEntries(
    Object.entries(ids).map(([show, id]) => [id, show])
);

let currentId;

let isShow = true;
let isMovie = false;

function toShow() {
    document.getElementById("show").disabled = true;
    document.getElementById("movie").disabled = false;
    isMovie = false;
    isShow = true;
}

function toMovie() {
    document.getElementById("show").disabled = false;
    document.getElementById("movie").disabled = true;
    isShow = false;
    isMovie = true;
}

let activeSeason = 1;
let activeEpisode = 1;

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
    const imdbIDDisplay = document.getElementById('imdbID');
    const infoDiv = document.getElementById('info');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchIMDb(query);
        }
    });

    function searchIMDb(query) {
        resultsContainer.innerHTML = '';
        imdbIDDisplay.textContent = '';

        for (const [title, id] of Object.entries(ids)) {
            if (title.toLowerCase().includes(query.toLowerCase())) {
                const resultButton = document.createElement('button');
                resultButton.textContent = `${title} (${id})`;
                resultButton.addEventListener('click', () => {
                    updateIframeSource(id);
                });
                resultButton.classList.add("searchResult");
                resultsContainer.appendChild(resultButton);
            }
        }

        if (resultsContainer.children.length === 0) {
            imdbIDDisplay.textContent = 'No results found';
        }
    }

    function updateIframeSource(id) {
        const video = document.getElementById("video");
        if (isShow){
            const season = document.getElementById("season")?.value || 1;
            const episode = document.getElementById("episode")?.value || 1;
            currentId = id;
            iframe.src = `https://vidsrc.xyz/embed/tv?imdb=${id}&season=${activeSeason}&episode=${activeEpisode}`;
            displaySeasonsAndEpisodes(id);
        }else if (isMovie) {
            iframe.src = `https://vidsrc.xyz/embed/movie?imdb=${id}`;
        }
    }


    function findShowById(idToFind) {
        return reversedIds[idToFind] || null; // Direct lookup
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
                    seasonBut.classList.add("seasonDis")
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
            episodeBtn.addEventListener('click', (event) => {
                updateEpisode(x+1);
                updateIframeSource(currentId);
            });
            seasonDiv.appendChild(episodeBtn);
        }
    }
});

function updateSeason(season){
    activeSeason = season;
}

function updateEpisode(ep){
    activeEpisode = ep;
}

function playEpisode(){
    if (isShow){
        const iframe = document.getElementById('video');
        const season = document.getElementById("season")?.value || 1;
        const episode = document.getElementById("episode")?.value || 1;
        iframe.src = `https://vidsrc.xyz/embed/tv?imdb=${currentId}&season=${season}&episode=${episode}`;
    }
}