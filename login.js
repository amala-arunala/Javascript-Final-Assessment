"use strict";

let userName = document.querySelector(".userName");
let Password = document.querySelector(".password");
let submitBtn = document.getElementById("submitBtn");
let accountDetails = document.getElementById("login-details");

//fetching user data from API
const userData = async () => {
  const data = await fetch(
    "https://6193976ed3ae6d0017da86a1.mockapi.io/api/user_profile"
  );
  const data1 = await data.json();
  console.log(data1);
  submitBtn.addEventListener("click", function () {
    data1.forEach((user1) => {
      if (
        userName.value === user1.username &&
        Password.value === user1.password
      ) {
        let userDetails = localStorage.setItem(
          "details",
          JSON.stringify(user1)
        );
        console.log(userDetails);
        location.href = "./index.html";
      }
    });
  });
};
userData();
