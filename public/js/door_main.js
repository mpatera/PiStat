/**
 * Created by mattpatera on 12/7/16.
 */

var door = (function () {
    var isOpen = false;

    function makeRequest(attempt = 1) {
        if (attempt == 1) {
            var getURL = 'http://localhost:3000/alertSMS';
            var service = 'SMS';
        } else if (attempt == 2) {
            var getURL = 'http://localhost:3000/alertEmail';
            var service = 'Email';
        }

        $.get(getURL, '', function () {
            console.log(service + " sent")
        }).fail(function () {
            console.log("Request " + attempt + " has failed.");
            makeRequest(attempt + 1);
        });
    }

    function act() {
        if (isOpen && sec_system.isSystemArmed()) {
            makeRequest();
        }
    }

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
    var isArmed = false;

    function changeIcon() {

        var element = $('#status-icon');

        if (isArmed) {
            element.attr('src', '/public/assets/images/Armed.png');
        } else {
            element.attr('src', '/public/assets/images/Standby.png');
        }
    }

    return {
        system_mod: function () {
            isArmed = !isArmed;
            changeIcon();
        },

        isSystemArmed: function () {
            return isArmed
        }
    }
})();

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