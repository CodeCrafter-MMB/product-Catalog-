let items = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: "$50",
    description:
      " Extra buttons that can be <br> customized for quick <br> in-game actions.",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: "$50",
    description:
      " Extra buttons that can be <br> customized for quick <br> in-game actions.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$50",
    description:
      " Extra buttons that can be <br> customized for quick <br> in-game actions.",
  },
];

let container = document.getElementById("container-card");

function renderItems() {
  container.innerHTML = "";

  items.map((item) => {
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "card");

    divContainer.innerHTML = `
            <div class = "cont-div">
                <div id="top"><img src="/Gaming Mouse.png"></div>
                <div id="bott">
              <h3>${item.name}</h3>
              <p id="p1">${item.price}</p>
              <p>${item.description}</p>
              <div id= btn ><button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button></div>
             </div>
              </div>
          `;

    container.appendChild(divContainer);
  });
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);

  renderItems();
}

renderItems();
