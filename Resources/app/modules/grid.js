define(['text!./grid/grid.html', 'text!./grid/item.html'], function(grid, item) {
    var max_width = 330,
        min_width = 260,
        create_item = _.template(item),
        items = ['Plane', 'Train', 'Robot', 'Spam', 'Rocket', 'Boat', 'RC Turret', 'Helicopter', 'LED'];

    function Grid() {
        this.el = el = $(grid);
        el.append($(_render(3)));

        el.find('h6').on('mouseenter', function(event) {
            $(this).data('prev', $(this).text());
            $(this).text('INSTALL');
        });

        el.find('h6').on('mouseleave', function(event) {
            $(this).text($(this).data('prev'));
        });

        $(window).on('resize', function(event) {
            if ($('.grid_item').width() >= max_width || $('.grid_item').width() <= min_width) {
                el.empty().append(_render(Math.ceil($('#content').width()/max_width)));
            }
        });

        _.extend(this, Backbone.Events);
    }

    _render = function(num_columns) {
        var el = '<tr class=\"light\">';

        for (var i = 0; i < items.length; i++) {
            if (Math.max(1, i) % num_columns === 0) {
                // new row
                el = el + '</tr><tr class=\"' + ((i/num_columns)%2==0 ? 'light' : 'dark') + '\">';
            }

            el = el + create_item({
                name: items[i],
                price: 'free'
            });
        }

        el = el + '</tr>';

        // $('.grid_item').css('width', Math.min($('#content').width()/num_columns, max_width));

        // console.log($('#content').width()/num_columns);

        return el;
    }

    return Grid;
});
