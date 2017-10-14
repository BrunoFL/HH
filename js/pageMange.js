function pageMange() {
    $('#nav_dock').html('Je mange');
    removeQuadCards();
    var search =
        '<div id="search_bar" class="row fixed-top"><div class="input-group container"><input type="text" class="form-control" placeholder="Aliment" aria-label="Aliment"><span class="input-group-btn"><button class="btn btn-outline-success" type="button">Go!</button></span></div></div>';

    $(search).appendTo('body');

    create_list_header();
    var navBot =
        '<div id="navbot" class="fixed-bottom btn-group" role="group"><div class="mx-auto btn-decale"><button type="button" class="btn btn-dark btn-lg"><img src="assets/categories.svg" alt="categories"></button><button type="button" class="btn btn-dark btn-lg"><img src="assets/favori.svg" alt="categories"></button><button type="button" class="btn btn-dark btn-lg"><img src="assets/panier.svg" alt="categories"></button><button type="button" class="btn btn-dark btn-lg"><img src="assets/creer.svg"></button></div></div>';

    $('body').append(navBot);
    $('#nav_dock').on('click touch', pageMain);
    $('#list-aliment-container').height(window.innerHeight - 150);
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
    $('body').append(list);
    call_aliments();
};

function call_aliments() {
    $.ajax({
        url : server + "aliment/",
        success : function(text) { create_list_element(text); }
    });
};

function create_list_element(aliments) {
    console.log(aliments);
    var list =
        '<div id="list-aliment-content" data-spy="scroll" data-target="#list-aliment" data-offset="0" class="scrollBar scrollspy-aliment col-10">';

    var offset = 0;
    for (var i = 0; i < 26; i++) {
        // Création titre
        var lettre = String.fromCharCode('A'.charCodeAt(0) + i);
        list += '<h4 id="list-item-' + i + '">' + lettre + '</h4><hr>';

        // Création accordéon
        while (offset < aliments.length &&
               aliments[offset].libelle[0] == lettre) {
            var name = aliments[offset].libelle;
            var accordion =
                'accordion' + name.replace(/ /g, "_").replace(/,/g, "_");
            var heading =
                'heading' + name.replace(/ /g, "_").replace(/,/g, "_");
            var collapse =
                'collapse' + name.replace(/ /g, "_").replace(/,/g, "_");
            list +=
                '<div id="' + accordion +
                '" role="tablist"><div class="card"><div class="card-header" role="tab" id="' +
                heading +
                '"><h6><a class="collapsed" data-toggle="collapse" href="#' +
                collapse + '" aria-expanded="false" aria-controls="' +
                collapse + '"';
            list += 'data-mesuremax="' + aliments[offset].mesureMax +
                    '" data-mesurepas="' + aliments[offset].mesurePas +
                    '" data-qtecalorie="' + aliments[offset].qteCalorie +
                    '" data-qteglucide="' + aliments[offset].qteGlucide +
                    '" data-qtelipide="' + aliments[offset].qteLipide +
                    '" data-detail="' + aliments[offset].detail + '" id="get' +
                    name.replace(/ /g, "_").replace(/,/g, "_") +
                    '" data-name="' +
                    name.replace(/ /g, "_").replace(/,/g, "_") +
                    '"data-qteproteine="' + aliments[offset].qteProteine + '"';
            list += '>' + name + '</a></h6></div>';

            list += '<div id="' + collapse +
                    '" class="collapse" role="tabpanel" aria-labelledby="' +
                    heading + '" data-parent="#' + accordion +
                    '"><div class="card-body"></div></div></div></div>';

            offset++;
        }
    }
    list += '</div></div>';

    $(list).appendTo('#list-aliment-container');
    $('list-aliment').scrollspy({
        target : '#list-aliment-content'
    });  // FONCTIONNE PAS !!!
    $('.collapse').on('show.bs.collapse', adjustAliment);
};

function adjustAliment(e) {
    console.log(e);
    $('.collapse').collapse('hide');
    var el = e.target;
    var parent = $(el.dataset.parent);
    // console.log(parent);
    el = parent.first().children().children().children().children();
    console.log(el.attr('data-detail'));
    var html =
        '<div class="card-body"><div class="row"><h6>' +
        el.attr('data-detail') +
        '</h6><ul class="list-inline"><li class="list-inline-item"><img src="assets/ajouterPanier.svg" alt="ajout panier"></li><li class="list-inline-item"><img class="param" src="assets/parametres.svg" alt="parametres"></li></ul></nav></div><div class="row"><form class="form-inline"><div class="col-7">';
    html +=
        '<input id="' + el.attr('data-name') +
        'slider" type="text" readonly class="form-control-plaintext mySlider" class="col-8">';
    html +=
        '</div><div class="col-5 input-group"><input type="number" class="form-control" id="input' +
        el.attr('data-name') +
        '" placeholder="10"><span class="input-group-addon">g</span></div>';
    html +=
        '<ul class="list-inline"><li class="list-inline-item"><span id="aliment_glucide">' +
        el.attr('data-qteglucide') +
        '</span> Glucides</li><li class="list-inline-item"><span id="aliment_lipide">' +
        el.attr('data-qtelipide') +
        '</span> Lipides</li><li class="list-inline-item"><span id="aliment_proteine">' +
        el.attr('data-qteproteine') +
        '</span> Proteines</li><li class="list-inline-item"><span id="aliment_kcal">' +
        el.attr('data-qtecalorie') +
        '</span> Kcal</li></ul></form></div></div>';

    e.target.innerHTML = html;
    $('#' + el.attr('data-name') + 'slider')
        .slider(
            {formatter : function(value) { return 'Current value: ' + value; }})
        .on('change', slider_adjust);
    $('#input' + el.attr('data-name')).on('keyup', input_adjust);

    /*
    "libelle": "Pomme", "detail": "Une pomme du coup", "mesureMax": 0.0,
        "mesurePas": 0.0, "typeMesurePas": 0.0, "quantitePortionRef": 0.0,
        "typeMesurePortionRef": 0.0, "qteGlucide": 0.0, "qteProteine": 0.0,
        "qteLipide": 0.0, "qteCalorie": 0.0*/
    }

function slider_adjust(e) {
    var value = e.value.newValue;
    var plok = e.currentTarget.id.replace(/slider/g, '');
    var el = $('#collapse' + plok + ' .form-inline');
    var glu = parseInt($('#get' + plok).attr('data-qteglucide'));
    var lip = parseInt($('#get' + plok).attr('data-qtelipide'));
    var cal = parseInt($('#get' + plok).attr('data-qtecalorie'));
    var prot = parseInt($('#get' + plok).attr('data-qteproteine'));
    el.find('#aliment_glucide').html(glu * value);
    el.find('#aliment_lipide').html(lip * value);
    el.find('#aliment_kcal').html(cal * value);
    el.find('#aliment_proteine').html(prot * value);
    }

function input_adjust(e) {
    var plok = e.target.id;
    console.log(plok);
    var el = $('#' + plok);
    plok = plok.replace(/input/g, '');
    var value = el[0].valueAsNumber;

    el = $('#collapse' + plok + ' .form-inline');

    var glu = parseInt($('#get' + plok).attr('data-qteglucide'));
    var lip = parseInt($('#get' + plok).attr('data-qtelipide'));
    var cal = parseInt($('#get' + plok).attr('data-qtecalorie'));
    var prot = parseInt($('#get' + plok).attr('data-qteproteine'));
    el.find('#aliment_glucide').html(glu * value);
    el.find('#aliment_lipide').html(lip * value);
    el.find('#aliment_kcal').html(cal * value);
    el.find('#aliment_proteine').html(prot * value);
}