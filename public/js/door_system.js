/**
 * Created by mattpatera on 12/7/16.
 */

var DoorSystem = function () {
    
    var currentState = new Standby(this);
    this.toggle = function (state) {
        currentState = state;
        currentState.act();
    }
};

var Armed = function (system) {
    this.system = system;

    this.toggle = function () {
        system.toggle(new Standby(system));
    }
};

var Standby = function (system) {
    this.system = system;

    this.toggle = function () {
        system.toggle(new Armed(system));
    }
};

