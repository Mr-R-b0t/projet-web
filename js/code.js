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
    var genre = document.getElementById("genre").value; 
    var author = document.getElementById("author").value;
    var epnumber = document.getElementById("epnumber").value;
    var hebergeur = document.getElementById("hebergeur").value;
    var btn = "Remove"

    var newLine = document.createElement("tr");
    var titleAnime = document.createElement("td");
    var genreAnime = document.createElement("td");
    var authorAnime = document.createElement("td");
    var epnumberAnime = document.createElement("td");
    var hebergeurAnime = document.createElement("td");
    var btnRemove = document.createElement("td");
    titleAnime.textContent = title;
    genreAnime.textContent = genre;
    authorAnime.textContent = author;
    epnumberAnime.textContent = epnumber;
    hebergeurAnime.textContent = hebergeur;
    btnRemove.innerHTML ='<button type="button" class="btn" onclick="deleteAnime(this)">Supprimer</button>';
    newLine.append(titleAnime, genreAnime, authorAnime, epnumberAnime, hebergeurAnime, btnRemove);
    var table = document.querySelector(".table-section tbody");
    if (
        titleAnime.textContent != "" &&
        genreAnime.textContent != "" && 
        authorAnime.textContent != "" &&
        epnumberAnime.textContent != "" &&
        hebergeurAnime.textContent != ""
    ) {
        table.appendChild(newLine);
    }
    var anime = new Anime(title, genre, author, epnumber, hebergeurAnime);
    console.log(anime);
    var animeList = JSON.parse(localStorage.getItem("../json/animeList.json"));
    if (animeList == null)
    {
        animeList = [];
    }   
    animeList.push(anime);
    localStorage.setItem("animeList", JSON.stringify(animeList));
    console.log(animeList);

}

function deleteAnime(err)
{
    var i = err.parentNode.parentNode.rowIndex;
    document.getElementById("animelist").deleteRow(i);
}

//statistiques
var statsAnime = 4;
var statsEpisode = 100;
var statsGenre = 5;
var statsAuteur = 3;
var statsPlateforme = 2;