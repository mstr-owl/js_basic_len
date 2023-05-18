const dataInfo = `[{
    "backgroundimage": "url(./img/card1.jpg)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
},
{
    "backgroundimage": "url(./img/card2.png)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
},
{
    "backgroundimage": "url(./img/card3.png)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
},
{
    "backgroundimage": "url(./img/card4.png)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
},
{
    "backgroundimage": "url(./img/card5.png)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
},
{
    "backgroundimage": "url(./img/card6.png)",
    "header": "ELLERY X MO CAPSULE",
    "paragraph": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
}
]`;

const data = JSON.parse(dataInfo);
console.log(data);

const cardsEl = document.querySelector(".cards");

data.forEach((element) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  const cardBackDarkEl = document.createElement("div");
  cardBackDarkEl.classList.add("card__background_dark");
  cardBackDarkEl.style.backgroundImage = element.backgroundimage;
  console.log(element.backgroundimage);

  const divBlackEl = document.createElement("div");
  divBlackEl.classList.add("blackout");

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("card_buy_btn");
  buttonEl.textContent = "Add to Cart";

  const imgEl = document.createElement("img");
  imgEl.classList.add("productImage");
  imgEl.src = "./img/add_to_cart_icon.png";

  const divTitleEl = document.createElement("div");
  divTitleEl.classList.add("title_price");

  const productTitleEl = document.createElement("h4");
  productTitleEl.classList.add("title_header");
  productTitleEl.textContent = element.header;

  const parEl = document.createElement("p");
  parEl.classList.add("card_paragraph");
  parEl.textContent = element.paragraph;

  const parPriceEl = document.createElement("p");
  parPriceEl.classList.add("price");
  parPriceEl.textContent = element.price;

  cardsEl.appendChild(cardEl);
  cardEl.appendChild(cardBackDarkEl);
  cardBackDarkEl.appendChild(divBlackEl);
  divBlackEl.appendChild(buttonEl);
  buttonEl.prepend(imgEl);
  cardEl.appendChild(divTitleEl);
  divTitleEl.appendChild(productTitleEl);
  divTitleEl.appendChild(parEl);
  divTitleEl.appendChild(parPriceEl);
});

let menuActive = document.querySelector(".menu_active");
let headerMenu = document.querySelector(".burger");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

headerMenu.addEventListener("click", toggleMenu);
