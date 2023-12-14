import { User, CompanyObj, DonutObj } from "./utils/userModel";

let users: User[] = [
    {
        userID: 1,
        firstName: "Daniel",
        lastName: "Uretsky",
        email: "daniel353a3@gmail.com",
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
                donutImage: "../assets/images/donuts/2.png",
                price: 130,
                gluten: false,
                lactose: false,
                calories: 323,
                additions: []
            },
            {
                donutName: "Creamy almonds",
                donutTitle: "Savor the Creamy Almonds donut without gluten: Cream and almonds in perfect harmony",
                donutImage: "../assets/images/donuts/8.png",
                price: 130,
                gluten: false,
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
        avatar: "../assets/icons/user.png",
        isSeller: false,
    },
    {
        userID: 1,
        firstName: "Ariana",
        lastName: "Lotus",
        email: "ariana@gmail.com",
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
                donutImage: "../assets/images/donuts/7.png",
                price: 2.2,
                gluten: true,
                lactose: false,
                calories: 295,
                additions: [
                    "Powedered Sugar"
                ]

            },
            {
                donutName: "Choco Duo Delight",
                donutTitle: "The perfect blend of white and dark chocolate in one delicious donut",
                donutImage: "../assets/images/donuts/8.png",
                price: 130,
                gluten: true,
                lactose: true,
                calories: 323,
                additions: [
                    "dark chocolate",
                    "white chocolate",
                ]
            },
        ]
    }
];



const productCardsDiv = document.getElementById("cards") as HTMLDivElement;

function showUsersCards(): void {
    productCardsDiv.innerHTML = "";

    for (let x in users) {
        const userCardObj: User = users[x];

        if (userCardObj.isSeller) {
            if (userCardObj.donuts) {
                for(let j in userCardObj.donuts) {
                    const donutObj: DonutObj = userCardObj.donuts[j];
                    console.log(donutObj);
                    
                    const cardDiv = document.createElement("div") as HTMLDivElement;
                    const donutImage = document.createElement("img") as HTMLImageElement;

                    cardDiv.classList.add("card");
                    donutImage.classList.add("donut-image")

                    donutImage.src = donutObj.donutImage;
                    cardDiv.append(donutImage);
                    productCardsDiv.append(cardDiv);
                    
                }

            }
        }
    }
}
showUsersCards();