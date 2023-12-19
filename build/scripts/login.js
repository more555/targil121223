"use strict";
//import { User } from "./utils/userModel.js";
let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginHandler);
function loginHandler() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value == "" || password.value == "") {
        alert("Please set you info first!");
    }
    else {
        let usersData = JSON.parse(localStorage.getItem("donutseek"));
        console.log(usersData);
        let flag = false;
        for (let x in usersData) {
            let user = usersData[x];
            if (user.email == email.value && user.password == password.value) {
                localStorage.setItem("loggedUser", JSON.stringify(user));
                window.location.href = "../pages/home.html";
                flag = true;
                break;
            }
            ;
        }
        ;
        if (!flag) {
            alert("email or password does not exist!");
        }
    }
    ;
}
console.log();
