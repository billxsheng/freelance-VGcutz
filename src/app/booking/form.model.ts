export class Form {
    public firstName: string;
    public lastName: string;
    public email: string;
    public mobile: number;
    public date: string;
    public time: string;




    public name: string;
    public description: string;
    public imagePath: string;
    
   

    constructor(name: string, desc: string, image: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
    }
}

