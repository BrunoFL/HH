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

function pageMange() {
    $('#nav_dock').html('Je mange');
    removeQuadCards();
    var search =
        '<div id="search_bar" class="row fixed-top"><div class="input-group container"><input type="text" class="form-control" placeholder="Aliment" aria-label="Aliment"><span class="input-group-btn"><button class="btn btn-outline-success" type="button">Go!</button></span></div></div>';

    $(search).appendTo('body');

    var navBot =
        '<div id="navbot" class="fixed-bottom btn-group" role="group"><div class="mx-auto btn-decale"><button type="button" class="btn btn-dark btn-lg">Secs</button><button type="button" class="btn btn-dark btn-lg">Favoris</button><button type="button" class="btn btn-dark btn-lg">Panier</button><button type="button" class="btn btn-dark btn-lg">Ajout</button></div></div>';
    $('body').append(navBot);
    $('#nav_dock').on('click touch', pageMain);

    var list =
        '<div id="list-aliment-container" class="row container-fluid"><div id="list-aliment" class="scrollBar list-group col-2">';
    for (var i = 0; i < 26; i++) {
        var lettre = String.fromCharCode('A'.charCodeAt(0) + i);
        list +=
            '<a class="list-group-item list-group-item-action" href="#list-item-' +
            i + '">' + lettre + '</a>';
    }
    list += '</div>';
    list +=
        '<div id="list-aliment-content" data-spy="scroll" data-target="#list-aliment" data-offset="0" class="scrollBar scrollspy-aliment col-10">';
    for (var i = 0; i < 26; i++) {
        var lettre = String.fromCharCode('A'.charCodeAt(0) + i);
        list += '<h4 id="list-item-' + i + '">' + lettre + '</h4><hr>';
        for (var j = 0; j < 5; j++) {
            list += "<div><p>plok</p></div>";
        }
    }
    list += '</div>';
    $('body').append(list);
    $('#list-aliment-container').height(window.innerHeight - 150);
};

function pageMain() {
    $('body').empty();
    addNavbarMain();
    addQuadCards();
}