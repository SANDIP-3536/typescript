// defining a class
var MobilePhones = /** @class */ (function () {
    // a constructor which is used to initialize a class feilds
    function MobilePhones(_screeeSize, _RAM, _processor, _battery, _camera, _operatingSystem) {
        var _this = this;
        // a method which is accessible to outside world/Class
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        //Getter method for the change the private modifer value
        this.getBattery = function () {
            return _this.camera;
        };
        this.getCameraPixel = function () {
            return _this.camera;
        };
        this.setCameraPixel = function (pixels) {
            _this.camera = pixels;
        };
        this.screenSize = _screeeSize;
        this.RAM = _RAM;
        this.processor = _processor;
        this.battery = _battery;
        this.camera = _camera;
        this.operatingSystem = _operatingSystem;
    } //end constructor
    return MobilePhones;
}());
var miA1 = new MobilePhones("5.6 inch", "64 GB", 'Snapdragaon 675', 4100, 48, "Android");
var OSystem = miA1.getOperatingSystem();
console.log(OSystem);
// In public access modifier u can access it outside class beacuse default all the feild and property is default
miA1.operatingSystem = "IOS";
console.log(miA1.getOperatingSystem());
//after private / public access modifier not allowed to chnage outside class
// miA1.camera = 64;
//Existing camera
console.log(miA1.getCameraPixel());
//New value to camera pixel
miA1.setCameraPixel(25);
console.log(miA1.getCameraPixel());
