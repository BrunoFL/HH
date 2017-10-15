/*
Le fichier principal de l'application

Fait par Bruno Follet-Locatelli le 13-14-15 octobre
avec beaucoup de coca et pas beaucoup de sommeil.
*/

var server = 'http://10.101.0.57:8000/api/';

var violet = '#9914e8';
var orange = '#ffae00';
var vert = '#00ff0c';
var bleu = '#54aece';

$(document).ready(function() { pageMain(); });

// Ajoute les 4 cartes
function addQuadCards() {
    var cardMange =
        '<div class="box" id="card_mange"><div class="card border-secondary" style="color: white; background-color:' +
        orange +
        '"><img class="card-img-top" src="assets/jeMange.svg" alt="Card image je mange"><div class="card-body"><h3 class="card-title text-center">Je mange</h3></div></div></div>';
    var cardEspace =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        violet +
        '"><img class="card-img-top" src="assets/monEspace.svg" alt="Card image mon espace"><div class="card-body"><h3 class="card-title text-center">Mon espace</h3></div></div></div>';
    var cardRecettes =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        vert +
        '"><img class="card-img-top" src="assets/recette.svg" alt="Card image recette"><div class="card-body"><h3 class="card-title  text-center">Recettes</h3></div></div></div>';
    var cardMemo =
        '<div class="box"><div class="card border-secondary" style="color: white; background-color:' +
        bleu +
        '"><img class="card-img-top" src="assets/memo.svg" alt="Card image cap"><div class="card-body"><h3 class="card-title text-center">Mémo</h3></div></div></div>';

    $('body').append('<div id="quadCards" class="cols mx-auto">' + cardMange +
                     cardRecettes + cardEspace + cardMemo + '</div>');
    $('#card_mange').on('click touch', pageMange);
};

// Supprime les 4 cartes
function removeQuadCards() { $('#quadCards').remove(); };

function addNavbarMain() {
    var nav =
        '<nav class="fixed-top navbar navbar-dark bg-dark"><a class="navbar-brand" id="nav_dock" href="#"><img src="assets/home.svg" alt="image home">Gluci Miam</a><ul class="navbar-nav"></li><li class="nav-item"><button type="button" class="btn btn-danger">Se déconnecter</button></li></ul></nav>';

    $('body').append(nav);
};

// Fonction qui gere la page principale
function pageMain() {
    $('body').empty();
    addNavbarMain();
    addQuadCards();
}