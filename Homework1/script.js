$(document).ready(function() {
    $('#jqueryEffect').click(function() {
        var title = $('h1');
        var photo = $('img');
        title.animate({'font-size': '80px', 'color': 'black'}, 1200);
        title.animate({'font-size': '40px', 'background-color': 'red'}, 1200);
        title.css({color: 'red'});
        // photo.animate({'border': '7px solid #08b32d'}, 1000);
        photo.css({'border': '7px solid #08b32d'}).animate({borderWidth:4}, 1200);
    });
});