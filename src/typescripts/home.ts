import { User, CompanyObj, DonutObj } from "./utils/userModel";

let usersTest: User[] = JSON.parse(localStorage.getItem("donutseek") as string);

const loggedUser:User = JSON.parse(String(localStorage.getItem("loggedUser")));

if(!loggedUser) {
    window.location.href = "../pages/login.html"
}

const userProfileDiv = document.getElementById("profile") as HTMLDivElement;
const productCardsDiv = document.getElementById("cards") as HTMLDivElement;

const userCartDiv = document.createElement("div") as HTMLDivElement;
const userCartButtonDiv = document.createElement("div") as HTMLDivElement;
const userCartButtonImage = document.createElement("img") as HTMLImageElement;
const userCartItemsCounterSpan = document.createElement("span") as HTMLImageElement;
const toolTip = document.getElementById("toolTip") as HTMLElement;

const searchInput = document.getElementById("search") as HTMLInputElement;
const searchImage = document.getElementById("search-icon") as HTMLImageElement;
const glutenFreeCheckBox = document.getElementById("glutenFreeCheckBox") as HTMLInputElement;
const lactoseFreeCheckBox = document.getElementById("lactoseFreeCheckBox") as HTMLInputElement;

const shoppingCartDiv = document.createElement("div") as HTMLDivElement;
const shoppingCartHeaderDiv = document.createElement("div") as HTMLDivElement;
const shoppingCartMainDiv = document.createElement("div") as HTMLDivElement;
const shoppingCartCheckoutDiv = document.createElement("div") as HTMLDivElement;

const shoppingCartCheckoutBtnDiv = document.createElement("div") as HTMLDivElement;
const totalPriceSpan = document.createElement("span") as HTMLSpanElement;

const logoutImage = document.getElementById("logout") as HTMLImageElement;

let userCart: DonutObj[] = [];

let glutenFlag = false;
let lactoseFlag = false;
let isShoppingCartOpen = false;

const setCartItemsCount = (): void => {
    userCartItemsCounterSpan.textContent = String(userCart.length);
}

if (!loggedUser.isSeller) {
    userCartDiv.classList.add("user-cart");
    userCartButtonDiv.classList.add("user-cart__btn");
    userCartButtonImage.classList.add("cart-icon");
    userCartItemsCounterSpan.classList.add("items-counter");
    toolTip.title = `${loggedUser.firstName} ${loggedUser.lastName}`

    userCartButtonDiv.textContent = "Cart";
    setCartItemsCount();
    userCartButtonImage.src = '../assets/icons/shopping-cart.png';

    userCartButtonDiv.append(userCartItemsCounterSpan);
    
    userCartButtonDiv.append(userCartButtonImage);
    userCartDiv.append(userCartButtonDiv);

    userProfileDiv.insertAdjacentElement("afterbegin", userCartDiv);
}

const searchHandler = (value: string): void => {
    if (value !== "") {
        let result: User[] = [];
        for (let x in usersTest) {
            let userObj: User = usersTest[x];

            if (userObj.firstName.toLowerCase().includes(value.toLowerCase()) ||
                userObj.lastName.toLowerCase().includes(value.toLowerCase())
            ) {
                result.push(userObj);
            }

        }
        showUsersCards(result);
    }
    else {
        showUsersCards(usersTest);
    }
}

const addToCartHandler = (donut: DonutObj): void => {
    userCart.push(donut);
    showCart(userCart);
    setCartItemsCount();
}

const logout = (): void => {
    localStorage.removeItem("loggedUser");
    window.location.href = "../pages/login.html"
}

const showCart = (userCartArr: DonutObj[]) => {
    let totalPrice: number = 0;
    shoppingCartMainDiv.innerHTML = "";


    for (let x in userCartArr) {
        const donutItemObj: DonutObj = userCartArr[x];

        const cartItem = document.createElement("div") as HTMLDivElement;

        const cartItemImageDiv = document.createElement("div") as HTMLDivElement;
        const cartItemImage = document.createElement("img") as HTMLImageElement;
        const cartItemImagePrice = document.createElement("span") as HTMLSpanElement;
        const cartItemNameDiv = document.createElement("div") as HTMLDivElement;
        const removeItemImage = document.createElement("img") as HTMLImageElement;


        cartItem.classList.add("cart-item");
        cartItemImageDiv.classList.add("cart-item__image");
        cartItemImage.classList.add("item-image");
        cartItemImagePrice.classList.add("item-price");
        cartItemNameDiv.classList.add("item-name");
        removeItemImage.classList.add("remove-item-icon");

        cartItemImage.src = donutItemObj.donutImage;

        cartItemImagePrice.textContent = `${donutItemObj.price}$`;
        cartItemNameDiv.textContent = donutItemObj.donutName;

        totalPrice += donutItemObj.price;

        removeItemImage.src = '../assets/icons/trash.png';
        cartItemImageDiv.append(cartItemImage);
        cartItemImageDiv.append(cartItemImagePrice);

        cartItem.append(cartItemImageDiv);
        cartItem.append(cartItemNameDiv);
        cartItem.append(removeItemImage);

        shoppingCartMainDiv.append(cartItem);

        removeItemImage.addEventListener("click", (): void => {
            removeItemCartHandler(userCartArr, Number(x));
        });
    }

    totalPriceSpan.textContent = `${String(totalPrice.toFixed(1))}$`;

}

const removeItemCartHandler = (usersCartArr: DonutObj[], index: number): void => {
    usersCartArr.splice(index, 1);
    console.log(usersCartArr);

    showCart(usersCartArr);
    setCartItemsCount();
}


const openShoppingCart = (userCartArr: DonutObj[]) => {
    isShoppingCartOpen = !isShoppingCartOpen;

    if (isShoppingCartOpen) {
        shoppingCartDiv.classList.add("shopping-cart");
        shoppingCartHeaderDiv.classList.add("shopping-cart__header");
        shoppingCartMainDiv.classList.add("shopping-cart__items");
        shoppingCartCheckoutDiv.classList.add("shopping-cart__checkout");
        shoppingCartCheckoutBtnDiv.classList.add("chechout-btn");
        totalPriceSpan.classList.add("total-price");

        shoppingCartCheckoutBtnDiv.textContent = "checkout";

        shoppingCartHeaderDiv.textContent = "CART";


        shoppingCartDiv.append(shoppingCartHeaderDiv);

        showCart(userCartArr);
        shoppingCartDiv.append(shoppingCartMainDiv);

        shoppingCartCheckoutBtnDiv.append(totalPriceSpan);
        shoppingCartCheckoutDiv.append(shoppingCartCheckoutBtnDiv);
        shoppingCartDiv.append(shoppingCartCheckoutDiv);

        userCartDiv.append(shoppingCartDiv);
    } else {
        shoppingCartDiv.remove()
    }
}

const filterGlutenHandler = (arr: User[]): void => {
    glutenFlag = !glutenFlag;
    
    if(glutenFlag) {
        const filteredUsers = arr.filter(userCardObj => {
            if (userCardObj.isSeller && userCardObj.donuts) {
                userCardObj.donuts = userCardObj.donuts.filter(elem => !elem.gluten);
                return true; // Keep this user
            }
            return false; // Exclude this user
        });
        showUsersCards(filteredUsers);
    }
    else {
        showUsersCards(JSON.parse(String(localStorage.getItem("donutseek"))));
    }
    
}


const filterLactoseHandler = (arr: User[], ): void => {
    lactoseFlag = !lactoseFlag;
    console.log(lactoseFlag);
    
    if(lactoseFlag) {
        const filteredUsers = arr.filter(userCardObj => {
            if (userCardObj.isSeller && userCardObj.donuts) {
                userCardObj.donuts = userCardObj.donuts.filter(elem => !elem.lactose);
                return true; // Keep this user
            }
            return false; // Exclude this user
        });
        showUsersCards(filteredUsers);
    }
    else {
        console.log(usersTest);
        
        showUsersCards(JSON.parse(String(localStorage.getItem("donutseek"))));
    }
    
}

function showUsersCards(usersArr: User[]): void {
    
    productCardsDiv.innerHTML = "";
    for (let x in usersArr) {
        const userCardObj: User = usersArr[x];

        if (userCardObj.isSeller) {
            if (userCardObj.donuts) {
                for (let j in userCardObj.donuts) {
                    const donutObj: DonutObj = userCardObj.donuts[j];
                    //console.log(donutObj);

                    const cardDiv = document.createElement("div") as HTMLDivElement;

                    const cardImageHeaderDiv = document.createElement("div") as HTMLDivElement;
                    const donutImage = document.createElement("img") as HTMLImageElement;
                    const donutCaloriesSpan = document.createElement("span");

                    const cardDonutInfoDiv = document.createElement("div") as HTMLDivElement;
                    const donutNameSpan = document.createElement("span") as HTMLSpanElement;
                    const donutTitleSpan = document.createElement("span") as HTMLSpanElement;

                    const cardDonutSellerInfoDiv = document.createElement("div") as HTMLDivElement;
                    const sellerHeaderDiv = document.createElement("div") as HTMLDivElement;
                    const sellerInitialsDiv = document.createElement("div") as HTMLDivElement;
                    const initialsImage = document.createElement("img") as HTMLImageElement;
                    const initialsSpan = document.createElement("span") as HTMLImageElement;
                    const sellerInfoDiv = document.createElement("div") as HTMLDivElement;
                    const InfoCompanyNameDiv = document.createElement("div") as HTMLDivElement;
                    const InfoEmailDiv = document.createElement("div") as HTMLDivElement;
                    const InfoCountryDiv = document.createElement("div") as HTMLDivElement;
                    const InfoCityDiv = document.createElement("div") as HTMLDivElement;
                    const companyNameImage = document.createElement("img") as HTMLImageElement;
                    const emailImage = document.createElement("img") as HTMLImageElement;
                    const countryImage = document.createElement("img") as HTMLImageElement;
                    const cityImage = document.createElement("img") as HTMLImageElement;
                    const companyNameSpan = document.createElement("span") as HTMLImageElement;
                    const emailSpan = document.createElement("span") as HTMLImageElement;
                    const countrySpan = document.createElement("span") as HTMLImageElement;
                    const citySpan = document.createElement("span") as HTMLImageElement;

                    const donutPriceDiv = document.createElement("div") as HTMLDivElement;
                    const donutPriceButton = document.createElement("div") as HTMLDivElement;
                    const donutPriceSpan = document.createElement("span") as HTMLDivElement;


                    cardDiv.classList.add("card");

                    cardImageHeaderDiv.classList.add("card-image-header");
                    donutImage.classList.add("donut-image")
                    donutCaloriesSpan.classList.add("donut-calories");

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
                    donutCaloriesSpan.textContent = `${donutObj.calories} kcal`;
                    initialsSpan.textContent = `${userCardObj.firstName} ${userCardObj.lastName}`;

                    sellerHeaderDiv.textContent = "Seller";

                    companyNameSpan.textContent = userCardObj.company?.companyName as string;
                    emailSpan.textContent = userCardObj.email;
                    countrySpan.textContent = userCardObj.company?.country as string;
                    citySpan.textContent = userCardObj.company?.city as string;
                    donutPriceButton.textContent = '+ Add';
                    donutPriceSpan.textContent = `${donutObj.price}$`;

                    cardImageHeaderDiv.append(donutImage);
                    cardImageHeaderDiv.append(donutCaloriesSpan);

                    cardDonutInfoDiv.append(donutNameSpan);
                    cardDonutInfoDiv.append(donutTitleSpan);

                    sellerInitialsDiv.append(initialsImage);
                    sellerInitialsDiv.append(initialsSpan);

                    InfoCompanyNameDiv.append(companyNameImage);
                    InfoCompanyNameDiv.append(companyNameSpan);
                    InfoEmailDiv.append(emailImage)
                    InfoEmailDiv.append(emailSpan)
                    InfoCountryDiv.append(countryImage)
                    InfoCountryDiv.append(countrySpan)
                    InfoCityDiv.append(cityImage)
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

                    cardDonutSellerInfoDiv.append(sellerHeaderDiv);
                    cardDonutSellerInfoDiv.append(sellerInitialsDiv);
                    cardDonutSellerInfoDiv.append(sellerInfoDiv);

                    if (!loggedUser.isSeller) {
                        cardDonutSellerInfoDiv.append(donutPriceDiv);
                    }

                    cardDiv.append(cardDonutSellerInfoDiv);

                    productCardsDiv.append(cardDiv);

                    donutPriceButton.addEventListener("click", () => {
                        addToCartHandler(donutObj);
                    });
                }
            }
        }
    }
}

showUsersCards(usersTest);

searchImage?.addEventListener("click", () => {
    searchHandler(searchInput.value)
});

userCartButtonDiv.addEventListener("click", () => {
    openShoppingCart(userCart);
});

glutenFreeCheckBox.addEventListener("click", () => {
    filterGlutenHandler(usersTest);
});

lactoseFreeCheckBox.addEventListener("click", () => {
    filterLactoseHandler(usersTest);
});

logoutImage.addEventListener("click", logout);
