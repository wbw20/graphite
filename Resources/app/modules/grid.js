define(['text!./grid/grid.html', 'text!./grid/item.html'], function(grid, item) {
    var create_item = _.template(item),
        items = ['plane', 'train', 'robot', 'spam', 'rocket', 'boat', 'rc turret', 'helicopter'];

    function Grid() {
        this.el = el = $(grid);
        el.append($(_render()));

        $(window).on('resize', function(event) {
            console.log(el);
            console.log(_render());
            el.empty().append(_render());
        });

        _.extend(this, Backbone.Events);
    }

    _render = function() {
        var width = $('#content').width(),
            unit = 200,
            num_columns = Math.floor(width/unit),
            el = '<tr>';

        for (var i = 0; i < items.length; i++) {
            if (i % num_columns === 0) {
                // new row
                el = el + '</tr><tr>';
            }

            el = el + '<td><div class=\'grid_item animated\'>BLAHBLAH</div></td>';
        }

        el = el + '</tr>'

        return el;
    }

    return Grid;
});
