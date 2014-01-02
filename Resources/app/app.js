define(['modules/menu',
        'modules/grid',
        'modules/popular',
        'modules/header',
        'text!../demos/apps.json'], function (Menu, Grid, Popular, Header, apps) {
    var menu = new Menu();

    /* Homebrew Router */
    $('#content').on('route', function(event, options) {
        $.extend({
            route: 'store'
        }, options); // store is default route

        if(options.route === 'store') {
            $('#header').empty().append(new Header().el);
            $('#left_pane').empty().append(new Grid().el);
            $('#right_pane').empty().append(new Popular().el);
        } else {
            $('#header').empty();
            $('#left_pane').empty();
            $('#right_pane').empty();
        }
    });
});
