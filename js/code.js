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

function ajouterAnime()
{
    var newAnime = animeSaisie();
    pushTache(newAnime);
    var newLine = document.createElement("tr");
    var nameTask = document.createElement("td");
    var dateTask = document.createElement("td");
    var catTask = document.createElement("td");
    nameTask.textContent = newTask.nom;
    dateTask.textContent = newTask.date;
    catTask.textContent = newTask.categorie;
    newLine.append(nameTask, dateTask, catTask);
    var table = document.querySelector("liste");
    if (nameTask.textContent != "" && dateTask.textContent != "" && catTask.textContent != "")
    {
        table.appendChild(newLine);
    }
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