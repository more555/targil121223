let usersTest = JSON.parse(localStorage.getItem("donutseek"));
console.log(usersTest);
//const copyUsers = [...users];
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
const userCartItemsCounterSpan = document.createElement("span");
const searchInput = document.getElementById("search");
const searchImage = document.getElementById("search-icon");
const glutenFreeCheckBox = document.getElementById("glutenFreeCheckBox");
const lactoseFreeCheckBox = document.getElementById("lactoseFreeCheckBox");
const shoppingCartDiv = document.createElement("div");
const shoppingCartHeaderDiv = document.createElement("div");
const shoppingCartMainDiv = document.createElement("div");
const shoppingCartCheckoutDiv = document.createElement("div");
const shoppingCartCheckoutBtnDiv = document.createElement("div");
const totalPriceSpan = document.createElement("span");
let glutenFlag = false;
let lactoseFlag = false;
let userCart = [];
let isShoppingCartOpen = false;
const setCartItemsCount = () => {
    userCartItemsCounterSpan.textContent = String(userCart.length);
};
if (!loggedUser.isSeller) {
    userCartDiv.classList.add("user-cart");
    userCartButtonDiv.classList.add("user-cart__btn");
    userCartButtonImage.classList.add("cart-icon");
    userCartItemsCounterSpan.classList.add("items-counter");
    userCartButtonDiv.textContent = "Cart";
    setCartItemsCount();
    userCartButtonImage.src = '../assets/icons/shopping-cart.png';
    userCartButtonDiv.append(userCartItemsCounterSpan);
    userCartButtonDiv.append(userCartButtonImage);
    userCartDiv.append(userCartButtonDiv);
    userProfileDiv.insertAdjacentElement("afterbegin", userCartDiv);
}
const searchHandler = (value) => {
    if (value !== "") {
        let result = [];
        for (let x in usersTest) {
            let userObj = usersTest[x];
            if (userObj.firstName.toLowerCase().includes(value.toLowerCase()) ||
                userObj.lastName.toLowerCase().includes(value.toLowerCase())) {
                result.push(userObj);
            }
        }
        showUsersCards(result);
    }
    else {
        showUsersCards(usersTest);
    }
};
const addToCartHandler = (donut) => {
    userCart.push(donut);
    showCart(userCart);
    setCartItemsCount();
};
const showCart = (userCartArr) => {
    let totalPrice = 0;
    shoppingCartMainDiv.innerHTML = "";
    for (let x in userCartArr) {
        const donutItemObj = userCartArr[x];
        const cartItem = document.createElement("div");
        const cartItemImageDiv = document.createElement("div");
        const cartItemImage = document.createElement("img");
        const cartItemImagePrice = document.createElement("span");
        const cartItemNameDiv = document.createElement("div");
        const removeItemImage = document.createElement("img");
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
        removeItemImage.addEventListener("click", () => {
            removeItemCartHandler(userCartArr, Number(x));
        });
    }
    totalPriceSpan.textContent = `${String(totalPrice.toFixed(1))}$`;
};
const removeItemCartHandler = (usersCartArr, index) => {
    usersCartArr.splice(index, 1);
    console.log(usersCartArr);
    showCart(usersCartArr);
    setCartItemsCount();
};
const openShoppingCart = (userCartArr) => {
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
    }
    else {
        shoppingCartDiv.remove();
    }
};
const filterGlutenHandler = (arr) => {
    glutenFlag = !glutenFlag;
    if (glutenFlag) {
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
};
const filterLactoseHandler = (arr) => {
    lactoseFlag = !lactoseFlag;
    console.log(lactoseFlag);
    if (lactoseFlag) {
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
};
function showUsersCards(usersArr) {
    productCardsDiv.innerHTML = "";
    for (let x in usersArr) {
        const userCardObj = usersArr[x];
        if (userCardObj.isSeller) {
            if (userCardObj.donuts) {
                for (let j in userCardObj.donuts) {
                    const donutObj = userCardObj.donuts[j];
                    //console.log(donutObj);
                    const cardDiv = document.createElement("div");
                    const cardImageHeaderDiv = document.createElement("div");
                    const donutImage = document.createElement("img");
                    const donutCaloriesSpan = document.createElement("span");
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
                    companyNameSpan.textContent = userCardObj.company?.companyName;
                    emailSpan.textContent = userCardObj.email;
                    countrySpan.textContent = userCardObj.company?.country;
                    citySpan.textContent = userCardObj.company?.city;
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
    searchHandler(searchInput.value);
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
export {};
