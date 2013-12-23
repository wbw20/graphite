define(['text!./grid/grid.html', 'text!./grid/item.html'], function(grid, item) {
    var grid_el = $(grid),
        create_item = _.template(item),
        items = ['plane', 'train', 'robot', 'spam', 'rocket', 'boat', 'rc turret', 'helicopter'];

    function Grid() {
        this.el = grid_el;
        var self = this;
        items.forEach(function(name) {
            var item_el = $(create_item({
                name: name
            }));

            /* Handle menu item highlighting */
            item_el.on('click', function(event) {
                alert();
            });

            self.el.append(item_el);
        });

        $(window).on('resize', function(event) {
            console.log(grid_el.width());
        });

        _.extend(this, Backbone.Events);
    }

    return Grid;
});
