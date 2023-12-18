import { User } from "./utils/userModel.js";
//localStorage.clear()
let response: string = "";
let response1: User[] = [];
let firstName = document.getElementById("fname") as HTMLInputElement;
let lastName = document.getElementById("lname") as HTMLInputElement;
let email = document.getElementById("email") as HTMLInputElement;
let password = document.getElementById("password") as HTMLInputElement;
let avatar = document.getElementById("avatar") as HTMLInputElement;
let isSeller: boolean = false;
let seller = document.getElementById("seller") as HTMLInputElement;
let addUser = (): void => {
    let flag1: boolean = false;
    let flag2: boolean = false;
    let flag3: boolean = false;
    response1 = JSON.parse(String(localStorage.getItem("donutseek")));
    //CHECK IF THERE'S INFO IN EVERY INPUT
    if (firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {
        alert("MISSING DATA! PLEASE FILL ALL REQUIRED FIELDS")
        flag1 = true;
    }
    //CHECK IF THE USER ALREADY EXISTS
        for (let x = 0; x < response1.length; x++) {
        if (email.value == response1[x].email) {
            alert("USER ALREADY EXIST! PLEASE LOGIN");
            flag2 = true;
        }
    } 
    // CHECK EMAIL VALIDITY 
    if (!email.value.includes("@")){
        alert("EMAIL ADDRESS INVALID");
        flag3 = true
    }

    // CHECK IF THR REGISTER IS FOR A SELLER
    if (seller.checked) {
        isSeller = true;
    }
    if (flag1 == false && flag2 == false && flag3 == false) {
        let userId = response1.length + 1;
        let user = new User(userId, firstName.value, lastName.value, email.value,
            password.value, avatar.value, isSeller)
        response1.push(user);
        localStorage.setItem("donutseek", JSON.stringify(response1))
        let gotologin = document.getElementById("gotologin") as HTMLDivElement;
        gotologin.style.visibility = ("visible");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
       
    }

}


if (!localStorage.getItem("donutseek")) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/users.json", true);
    xhr.onload = function (): void {
        response = this.responseText;
        response1 = JSON.parse(response).users;
        localStorage.setItem("donutseek", JSON.stringify(response1))
        


        document.getElementById("btn1")?.addEventListener("click", addUser);
    }
    xhr.send()

} else {
    response1 = JSON.parse(String(localStorage.getItem("donutseek")));
    


    document.getElementById("btn1")?.addEventListener("click", addUser);
};


