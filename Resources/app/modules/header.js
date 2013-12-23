define(['text!./header/header.html'], function(header) {
    var create_header = _.template(header);

    function Header(menu) {
        this.el = $(create_header({
            name: name
        }));

        _.extend(this, Backbone.Events);
    }

    return Header;
});
