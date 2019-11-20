// defining a class
class MobilePhones{
    
    // feilds or Property
    screenSize:string;
    RAM:string;
    processor:string;
    protected battery:number; //in MAH
    private camera:number; //In MP
    operatingSystem:string;

    // a constructor which is used to initialize a class feilds
    constructor (_screeeSize :string,_RAM:string,_processor:string,_battery:number,_camera:number,_operatingSystem:string){
        this.screenSize = _screeeSize;
        this.RAM = _RAM;
        this.processor = _processor;
        this.battery = _battery;
        this.camera = _camera;
        this.operatingSystem = _operatingSystem;
    } //end constructor

    // a method which is accessible to outside world/Class
    getOperatingSystem = ()=>{
        return this.operatingSystem;
    }

    //Getter method for the change the private modifer value
    getBattery =()=>{
        return this.camera;
    }
    getCameraPixel =()=>{
        return this.camera;
    }
    setCameraPixel =(pixels:number)=>{
        this.camera = pixels;
    }
}

let miA1 = new MobilePhones("5.6 inch","64 GB",'Snapdragaon 675',4100,48,"Android");

let OSystem = miA1.getOperatingSystem();
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