let randomNumber1=Math.floor(Math.random()*6+1);

let randomDiceImage='dice' + randomNumber1 + '.png';//dice1-6

let randoImageSource= "images/" + randomDiceImage;
let image1=document.querySelectorAll('img')[0];

image1.setAttribute('src',randoImageSource);

// RandomNumber 2

let randomNumber2=Math.floor(Math.random()*6+1);

let randomDiceImage2='dice' + randomNumber2 + '.png';
let randoImageSource2="images/" +randomDiceImage2;
let image2=document.querySelectorAll('img')[1];

image2.setAttribute('src',randoImageSource2);



// console.log(randomNumber1);