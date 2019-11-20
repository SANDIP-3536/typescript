// defining a class
var MobilePhone = /** @class */ (function () {
    // a constructor which is used to initialize a class feilds
    function MobilePhone(_screeeSize, _RAM, _processor, _battery, _camera, _operatingSystem) {
        var _this = this;
        // a method which is accessible to outside world/Class
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.getRAM = function () {
            return _this.RAM;
        };
        this.screenSize = _screeeSize;
        this.RAM = _RAM;
        this.processor = _processor;
        this.battery = _battery;
        this.camera = _camera;
        this.operatingSystem = _operatingSystem;
    } //end constructor
    return MobilePhone;
}());
var miA3 = new MobilePhone("5.6 inch", "64 GB", 'Snapdragaon 675', 4100, 48, "Android");
var miNote4 = new MobilePhone('5.4 inch', "32 GB", 'snapdragron 425', 16, 4000);
var OS = miA3.getOperatingSystem();
var noteOS = miNote4.getOperatingSystem();
var RAM = miA3.getRAM();
console.log(OS);
console.log(noteOS);
console.log(RAM);
