define(['text!./menu/menu.html', 'text!./menu/item.html'], function(menu, item) {
    var menu_el = $(menu),
        create_item = _.template(item);

    function Constructor(menu) {
        this.el = $(menu_el);
        var self = this;
        ['Store', 'My Apps', 'Devices', 'Projects'].forEach(function(name) {
            var item_el = $(create_item({
                name: name
            }));

            item_el.on('click', function(event) {
                $('selected').removeClass('selected');
                $($(event.currentTarget).children()[0]).addClass('selected'); // TODO:  not this
            });

            self.el.append(item_el);
        });

        _.extend(this, Backbone.Events);
    }

    Constructor.prototype = {
        el: null,

        /**
         * Returns the label of a menu item.
         * @param {String} id
         * @return {String}
         */
        get_label: function(id) {
            return $('a[data-id="' + id + '"]', this.el).text();
        }
    }

    return Constructor;
});
