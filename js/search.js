
const fetchAnime = async (search) => {
 const anime = await fetch(
    "https://kitsu.io/api/edge/anime?filter[text]="+ search
  ).then((res) => res.json());
    console.log(anime); 
    const animeData = anime.data;
    const animeList = document.getElementById("images");
    const imagebefore = document.getElementById("images");
    animeData.forEach((anime) => {
        const animeElement = document.createElement("div");
        if (animeList == null) {
          animeElement.id = "images";
          document.body.appendChild(animeElement);
        }
        if(anime.attributes.titles.en == null){
            const title = anime.attributes.titles.en_jp;
            animeElement.innerHTML = `
            <div class="box">
            <img src="${anime.attributes.posterImage.small}" alt="${title}">
            <div class="content">
                <button type="submit" onclick="updateDatabase(this)">Add me</button>
                <h3>${title}</h3>
                <h2>${anime.attributes.episodeCount}</h2>
                <p>Rating ranks : ${anime.attributes.ratingRank}</p>
                <h6> <span>Type : ${anime.attributes.subtype}</span></h6>
            </div>
        </div>`;
        }
        else{
            const title = anime.attributes.titles.en; 
            animeElement.innerHTML = `
             <div class="box">
            <img src="${anime.attributes.posterImage.small}" alt="${title}">
            <div class="content">
                <button type="submit" onclick="updateDatabase(this)">Add me</button>
                <h3>${title}</h3>
                <h2>Episode : ${anime.attributes.episodeCount}</h2>
                <p>Rating ranks : ${anime.attributes.ratingRank}</p>
                <h6> <span>Type : ${anime.attributes.subtype}</span></h6>
            </div>
        </div>`;
}       console.log(imagebefore)
        animeList.appendChild(animeElement);
        if(imagebefore != null){
            imagebefore.remove();
        } 
    });
};


function searchAnime() {
  const search = document.getElementById("search").value;
  fetchAnime(search);
}

