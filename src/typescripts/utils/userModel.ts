export interface CompanyObj {
    companyName: string,
    country: string,
    city: string,

}

export interface DonutObj {
    donutName: string,
    donutTitle: string,
    donutImage: string,
    price: number,
    gluten: boolean,
    lactose: boolean,
    calories: number,
    additions?: (string)[]
}

export class User {
    public userID: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public avatar: string;
    public isSeller: boolean;
    public company?: CompanyObj;
    public donuts?: DonutObj[];

    constructor(
        userID: number, 
        firstName: string, 
        lastName: string, 
        email: string, 
        password: string, 
        avatar: string, 
        isSeller: boolean,
        company?: CompanyObj,
        donuts?: DonutObj[],

    ) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.isSeller = isSeller;
        this.company = company;
        this.donuts = donuts;
    }

}