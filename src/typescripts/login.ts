import { User } from "./utils/userModel";

let loginButton: HTMLElement | null = document.getElementById("loginButton");
(<HTMLElement>loginButton).addEventListener("click" , loginHandler);

function loginHandler() {
    let username:HTMLInputElement = document.getElementById("username") as HTMLInputElement;
    let password:HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    
    if(username.value == "" || password.value == "")
    {
        alert("Please set you info first!");
    }else{
        let usersData = JSON.parse(localStorage.getItem("users") as string);
    }
}