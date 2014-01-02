define(['text!./popular/popular.html', 'text!./popular/item.html'], function(popular, item) {
    var create_item = _.template(item),
        items = ['Lightz', 'Radio', 'Apply'];

    function Popular() {
        this.el = $(popular);
        this.el.append($(_render()));

        _.extend(this, Backbone.Events);
    }

    function _render() {
        var el = '';

        for (var i = 0; i < items.length; i++) {
            el = el + create_item({
                name: items[i]
            });
        }

        return el;
    }

    return Popular;
});
