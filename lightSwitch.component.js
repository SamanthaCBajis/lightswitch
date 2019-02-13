"use strict";
const lightSwitch = {
    bindings: {
        onFlip: "&",
    },
    template: `
    <button ng-click= "$ctrl.onFlip();">Switch</button>
    `,
}

// execute the vm.isOn function within the light component using bindings to onFlip function
// added function to button through ng-click





angular.module("LightApp").component("lightSwitch", lightSwitch);