/**
 * Created by darren on 12/6/16.
 */

var expect = chai.expect;

describe("Door alarm system", function () {
    describe("Door functions", function () {
        it("should be set to closed", function () {
            expect(door.isDoorOpen()).to.equal(false);
        });
        it("should change to open", function () {
            door.door_mod();
            expect(door.isDoorOpen()).to.equal(true);
        });
        it("should change back to closed", function () {
            door.door_mod();
            expect(door.isDoorOpen()).to.equal(false);
        });
    });
    describe("Security System Functions", function () {
        it("should not be armed", function () {
            expect(sec_system.isSystemArmed()).to.equal(false);
        });
        it("should arm system if door is closed", function () {
            sec_system.system_mod();
            expect(sec_system.isSystemArmed()).to.equal(true);
        });
        it("should disarm system if system is armed", function () {
            sec_system.system_mod();
            expect(sec_system.isSystemArmed()).to.equal(false);
        });
        it("should not arm system if door is open", function () {
            door.door_mod();
            sec_system.system_mod();
            expect(sec_system.isSystemArmed()).to.equal(false);
        });
    })
});