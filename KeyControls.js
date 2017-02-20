/**
 * Class to add key controls to an Object3D/Mesh in Three.js.
 * @author James Pell <james@jamespell.co.uk>
 */

export default class KeyControls {

    /**
     * Create a KeyControls instance.
     * @param {object} object - The object3D or Mesh to bind controls to.
     */
    constructor( object ) {

        this.object = object;

        this.enabled = true;
        this.speed = 0.1;
        this.turnSpeed = 0.03;
        this.controls = {
            forward: "w",
            backward: "s",
            left: "a",
            right: "d"
        }
        this.keysDown = {};

        document.addEventListener('keydown', (event) => {


            this.keysDown[event.key] = (event.type == 'keydown');


            // if ( this.keysDown[ this.controls.forward ] && this.keysDown[ this.controls.left ] ) {
            //     object.translateZ(0.3)

            // }

        }, false);

        document.addEventListener('keyup', (event) => {
            this.keysDown[event.key] = false;

        }, false);

    }

    /**
     * Update the movement of the Object3D or Mesh.
     */
    update() {

        if ( this.keysDown[ this.controls.forward ] ) {
            this.object.translateZ(this.speed)
        }

        if ( this.keysDown[ this.controls.backward ]) {
            this.object.translateZ(-this.speed)
        }

        if ( this.keysDown[ this.controls.left ]) {
            this.object.rotateY(this.turnSpeed)
        }

        if ( this.keysDown[ this.controls.right ]) {
            this.object.rotateY(-this.turnSpeed)
        }

    }

}