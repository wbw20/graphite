define(['text!./devices/devices.html',
        'text!./devices/feature.html',
        'text!./devices/item.html'], function(devices, feature, item) {
    var create_item = _.template(item),
        create_feature = _.template(feature),
        items = [{
            name: 'Graphite 1',
            last: 1388864816,
            type: 'Graphite'
        }, {
            name: 'Graphite 2',
            last: 1388804816,
            type: 'Graphite'
        }, {
            name: 'Graphite 3',
            last: 1388064816,
            type: 'Graphite'
        }];

    function Devices() {
        this.el = $(devices);
        this.el.find('ul').append($(_render()));

        var self = this;
        this.el.find('li').on('click', function(event) {
          self.select(event.currentTarget);
        });

        _.extend(this, Backbone.Events);
    }

    Devices.prototype.select = function(device) {
        var el = $(device);
        var item = _by(el.attr('id'));
        $('.devices .selected').removeClass('selected');
        el.addClass('selected');
        $('#feature').empty().append(create_feature($.extend(item, {
          last: 'yesterday'
        })));
    }

    function _render() {
        var el = '';

        for (var i = 0; i < items.length; i++) {
            el = el + create_item({
                id: _id(items[i].name),
                name: items[i].name
            });
        }

        return el;
    }

    function _id(name) {
      return name.replace(' ', '').toLowerCase();
    }

    function _by(id) {
      for (var i = 0; i< items.length; i++) {
        if (id === _id(items[i].name)) {
          return items[i];
        }
      }
    }

    return Devices;
});
