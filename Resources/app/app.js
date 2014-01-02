/**
 * TideSDK Kitchen Sink
 * ====================
 * The TideSDK Kitchen Sink is a modular application that can easily be extended with new modules.
 * Create a new demo in the `/demos/` folder and make sure to add it to `/demo-index.json`
 */

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
            $('#left_pane').empty().append(new Header().el);
            $('#left_pane').append(new Grid().el);
            $('#right_pane').empty().append(new Popular().el);
        } else {
            $('#left_pane').empty();
            $('#right_pane').empty();
        }
    });

    // //Basically, the whole app is controlled with the sidebar module.
    // sidebar_menu.on('select', function (id) {

    //     if (id == 'main') {
    //         $section_title.text(Ti.App.getVersion());
    //         $('#meta-area').hide();
    //     } else {
    //         $section_title.text(sidebar_menu.get_label(id));
    //     }

    //     var demo_id = id.split('.').pop(),
    //             demo_folder = id.replace(/\./g, '/');

    //     //Get the demo module.
    //     require(['../demos/' + demo_folder + '/' + demo_id], function (demo) {

    //         //If there is currently a loaded demo, unload it.
    //         if (current_demo !== null) {
    //             if(last_run) current_demo.cleanup($content);
    //         }

    //         //Get the HTML content and the stylesheet, if neccessary.
    //         var requires = ['text!../demos/' + demo_folder + '/' + demo.content];
    //         if (typeof demo.stylesheet == 'string') {
    //             requires.push('css!../demos/' + demo_folder + '/' + demo.stylesheet);
    //         }
    //     });

    // });

});
