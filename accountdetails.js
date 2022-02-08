"use strict";
const userdetails = JSON.parse(localStorage.getItem("details"));

accountDetails.innerText = `
        Name:${userdetails.name},
        Address:${userdetails.address},
        UserName:${userdetails.username},
        Password:${userdetails.password},
        `;
