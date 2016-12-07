/**
 * Created by mattpatera on 12/7/16.
 *
 * Contains logic for the function of the door alarm service
 */

var door = (function () {

    // PRIVATE VARIABLES
    var isOpen = false;

    // PRIVATE FUNCTIONS
    function makeRequest(attempt = 1) {
        // chain of command begins
        if (attempt == 1) {
            var getURL = 'http://localhost:3000/alertSMS';
            var service = 'SMS';
        } else if (attempt == 2) {
            var getURL = 'http://localhost:3000/alertEmail';
            var service = 'Email';
        } else {
            console.log("You're in some trouble dawg.");
        }

        $.get(getURL, '', function () {
            console.log(service + " sent")
        }).fail(function () {
            console.log("Request " + attempt + " has failed.");
            makeRequest(attempt + 1); // on fail, increment chain id
        });
    }

    function act() {
        // if door is open and system is armed
        if (isOpen && sec_system.isSystemArmed()) {
            makeRequest();
        }
    }

    // PUBLIC FUNCTIONS
    return {
        door_mod: function () {
            isOpen = !isOpen;
            act()
        },

        isDoorOpen: function () {
            return isOpen
        }
    }
})();

var sec_system = (function () {
    // PRIVATE VARIABLES
    var isArmed = false;

    // PRIVATE FUNCTIONS
    function changeIcon() {

        var element = $('#status-icon');

        if (isArmed) {
            element.attr('src', '/public/assets/images/Armed.png');
        } else {
            element.attr('src', '/public/assets/images/Standby.png');
        }
    }

    // PUBLIC FUNCTIONS
    return {
        system_mod: function () {
            if (!isArmed && door.isDoorOpen()) { // door is open and attempt made to arm
                alert("Please close your door, then try to arm the system.");
            } else {
                isArmed = !isArmed;
                changeIcon();
            }
        },

        isSystemArmed: function () {
            return isArmed
        }
    }
})();

// JQUERY TO ACT ON SINGLETONS ABOVE
$(function ($) {
    $('#open_close_door').click(function () {
        door.door_mod();
        console.log("Is door open? " + door.isDoorOpen());
    });

    $('.toggle').click(function () {
        sec_system.system_mod();
        console.log("Is system armed? " + sec_system.isSystemArmed())
    });
});