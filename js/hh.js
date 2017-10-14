var violet = '#9914e8';
var orange = '#ffae00';
var vert = '#00ff0c';
var rose = '#ea0aff';

$(document).ready(function() { pageMain(); });

function addQuadCards() {
    var cardMange =
        '<div class="box" id="card_mange"><div class="card border-secondary" style="color: white; background-color:' +
        orange +
        '"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h3 class="card-title text-center">Je mange</h3></div></div></div>';
    var cardEspace =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        violet +
        '"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h3 class="card-title text-center">Mon espace</h3></div></div></div>';
    var cardRecettes =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        vert +
        '"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h3 class="card-title  text-center">Recettes</h3></div></div></div>';
    var cardMemo =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        rose +
        '"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h3 class="card-title text-center">Mémo</h3></div></div></div>';

    $('body').append('<div id="quadCards" class="cols mx-auto">' + cardMange +
                     cardEspace + cardRecettes + cardMemo + '</div>');
    $('#card_mange').on('click touch', pageMange);
};

function removeQuadCards() { $('#quadCards').remove(); };

function addNavbarMain() {
    var nav =
        '<nav class="fixed-top navbar navbar-dark bg-dark"><a class="navbar-brand" id="nav_dock" href="#">Gluci Miam</a><ul class="navbar-nav"></li><li class="nav-item"><button type="button" class="btn btn-danger">Se déconnecter</button></li></ul></nav>';

    $('body').append(nav);
};

function pageMain() {
    $('body').empty();
    addNavbarMain();
    addQuadCards();
}