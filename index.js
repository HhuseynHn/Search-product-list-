/** @format */

let list = [
  {
    title: "Tishirt-Tsgrt",
    category: "Tshirt",
    price: 25,
    image: "./img/tsgrt.png",
  },
  {
    title: "Tshirt-simple-w",
    category: "Tshirt",

    price: 35,
    image: "./img/smple1.webp",
  },
  {
    title: "Tshirt-simple-s",
    category: "Tshirt",
    price: 55,
    image: "./img/simpleTshrt.webp",
  },
  {
    title: "Tishirt-simple",
    category: "Tshirt",
    price: 99,

    image: "./img/simple-2.webp",
  },
  {
    title: "Tishirt-design",
    category: "Tshirt",
    price: 66,

    image: "./img/design.jpg",
  },
  {
    title: "Jeans-design",
    category: "Trouthers",
    price: 77,

    image: "./img/trs-1jpg.jpg",
  },
  {
    title: "Jeans-s",
    category: "Trouthers",
    price: 89,

    image: "./img/jeans-1.jpg",
  },
  {
    title: "Jeans-m",
    category: "Trouthers",
    price: 109,

    image: "./img/jeans-2.jpg",
  },
  {
    title: "Jeans-w",
    category: "Trouthers",
    price: 129,

    image: "./img/trs-2.jpg",
  },
  {
    title: "Jeans-L",
    category: "Trouthers",
    price: 129,

    image: "./img/trs-3.jpg",
  },
];

let titleText = document.querySelector(".input-title");
let price = document.querySelector(".input-price");
let category = document.querySelector("#input-category");
let button = document.querySelector(".btn");
let productList = document.querySelector(".produc-list");
let prceValue = document.querySelector(".price-value");

function render(productListElemnt) {
  productListElemnt.forEach((element) => {
    let ul = document.createElement("ul");
    productList.append(ul);

    let liTitle = document.createElement("li");
    let liCatergory = document.createElement("li");
    let liPrice = document.createElement("li");
    let liImage = document.createElement("li");
    let img = document.createElement("img");
    img.classList.add("img-size");

    ul.append(liImage);
    liImage.append(img);
    ul.append(liTitle);
    ul.append(liCatergory);
    ul.append(liPrice);

    liTitle.innerHTML = element.title;
    liCatergory.innerHTML = element.category;
    liPrice.innerHTML = element.price;
    img.setAttribute("src", element.image);
  });
}

render(list);
prceValue.innerHTML = price.value;
price.oninput = function () {
  prceValue.innerHTML = this.value;
};

button.addEventListener("click", () => {
  productList.innerHTML = "";
  let result = list.filter((elmnt) =>
    elmnt.title
      .toLocaleLowerCase()
      .includes(titleText.value.toLocaleLowerCase())
  );

  let priceResult = result.filter((elm) => elm.price <= +price.value);
  productList.innerHTML = "";

  render(priceResult);

  if (category.value !== "All") {
    productList.innerHTML = "";
    let categoryResult = priceResult.filter((elmnt) =>
      elmnt.category.includes(category.value)
    );
    console.log("OK");
    return render(categoryResult);
  }
});
