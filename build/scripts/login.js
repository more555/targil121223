let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginHandler);
function loginHandler() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        alert("Please set you info first!");
    }
    else {
        let usersData = JSON.parse(localStorage.getItem("users"));
    }
}
export {};
