import { User, CompanyObj, DonutObj } from "./utils/userModel";

let users: User[] = [
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
            country: "United States",
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
            }
        ]
    },
    {
        userID: 2,
        firstName: "Ariana",
        lastName: "Lotus",
        email: "ariana@gmail.com",
        password: "ariana123",
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
                donutImage: "../assets/images/donuts/5.png",
                price: 130,
                gluten: true,
                lactose: true,
                calories: 323,
                additions: [
                    "dark chocolate",
                    "white chocolate"
                ]
            }
        ]
    },
    {
        userID: 3,
        firstName: "George",
        lastName: "Constanza",
        email: "george@constanza.com",
        password: "JasonAlexander",
        avatar: "../assets/images/george.jpg",
        isSeller: true,
        company: {
            companyName: "Shrinkage Patisserie",
            country: "Israel",
            city: "Tel Aviv"
        },
        donuts: [
            {
                donutName: "Purple Dream",
                donutTitle: "A wonderfull donut with blueberry glaze",
                donutImage: "../assets/images/donuts/12.png",
                price: 130,
                gluten: true,
                lactose: false,
                calories: 323,
                additions: [
                    "blueberry",
                    "confetti"
                ]
            },
            {
                donutName: "Chocolate confetti",
                donutTitle: "Sweet donut with milk chocolate and confetti",
                donutImage: "../assets/images/donuts/11.png",
                price: 13,
                gluten: true,
                lactose: true,
                calories: 450,
                additions: [
                    "milk chocolate",
                    "confetti"
                ]
            },
            {
                donutName: "Chocolate",
                donutTitle: "Base donut with choclolate",
                donutImage: "../assets/images/donuts/9.png",
                price: 14,
                gluten: false,
                lactose: true,
                calories: 380,
                additions: [
                    "chocolate"
                ]
            },
            {
                donutName: "Double chocolate",
                donutTitle: "Donut with chocolate glaze and chocolate confetti",
                donutImage: "../assets/images/donuts/10.png",
                price: 13,
                gluten: false,
                lactose: true,
                calories: 400,
                additions: [
                    "chocolate ",
                    "confetti"
                ]
            }
        ]
    },
    {
        userID: 4,
        firstName: "Cosmo",
        lastName: "Kramer",
        email: "cosmo@kramer.com",
        password: "MichaelRichards",
        avatar: "../assets/images/kramer.jpg",
        isSeller: true,
        company: {
            companyName: "Vandelay food production",
            country: "Israel",
            city: "Rishon Lezion"
        },
        donuts: [
            {
                donutName: "Strawberry",
                donutTitle: "Donut with straberry glaze and confetti",
                donutImage: "../assets/images/donuts/1.png",
                price: 14,
                gluten: true,
                lactose: false,
                calories: 450,
                additions: [
                    "straberry",
                    "confetti"
                ]
            },
            {
                donutName: "Sweet Rasberry ",
                donutTitle: "Donut with rasberry glaze and confetti",
                donutImage: "../assets/images/donuts/4.png",
                price: 13,
                gluten: true,
                lactose: false,
                calories: 340,
                additions: [
                    "rasberry",
                    "confetti"
                ]
            },
            {
                donutName: "Sweeet",
                donutTitle: "Sweet donut with powedered sugar",
                donutImage: "../assets/images/donuts/3.png",
                price: 15,
                gluten: true,
                lactose: false,
                calories: 250,
                additions: [
                    "powedered sugar"
                ]
            }
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
                for (let j in userCardObj.donuts) {
                    const donutObj: DonutObj = userCardObj.donuts[j];
                    console.log(donutObj);

                    const cardDiv = document.createElement("div") as HTMLDivElement;

                    const cardImageHeaderDiv = document.createElement("div") as HTMLDivElement;
                    const donutImage = document.createElement("img") as HTMLImageElement;

                    const cardDonutInfoDiv = document.createElement("div") as HTMLDivElement;
                    const donutNameSpan = document.createElement("span") as HTMLSpanElement;
                    const donutTitleSpan = document.createElement("span") as HTMLSpanElement;

                    const cardDonutSellerInfoDiv = document.createElement("div") as HTMLDivElement;
                    const sellerHeaderDiv = document.createElement("div") as HTMLDivElement;
                    const sellerInitialsDiv = document.createElement("div") as HTMLDivElement;
                    const initialsImage = document.createElement("img") as HTMLImageElement;
                    const initialsSpan = document.createElement("span") as HTMLImageElement;

                    

                    cardDiv.classList.add("card");

                    cardImageHeaderDiv.classList.add("card-image-header");
                    donutImage.classList.add("donut-image")

                    cardDonutInfoDiv.classList.add("card-donut-info");
                    donutNameSpan.classList.add("card-donut-info__donut-name");
                    donutTitleSpan.classList.add("card-donut-info__donut-title");

                    cardDonutSellerInfoDiv.classList.add("seller-info");
                    sellerHeaderDiv.classList.add("seller-info__header");
                    sellerInitialsDiv.classList.add("seller-info__initials");
                    initialsImage.classList.add("seller-avatar")

                    donutImage.src = donutObj.donutImage;
                    initialsImage.src = userCardObj.avatar;

                    donutNameSpan.textContent = donutObj.donutName;
                    donutTitleSpan.textContent = donutObj.donutTitle;

                    initialsSpan.textContent = `${userCardObj.firstName} ${userCardObj.lastName}`

                    sellerHeaderDiv.textContent = "Seller";

                    cardImageHeaderDiv.append(donutImage);

                    cardDonutInfoDiv.append(donutNameSpan);
                    cardDonutInfoDiv.append(donutTitleSpan);

                    sellerInitialsDiv.append(initialsImage);
                    sellerInitialsDiv.append(initialsSpan);
                    cardDonutSellerInfoDiv.append(sellerHeaderDiv);
                    cardDonutSellerInfoDiv.append(sellerInitialsDiv);

                    cardDiv.append(cardImageHeaderDiv);
                    cardDiv.append(cardDonutInfoDiv);

                    if (donutObj.additions?.length !== 0) {
                        const additionsArray: any = donutObj.additions;

                        const donutAdditionsDiv = document.createElement("div") as HTMLSpanElement;
                        const additionsHeaderDiv = document.createElement("div") as HTMLSpanElement;
                        const additionsDiv = document.createElement("div") as HTMLSpanElement;
                        
                        donutAdditionsDiv.classList.add("card-donut-additions");
                        additionsHeaderDiv.classList.add("card-donut-additions__header");
                        additionsDiv.classList.add("card-donut-additions__additions");
                        
                        additionsHeaderDiv.textContent = "supplements:";
                        
                        
                        for (let x in additionsArray) {
                            const additionSpan = document.createElement("span") as HTMLSpanElement;
                            const addition: string = additionsArray[x]
                           
                            
                            additionSpan.textContent = `* ${addition}`;
                            
                            additionsDiv.append(additionSpan)
                        }

                        donutAdditionsDiv.append(additionsHeaderDiv);
                        donutAdditionsDiv.append(additionsDiv);
                        cardDiv.append(donutAdditionsDiv);
                    }

                    cardDiv.append(cardDonutSellerInfoDiv);

                    productCardsDiv.append(cardDiv);


                }

            }
        }
    }
}
showUsersCards();