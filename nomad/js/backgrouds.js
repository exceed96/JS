const Images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
];
const ChosenImage = Images[Math.floor(Math.random() * Images.length)];
const BgImage = document.createElement("img");
BgImage.src = `images/${ChosenImage}`;
document.body.appendChild(BgImage);