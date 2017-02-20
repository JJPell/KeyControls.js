"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to add key controls to an Object3D/Mesh in Three.js.
 * @author James Pell <james@jamespell.co.uk>
 */

var KeyControls = function () {

    /**
     * Create a KeyControls instance.
     * @param {object} object - The object3D or Mesh to bind controls to.
     */
    function KeyControls(object) {
        var _this = this;

        _classCallCheck(this, KeyControls);

        this.object = object;

        this.enabled = true;
        this.speed = 0.1;
        this.turnSpeed = 0.03;
        this.controls = {
            forward: "w",
            backward: "s",
            left: "a",
            right: "d"
        };
        this.keysDown = {};

        document.addEventListener('keydown', function (event) {

            _this.keysDown[event.key] = event.type == 'keydown';

            // if ( this.keysDown[ this.controls.forward ] && this.keysDown[ this.controls.left ] ) {
            //     object.translateZ(0.3)

            // }
        }, false);

        document.addEventListener('keyup', function (event) {
            _this.keysDown[event.key] = false;
        }, false);
    }

    /**
     * Update the movement of the Object3D or Mesh.
     */


    _createClass(KeyControls, [{
        key: "update",
        value: function update() {

            if (this.keysDown[this.controls.forward]) {
                this.object.translateZ(this.speed);
            }

            if (this.keysDown[this.controls.backward]) {
                this.object.translateZ(-this.speed);
            }

            if (this.keysDown[this.controls.left]) {
                this.object.rotateY(this.turnSpeed);
            }

            if (this.keysDown[this.controls.right]) {
                this.object.rotateY(-this.turnSpeed);
            }
        }
    }]);

    return KeyControls;
}();

THREE.KeyControls = KeyControls;