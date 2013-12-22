define(['text!./grid/item.html'], function(item) {
    var grid_el = $('#content'),
        create_item = _.template(item);

    function Constructor() {
        this.el = $(grid_el);
        var self = this;
        ['Store', 'My Apps', 'Devices', 'Projects'].forEach(function(name) {
            var item_el = $(create_item({
                name: name
            }));

            /* Handle menu item highlighting */
            item_el.on('click', function(event) {
                alert();
            });

            self.el.append(item_el);
        });

        _.extend(this, Backbone.Events);
    }

    return Constructor;
});
