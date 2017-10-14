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

    var list = create_list_header();
    list += create_list_element();

    $('body').append(list);
    $('#list-aliment-container').height(window.innerHeight - 150);
    $('list-aliment').scrollspy({target : '#list-aliment-content'});
};

function create_list_header() {
    var list =
        '<div id="list-aliment-container" class="row container-fluid"><div id="list-aliment" class="scrollBar list-group col-2">';
    for (var i = 0; i < 26; i++) {
        var lettre = String.fromCharCode('A'.charCodeAt(0) + i);
        list +=
            '<a class="list-group-item list-group-item-action" href="#list-item-' +
            i + '">' + lettre + '</a>';
    }
    list += '</div>';
    return list;
    }

function create_list_element() {
    var list =
        '<div id="list-aliment-content" data-spy="scroll" data-target="#list-aliment" data-offset="0" class="scrollBar scrollspy-aliment col-10">';

    for (var i = 0; i < 26; i++) {
        var lettre = String.fromCharCode('A'.charCodeAt(0) + i);
        list += '<h4 id="list-item-' + i + '">' + lettre + '</h4><hr>';
        for (var j = 0; j < 5; j++) {
            list += "<div><p>plok</p></div>";
        }
        }

    return list + '</div>';
}