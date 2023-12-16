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
            country: "United States",
            city: "New York"
        },
        donuts: [
            {
                donutName: "Basic",
                donutTitle: "A wonderful basic dough",
                donutImage: "../assets/images/donuts/2.png",
                price: 1.5,
                gluten: false,
                lactose: false,
                calories: 323,
                additions: []
            },
            {
                donutName: "Creamy almonds",
                donutTitle: "Savor the Creamy Almonds donut without gluten: Cream and almonds in perfect harmony",
                donutImage: "../assets/images/donuts/8.png",
                price: 2.5,
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
                price: 5,
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
                price: 2.8,
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
                price: 4,
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
                price: 3,
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
                price: 3.3,
                gluten: false,
                lactose: true,
                calories: 400,
                additions: [
                    "chocolate",
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
                price: 4,
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
                price: 4.2,
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
                price: 3.8,
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
const loggedUser = {
    userID: 5,
    firstName: "Ben",
    lastName: "Megidish",
    email: "ben@gmail.com",
    password: "123545",
    avatar: "../assets/icons/user.png",
    isSeller: false
};
const userProfileDiv = document.getElementById("profile");
const productCardsDiv = document.getElementById("cards");
const userCartDiv = document.createElement("div");
const userCartButtonDiv = document.createElement("div");
const userCartButtonImage = document.createElement("img");
const userSellButton = document.createElement("div");
const searchInput = document.getElementById("search");
const searchImage = document.getElementById("search-icon");
if (!loggedUser.isSeller) {
    userCartDiv.classList.add("user-cart");
    userCartButtonDiv.classList.add("user-cart__btn");
    userCartButtonImage.classList.add("cart-icon");
    userCartButtonDiv.textContent = "Cart";
    userCartButtonImage.src = '../assets/icons/shopping-cart.png';
    userCartButtonDiv.append(userCartButtonImage);
    userCartDiv.append(userCartButtonDiv);
    userProfileDiv.insertAdjacentElement("afterbegin", userCartDiv);
}
else {
    userSellButton.classList.add("sell-btn");
    userSellButton.textContent = "+ sell";
    userProfileDiv.insertAdjacentElement("afterbegin", userSellButton);
}
const searchHandler = (value) => {
    if (value !== "") {
        let result = [];
        for (let x in users) {
            let userObj = users[x];
            if (userObj.firstName.toLowerCase().includes(value.toLowerCase()) ||
                userObj.lastName.toLowerCase().includes(value.toLowerCase())) {
                result.push(userObj);
            }
        }
        console.log(result);
        showUsersCards(result);
    }
    else {
        showUsersCards(users);
    }
};
function showUsersCards(usersArr) {
    productCardsDiv.innerHTML = "";
    for (let x in usersArr) {
        const userCardObj = usersArr[x];
        if (userCardObj.isSeller) {
            if (userCardObj.donuts) {
                for (let j in userCardObj.donuts) {
                    const donutObj = userCardObj.donuts[j];
                    console.log(donutObj);
                    const cardDiv = document.createElement("div");
                    const cardImageHeaderDiv = document.createElement("div");
                    const donutImage = document.createElement("img");
                    const cardDonutInfoDiv = document.createElement("div");
                    const donutNameSpan = document.createElement("span");
                    const donutTitleSpan = document.createElement("span");
                    const cardDonutSellerInfoDiv = document.createElement("div");
                    const sellerHeaderDiv = document.createElement("div");
                    const sellerInitialsDiv = document.createElement("div");
                    const initialsImage = document.createElement("img");
                    const initialsSpan = document.createElement("span");
                    const sellerInfoDiv = document.createElement("div");
                    const InfoCompanyNameDiv = document.createElement("div");
                    const InfoEmailDiv = document.createElement("div");
                    const InfoCountryDiv = document.createElement("div");
                    const InfoCityDiv = document.createElement("div");
                    const companyNameImage = document.createElement("img");
                    const emailImage = document.createElement("img");
                    const countryImage = document.createElement("img");
                    const cityImage = document.createElement("img");
                    const companyNameSpan = document.createElement("span");
                    const emailSpan = document.createElement("span");
                    const countrySpan = document.createElement("span");
                    const citySpan = document.createElement("span");
                    const donutPriceDiv = document.createElement("div");
                    const donutPriceButton = document.createElement("div");
                    const donutPriceSpan = document.createElement("span");
                    cardDiv.classList.add("card");
                    cardImageHeaderDiv.classList.add("card-image-header");
                    donutImage.classList.add("donut-image");
                    cardDonutInfoDiv.classList.add("card-donut-info");
                    donutNameSpan.classList.add("card-donut-info__donut-name");
                    donutTitleSpan.classList.add("card-donut-info__donut-title");
                    cardDonutSellerInfoDiv.classList.add("seller-info");
                    sellerHeaderDiv.classList.add("seller-info__header");
                    sellerInitialsDiv.classList.add("seller-info__initials");
                    initialsImage.classList.add("seller-avatar");
                    sellerInfoDiv.classList.add("seller-company-info");
                    InfoCompanyNameDiv.classList.add("seller-company-info__company-name");
                    InfoEmailDiv.classList.add("seller-company-info__email");
                    InfoCountryDiv.classList.add("seller-company-info__country");
                    InfoCityDiv.classList.add("seller-company-info__city");
                    companyNameImage.classList.add("company-name-icon");
                    emailImage.classList.add("email-icon");
                    countryImage.classList.add("country-icon");
                    cityImage.classList.add("city-icon");
                    donutPriceDiv.classList.add("donut-price");
                    donutPriceButton.classList.add("donut-price__add-to-cart");
                    donutPriceSpan.classList.add("donut-price__price");
                    donutImage.src = donutObj.donutImage;
                    initialsImage.src = userCardObj.avatar;
                    companyNameImage.src = '../assets/icons/company.png';
                    emailImage.src = '../assets/icons/mail.png';
                    countryImage.src = '../assets/icons/location.png';
                    cityImage.src = '../assets/icons/city.png';
                    donutNameSpan.textContent = donutObj.donutName;
                    donutTitleSpan.textContent = donutObj.donutTitle;
                    initialsSpan.textContent = `${userCardObj.firstName} ${userCardObj.lastName}`;
                    sellerHeaderDiv.textContent = "Seller";
                    companyNameSpan.textContent = userCardObj.company?.companyName;
                    emailSpan.textContent = userCardObj.email;
                    countrySpan.textContent = userCardObj.company?.country;
                    citySpan.textContent = userCardObj.company?.city;
                    donutPriceButton.textContent = '+ Add';
                    donutPriceSpan.textContent = `${donutObj.price}$`;
                    cardImageHeaderDiv.append(donutImage);
                    cardDonutInfoDiv.append(donutNameSpan);
                    cardDonutInfoDiv.append(donutTitleSpan);
                    sellerInitialsDiv.append(initialsImage);
                    sellerInitialsDiv.append(initialsSpan);
                    InfoCompanyNameDiv.append(companyNameImage);
                    InfoCompanyNameDiv.append(companyNameSpan);
                    InfoEmailDiv.append(emailImage);
                    InfoEmailDiv.append(emailSpan);
                    InfoCountryDiv.append(countryImage);
                    InfoCountryDiv.append(countrySpan);
                    InfoCityDiv.append(cityImage);
                    InfoCityDiv.append(citySpan);
                    sellerInfoDiv.append(InfoCompanyNameDiv);
                    sellerInfoDiv.append(InfoEmailDiv);
                    sellerInfoDiv.append(InfoCountryDiv);
                    sellerInfoDiv.append(InfoCityDiv);
                    donutPriceDiv.append(donutPriceButton);
                    donutPriceDiv.append(donutPriceSpan);
                    cardDiv.append(cardImageHeaderDiv);
                    cardDiv.append(cardDonutInfoDiv);
                    if (donutObj.additions?.length !== 0) {
                        const additionsArray = donutObj.additions;
                        const donutAdditionsDiv = document.createElement("div");
                        const additionsHeaderDiv = document.createElement("div");
                        const additionsDiv = document.createElement("div");
                        donutAdditionsDiv.classList.add("card-donut-additions");
                        additionsHeaderDiv.classList.add("card-donut-additions__header");
                        additionsDiv.classList.add("card-donut-additions__additions");
                        additionsHeaderDiv.textContent = "supplements:";
                        for (let x in additionsArray) {
                            const additionSpan = document.createElement("span");
                            const addition = additionsArray[x];
                            additionSpan.textContent = `* ${addition}`;
                            additionsDiv.append(additionSpan);
                        }
                        donutAdditionsDiv.append(additionsHeaderDiv);
                        donutAdditionsDiv.append(additionsDiv);
                        cardDiv.append(donutAdditionsDiv);
                    }
                    cardDonutSellerInfoDiv.append(sellerHeaderDiv);
                    cardDonutSellerInfoDiv.append(sellerInitialsDiv);
                    cardDonutSellerInfoDiv.append(sellerInfoDiv);
                    cardDonutSellerInfoDiv.append(donutPriceDiv);
                    cardDiv.append(cardDonutSellerInfoDiv);
                    productCardsDiv.append(cardDiv);
                }
            }
        }
    }
}
showUsersCards(users);
searchImage?.addEventListener("click", () => {
    searchHandler(searchInput.value);
});
export {};
