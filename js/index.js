buscaFilme();
function buscaFilme() {
        var inputBusca = document.querySelector('input');
        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.open("get", "http://api.jsonbin.io/b/5a2d87326ee33e76b90623b0");
        oReq.send(); return false;
    
    return true;
}

function reqListener() {
    var data = JSON.parse(this.responseText);
    var filmesAction = data.movies.action;
    var resultadoHTML = '';
    for (var i = 0; i < 5; i++) {
        resultadoHTML = resultadoHTML + '<li class="lista-filmes" onmouseenter="seeBanner(\'Titulo do Filme\')"><img class="poster" src=' + filmesAction[i].Poster + '>' + '<h4 class="title">' + filmesAction[i].Title + '</h4></li>';
    }
    resultado.innerHTML = resultadoHTML;   
}

function seeBanner(title) {
    var banner = document.querySelector('.movie-banner');
    var movieTitle = document.getElementById('movie-title');

    movieTitle.innerHTML = title;

    banner.classList.toggle('movie-banner-visible');
}