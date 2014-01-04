define(['text!./devices/devices.html', 'text!./devices/item.html'], function(devices, item) {
    var create_item = _.template(item),
        items = ['Graphite 1', 'Graphite 2', 'Graphite 3'];

    function Devices() {
        this.el = $(devices);
        this.el.append($(_render()));

        var self = this;
        this.el.find('li').on('click', function(event) {
          self.select(event.currentTarget);
        });

        _.extend(this, Backbone.Events);
    }

    Devices.prototype.select = function(device) {
        var el = $(device);
        $('.devices .selected').removeClass('selected');
        el.addClass('selected');
    }

    function _render() {
        var el = '';

        for (var i = 0; i < items.length; i++) {
            el = el + create_item({
                id: _id(items[i]),
                name: items[i]
            });
        }

        return el;
    }

    function _id(name) {
      return name.replace(' ', '').toLowerCase();
    }

    return Devices;
});
