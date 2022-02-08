"use strict";

let userLogin = document.querySelector(".userLogin-container");
let restaurant = document.querySelector(".restaurant");
let recipesMenu = document.querySelector(".recipes");

//Storing menu items
const recipes = [
  {
    img: "./images/img1.jpg",
    productname: "Marble Cake",
    price: "450 Rs",
    Rating: "4.6 Rating",
  },
  {
    img: "./images/img2.jpg",
    productname: "Bread Salad",
    price: "700 Rs",
    Rating: "4.2 Rating",
  },
  {
    img: "./images/img3.jpg",
    productname: "Panneer tikka",
    price: "800 Rs",
    Rating: "4.8 Rating",
  },
  {
    img: "./images/img4.jpg",
    productname: "Avocado Salad",
    price: "950 Rs",
    Rating: "4.4 Rating",
  },
  {
    img: "./images/img5.jpg",
    productname: "Russian Salad",
    price: "680 Rs",
    Rating: "4.9 Rating",
  },
  {
    img: "./images/img6.jpg",
    productname: "Marble Icecream",
    price: "750 Rs",
    Rating: "4.3 Rating",
  },
];

//Fetching restaurant data from API
const recipesData = async () => {
  const data = await fetch(
    "https://6193976ed3ae6d0017da86a1.mockapi.io/api/restaurants"
  );
  const resData1 = await data.json();
  // console.log(resData1);
  resData1.forEach((user1) => {
    restaurant.innerHTML += `
      <div class="restaurants">
        <img
          class="restaurant-img"
          src="${user1.img}"
          alt="restaurant-1 pic"
          width="350"
          height="350"
        />
        <ul class="restaurant-data">
          <li class="restaurant-name">${user1.name}</li>
          <li class="restaurant-type">Food type: ${user1.foodType}</li>
          <li class="last-child">⭐${user1.ratings}</li>
        </ul>
        <a class="restaurant-links" href="items.html">Menu Items</a>
      </div>
      `;
  });
};
recipesData();

const menu = () => {
  recipes.forEach((recipe) => {
    recipesMenu.innerHTML += `
  <figure class="product">
              <img
                src="${recipe.img}"
                alt="cake"
                width="250"
                height="250"
              />
              <div class="product-details">
                <h3>${recipe.productname}</h3>
                <ul class="product-info">
                  <li>${recipe.price}</li>
                  <li>${recipe.Rating}</li>
                </ul>
                <button class="btn cartbtn">
                  Add to cart
                </button>
              </div>
            </figure> 
  `;
  });
};
menu();

// //adding cart data to local storage
const cartBtn = document.getElementsByClassName("btn");
let menuItems = [];
for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("click", function (e) {
    if (typeof Storage !== "undefined") {
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[0].textContent,
        price: e.target.parentElement.children[1].children[0].textContent,
        no: 1,
      };
      if (JSON.parse(localStorage.getItem("menuItems")) === null) {
        menuItems.push(item);
        localStorage.setItem("menuItems", JSON.stringify(menuItems));
        window.location.reload();
      } else {
        const localItems = JSON.parse(localStorage.getItem("menuItems"));
        localItems.map((data) => {
          if (item.id === data.id) {
            item.no = data.no + 1;
          } else {
            menuItems.push(data);
          }
        });
        menuItems.push(item);
        localStorage.setItem("menuItems", JSON.stringify(menuItems));
        window.location.reload();
      }
    } else {
      alert("local storage is not working on your browser");
    }
  });
}

//adding items to cart
const iconCart = document.querySelector(".icon-cart p");
let no = 0;
JSON.parse(localStorage.getItem("menuItems")).map((data) => {
  no = no + data.no;
});
iconCart.innerHTML = no;
