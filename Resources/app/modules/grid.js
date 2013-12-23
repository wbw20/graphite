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
            var width = $('#content').width(),
                unit = $('.grid_item').first().width(),
                num_columns = Math.floor(width/unit),
                el = '<tr>';

            console.log(num_columns);

            for (var i = 0; i < items.length; i++) {
                if (i % num_columns === 0) {
                    // new row
                    el = el + '</tr><tr>';
                }

                el = el + '<td><div class=\'grid_item animated\'>BLAHBLAH</div></td>';
            }

            el = el + '</tr>'

            $('#grid').empty().append(el);
        });

        _.extend(this, Backbone.Events);
    }

    return Grid;
});
