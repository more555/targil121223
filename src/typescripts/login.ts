//import { User } from "./utils/userModel.js";

let loginButton: HTMLElement | null = document.getElementById("loginButton");
(<HTMLElement>loginButton).addEventListener("click" , loginHandler);

function loginHandler() {
    let email:HTMLInputElement = document.getElementById("email") as HTMLInputElement;
    let password:HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    
    if(email.value == "" || password.value == "")
    {
        alert("Please set you info first!");
    }else{
        let usersData = JSON.parse(localStorage.getItem("donutseek") as string);
        let flag = false;
        for(let x in usersData)
        {
            let user = usersData[x];
            if(user.email == email.value && user.password == password.value)
            {
                window.location.href = "../pages/home.html";
                flag = true;
                break;
            };
        };
        if(!flag) {
            alert("email or password does not exist!");
        }
    };
}

console.log()