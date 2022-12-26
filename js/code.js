class Anime
{
    constructor(title, genre, author, epnumber,hebergeur)
    {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.epnumber = epnumber;
        this.hebergeur = hebergeur;
    }
}

//ajouter des animées a un tableau depuis un form
function addAnime()
{
    var title = document.getElementById("title").value;
/*  var genre = document.getElementById("genre").options[document.getElementById("genre").selectedIndex].value;*/ 
    var author = document.getElementById("author").value;
    var epnumber = document.getElementById("epnumber").value;
    var hebergeur = document.getElementById("hebergeur").value;

    var newLine = document.createElement("tr");
    var titleAnime = document.createElement("td");
    /* var genreAnime = document.createElement("td"); */
    var authorAnime = document.createElement("td");
    var epnumberAnime = document.createElement("td");
    var hebergeurAnime = document.createElement("td");
    titleAnime.textContent = title;
    /* genreAnime.textContent = genre; */
    authorAnime.textContent = author;
    epnumberAnime.textContent = epnumber;
    hebergeurAnime.textContent = hebergeur;
    newLine.append(titleAnime, /* genreAnime, */ authorAnime, epnumberAnime, hebergeurAnime);
    var table = document.querySelector(".afficherList tbody");
    if (
        titleAnime.textContent != "" &&
/*         genreAnime.textContent != "" &&*/        
        authorAnime.textContent != "" &&
        epnumberAnime.textContent != "" &&
        hebergeurAnime.textContent != ""
    ) {
        table.appendChild(newLine);
    }
    var anime = new Anime(title, author, epnumber, hebergeur);
    console.log(anime);
    var animeList = JSON.parse(localStorage.getItem("animeList"));
    if (animeList == null)
    {
        animeList = [];
    }   
    animeList.push(anime);
    localStorage.setItem("animeList", JSON.stringify(animeList));
    console.log(animeList);

}



function getAnimeByAPI()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.jikan.moe/v3/search/anime?q=one%20piece");
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var anime = JSON.parse(xhr.responseText);
            console.log(anime);
            var anime = new Anime(anime.title, anime.genre, anime.author, anime.epnumber, anime.hebergeur);
            console.log(anime);
        }
    }
}


