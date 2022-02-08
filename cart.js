"use strict";
const cartItem = document.querySelector(".cart-item");

//adding cart data in table
const cartTable = cartItem.querySelector("table");
let tableInfo = "";
tableInfo += `<tr>
<th>S.No</th>
<th>Item Name</th>
<th>Item No</th>
<th>Item Price</th>
</tr>`;
if (JSON.parse(localStorage.getItem("menuItems")) === null) {
  tableInfo += `<tr><td colspan="5">No items found</td></tr>`;
} else {
  JSON.parse(localStorage.getItem("menuItems")).map((data) => {
    tableInfo += `<tr><th>${data.id}</th><th>${data.name}</th>
    <th>${data.no}</th><th>${data.price}</th>
    </tr>`;
  });
}
cartTable.innerHTML = tableInfo;
