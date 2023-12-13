"use strict";
let users = [
    {
        userID: 1,
        firstName: "Daniel",
        lastName: "Uretsky",
        email: "daniel353a3@gmail.com",
        password: "123",
        avatar: "../assets/icons/user.png",
        isSeller: true,
        company: {
            companyName: "Doughnuts",
            country: "USA",
            city: "New York"
        },
        donuts: [
            {
                donutName: "Basic",
                donutTitle: "A wonderful basic dough",
                donutImage: "./asstes/images/2.png",
                price: 130,
                gluten: false,
                lactose: false,
                calories: 323,
                adiitions: []
            },
            {
                donutName: "Creamy almonds",
                donutTitle: "Savor the Creamy Almonds donut without gluten: Cream and almonds in perfect harmony",
                donutImage: "./asstes/images/8.png",
                price: 130,
                lactose: false,
                calories: 323,
                additions: [
                    "cream",
                    "almonds"
                ]
            },
        ]
    },
    {
        userID: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        password: "john123",
        avatar: "../assets/icons/user.png",
        isSeller: false,
    },
    {
        userID: 1,
        firstName: "Ariana",
        lastName: "Lotus",
        email: "ariana@gmail.com",
        password: "123",
        avatar: "../assets/icons/user.png",
        isSeller: true,
        company: {
            companyName: "Glaze and Grace",
            country: "Latvia",
            city: "Riga"
        },
        donuts: [
            {
                donutName: "Powedered Sugar",
                donutTitle: "Basic dounut with powedered sugar",
                donutImage: "./asstes/images/7.png",
                price: 2.2,
                gluten: true,
                lactose: false,
                calories: 295,
            },
            {
                donutName: "Choco Duo Delight",
                donutTitle: "The perfect blend of white and dark chocolate in one delicious donut",
                donutImage: "./asstes/images/8.png",
                price: 130,
                gluten: true,
                lactose: true,
                calories: 323,
                additions: [
                    "dark chocolate",
                    "white chocolate"
                ]
            },
        ]
    }
];
const productCardsDiv = document.createElement("div");
function showUsersCards() {
    productCardsDiv.innerHTML = "";
    for (let x in users) {
        const userCardObj = users[x];
    }
}
