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
    pushTache(newTask);
    var newLine = document.createElement("tr");
    var nameTask = document.createElement("td");
    var dateTask = document.createElement("td");
    var catTask = document.createElement("td");
    nameTask.textContent = newTask.nom;
    dateTask.textContent = newTask.date;
    catTask.textContent = newTask.categorie;
    newLine.append(nameTask, dateTask, catTask);
    var table = document.querySelector(".datatable tbody");
    if (nameTask.textContent != "" && dateTask.textContent != "" && catTask.textContent != "")
    {
        table.appendChild(newLine);
    }
}