define(['text!./menu/item.html'], function(item) {
    var menu_el = $('.menu .container'),
        create_item = _.template(item);

    function Constructor(menu) {
        this.el = menu_el;
        var self = this;
        ['Store', 'My Apps', 'Devices', 'Projects'].forEach(function(name) {
            var item_el = $(create_item({
                name: name
            }));

            /* Handle menu item highlighting */
            item_el.on('click', function(event) {
                $('.selected').removeClass('selected');
                $($(event.currentTarget).children()[0]).addClass('selected'); // TODO:  not this
                $('#left_pane').trigger('route', {
                    route: name.replace(' ', '').toLowerCase()
                });
            });

            self.el.append(item_el);
        });

        _.extend(this, Backbone.Events);
    }

    return Constructor;
});
