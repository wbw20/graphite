define(['text!./devices/devices.html'], function(template) {
    function Popular(device) {
        this.el = _render();

        _.extend(this, Backbone.Events);
    }

    function _render() {
        return $(template);
    }

    return Popular;
});
