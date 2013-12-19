define(['text!./grid/item.html'], function(item) {
    var tpl_item = _.template(item);

    /**
     * Will create the HTML
     * @param json
     */
    function render(json) {
        console.log(json);
        var menu_id = 'mod_sidebar_menu_' + Math.random().toString().split('.').pop();
        var content = '';

        for(var key in json){
            if(typeof json[key] == 'string'){
                content += tpl_single({id: key, label: json[key]});
            } else {
                json[key].menu_id = menu_id;
                json[key].id = key;
                content += tpl_group(json[key]);
            }
        }

        return tpl_base({id: menu_id, content: content});
    }

    function Constructor(menu) {
        this.json = menu;
        this.el = $(render(menu));
        var that = this;
        this.el.on('click', 'a', function(e){
            if($(this).hasClass('accordion-toggle')) return;
            e.preventDefault();
            e.stopPropagation();
            var id = $(this).attr('data-id');
            that.select(id);
        });
        _.extend(this, Backbone.Events);
    }

    Constructor.prototype = {
        /**
         * The DOM element to be added where you want the menu to appear.
         */
        el: null,
        /**
         * Highlights an element in the menu.
         * If the element is a group, the group will be toggled.
         *
         * To select a group child, pass "group_id.child_id".
         * @param {String} id
         */
        select: function(id) {
            $('li,div', this.el).removeClass('active');
            var $link_el = $('a[data-id="'+id+'"]');
            $link_el.parent().addClass('active');

            this.trigger('select', id);
            this.trigger('select:' + id);
        },
        /**
         * Returns the label of a menu item.
         * @param {String} id
         * @return {String}
         */
        get_label: function(id) {
            return $('a[data-id="' + id + '"]', this.el).text();
        }
    }

    return Constructor;
});