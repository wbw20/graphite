define(['text!./grid/grid.html', 'text!./grid/item.html'], function(grid, item) {
    var max_width = 330,
        min_width = 260,
        create_item = _.template(item),
        items = ['plane', 'train', 'robot', 'spam', 'rocket', 'boat', 'rc turret', 'helicopter'];

    function Grid() {
        this.el = el = $(grid);
        el.append($(_render(3)));

        $(window).on('resize', function(event) {
            if ($('.grid_item').width() >= max_width || $('.grid_item').width() <= min_width) {
                el.empty().append(_render(Math.ceil($('#content').width()/max_width)));
            }
        });

        _.extend(this, Backbone.Events);
    }

    _render = function(num_columns) {
        var el = '<tr class=\"dark\">';

        for (var i = 0; i < items.length; i++) {
            if (i % num_columns === 0) {
                // new row
                el = el + '</tr><tr class=\"' + (i%2==0 ? 'light' : 'dark') + '\">';
            }

            el = el + create_item({
                name: items[i]
            });
        }

        el = el + '</tr>';

        // $('.grid_item').css('width', Math.min($('#content').width()/num_columns, max_width));

        // console.log($('#content').width()/num_columns);

        return el;
    }

    return Grid;
});
