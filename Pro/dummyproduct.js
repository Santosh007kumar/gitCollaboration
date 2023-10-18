// data to map
const faceCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
        id:201,
        originalPrice:325,
        discountedPrice:276,
        name:"Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
        id:202,
        originalPrice:1309,
        discountedPrice:113,
        name:"Daily Glow Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
        id:203,
        originalPrice:1175,
        discountedPrice:999,
        name:"Deep Pore Cleansing Regime",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
]

// append to this div
let faceCareContainer = document.getElementById("faceCareContainer");



let data = JSON.parse(localStorage.getItem("cart"))||[];

let c = data.length;
function fun(){
 
  let count = document.querySelector("#cartCount");
    count.innerText=c;

}
fun()

// image of the product
// name of the product
// original Price
// discounted Price
// use the img tag for image of single item.
// use the p tag for name, original and discounted price of single item.
// Hint: for mapping data

// localStorage.setItem("cart", JSON.stringify)

faceCareData.map((ele,ind)=>{
  
  let img = document.createElement("img");
  let name =document.createElement("p");
  let originalPrice=document.createElement("p");
  let discountedPrice=document.createElement("p");
  let btn =document.createElement("button")


  let obj ={
    img:ele.img,
    name:ele.name,
    originalPrice:ele.originalPrice,
    discountedPrice:ele.discountedPrice,

  }

  img.src = ele.img;
  name.innerText=ele.name;
  originalPrice.innerText=ele.originalPrice;
  discountedPrice.innerText=ele.discountedPrice;
  btn.innerText="Add to Cart";

 

  

  let div = document.createElement("div");
  div.append(img,name,originalPrice,discountedPrice,btn);

  faceCareContainer.append(div);

btn.addEventListener("click",()=>{
  data.push(obj);

  c++;
  
  localStorage.setItem("cart", JSON.stringify(data))
  fun()
})


})
