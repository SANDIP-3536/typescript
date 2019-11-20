// defining a class
class MobilePhone{
    
    // feilds or Property
    screenSize:string;
    RAM:string;
    processor:string;
    battery:number; //in MAH
    camera:number; //In MP
    operatingSystem:string;

    // a constructor which is used to initialize a class feilds
    constructor (_screeeSize :string,_RAM:string,_processor:string,_battery:number,_camera:number,_operatingSystem?:string){
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

    getRAM = () =>{
        return this.RAM;
    }
}

let miA3 = new MobilePhone("5.6 inch","64 GB",'Snapdragaon 675',4100,48,"Android");
let miNote4 = new MobilePhone('5.4 inch',"32 GB",'snapdragron 425',16,4000);

let OS = miA3.getOperatingSystem();
let noteOS = miNote4.getOperatingSystem();
let RAM = miA3.getRAM();
console.log(OS);
console.log(noteOS);
console.log(RAM);
