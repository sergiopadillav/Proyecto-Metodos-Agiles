export class Employee {

    constructor(_id="", created_at="", name="", gender="",dateJob="",email="",phone="",rfc=""){
        this._id= _id;
        this.created_at= created_at;
        this.name = name;
        this.gender = gender;
        this.dateJob = dateJob;
        this.email = email;
        this.phone = phone;
        this.rfc = rfc; 
    }

    _id: string;
    created_at: String;
    name: string;
    gender: string;
    dateJob: string;
    email: string
    phone: string;
    rfc: string
}

