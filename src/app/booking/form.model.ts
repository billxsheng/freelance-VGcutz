export class Form {
    public firstName: string;
    public lastName: string;
    public email: string;
    public mobile: number;
    public imagePath: string;
    public message: string;
    
   

    constructor(firstName: string, lastName: string, email: string, mobile:number, imagePath: string, message: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.imagePath = imagePath;
        this.message = message;
    }
}

