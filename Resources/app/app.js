define(['modules/menu',
        'modules/grid',
        'modules/devices',
        'modules/popular',
        'modules/header',
        'text!../demos/apps.json'], function (Menu, Grid, Device, Popular, Header, apps) {
    var menu = new Menu();

    /* Homebrew Router */
    $('#content').on('route', function(event, options) {
        $.extend({
            route: 'store'
        }, options); // store is default route

        if(options.route === 'store') {
            _empty().append('<div id="header"></div><table id="panes"><tr><td id="left_pane"></td><td id="right_pane"></td></tr><table>'); //CES HACK
            $('#header').append(new Header().el);
            $('#left_pane').append(new Grid().el);
            $('#right_pane').append(new Popular().el);
        } else if(options.route === 'myapps') {
            _empty();
        } else if(options.route === 'devices') {
            _empty().append(new Device().el);
        } else if(options.route === 'projects') {
            _empty();
        }
    });
});

function _empty () {
    return $('#content').empty();
}
