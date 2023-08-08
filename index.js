// Random Number 1 for img one
let randomNumber1=Math.floor(Math.random()*6)+1;

let randomDiceImage='dice' + randomNumber1 + '.png';//dice1-6

let randoImageSource= "images/" + randomDiceImage;
let image1=document.querySelectorAll('img')[0];

image1.setAttribute('src',randoImageSource);

// RandomNumber 2 for img 2

let randomNumber2=Math.floor(Math.random()*6)+1;

let randomDiceImage2='dice' + randomNumber2 + '.png';
let randoImageSource2="images/" +randomDiceImage2;
let image2=document.querySelectorAll('img')[1];

image2.setAttribute('src',randoImageSource2);



// console.log(randomNumber1);

// Compare betwen number one and number 2

if(randomNumber1> randomNumber2){
    document.querySelector('h1').innerHTML="🥳 Player One Wins";

}else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML="🥳 Player Two Wins";


}else{
    document.querySelector('h1').innerHTML="⚒️Draw!"
}