define(['text!./myapps/myapps.html', 'text!./popular/item.html'], function(myapps, item) {
    var create_item = _.template(item),
        items = ['Lightz', 'Helicopter', 'Apply'];

    function MyApps() {
        this.el = $(myapps);
        this.el.find('ul').append($(_render()));

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

    return MyApps;
});
