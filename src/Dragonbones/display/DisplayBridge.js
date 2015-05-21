var DisplayBridge = (function () {
    function DisplayBridge() {
    }

    DisplayBridge.prototype.getVisible = function () {
        return this._display ? this._display.visible : false;
    };

    DisplayBridge.prototype.setVisible = function (value) {
        if (this._display) {
            this._display.visible = value;
        }
    };

    DisplayBridge.prototype.getDisplay = function () {
        return this._display;
    };

    DisplayBridge.prototype.setDisplay = function (value) {
        if (this._display == value) {
            return;
        }

        var index = -1;
        if (this._display) {
            var parent = this._display.parent;
            if (parent) {
                index = this._display.parent.children.indexOf(this._display);
            }
            this.removeDisplay();
        }
        this._display = value;
        this.addDisplay(parent, index);
    };

    DisplayBridge.prototype.dispose = function () {
        this._display = null;
    };

    DisplayBridge.prototype.updateTransform = function (matrix, transform) {
        this._display.x = transform.x;
        this._display.y = transform.y;

        this._display.rotation = transform.skewX;

        this._display.scale.x = transform.scaleX;
        this._display.scale.y = transform.scaleY;
    };

    DisplayBridge.prototype.updateColor = function (aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier) {
        if (this._display) {
            this._display.alpha = aMultiplier;
        }
    };

    DisplayBridge.prototype.addDisplay = function (container, index) {
        var parent = container;
        if (parent && this._display) {
            if (index < 0) {
                parent.addChild(this._display);
            } else {
                parent.addChildAt(this._display, Math.min(index, parent.children.length));
            }
        }
    };

    DisplayBridge.prototype.removeDisplay = function () {
        if (this._display && this._display.parent) {
            this._display.parent.removeChild(this._display);
        }
    };

    DisplayBridge.RADIAN_TO_ANGLE = 180 / Math.PI;
    return DisplayBridge;
})();

module.exports = DisplayBridge;
