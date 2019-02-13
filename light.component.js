"use strict";
const light = {
    template:  `
    <section ng-class= "{lighton: $ctrl.isOn}">
    <p>Light</p>
    <light-switch on-flip="$ctrl.onFlip();"></light-switch>
    </section>`,
    // adds class light on if $ctrl.isOn is true
    // template injects html into <light></light>
    // onFlip is an added binding attribute allows you to bind the attribute to the child component lightSwtich
    controller: [function() {
        const vm = this;
        vm.isOn = false;

        vm.onFlip = function() {
            if(vm.isOn === true){
                vm.isOn = false;
            }else if(vm.isOn === false){
                vm.isOn = true;
            }
        };
    }]
    // create attribute that references the function to bind it later, to access it in the child
    // the method creates vm as object and sets isOn to false so onFlip function can make it true or false using if statements
}






angular.module("LightApp").component("light", light);