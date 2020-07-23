//first btn

const plusBtn = document.getElementById('plus-btn').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity','currentPrice',1200); 

});
const minusBtn = document.getElementById('minus-btn').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity','currentPrice',1200); 
});

// second btn

const plusBtn2 = document.getElementById('plus-btn2').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity2','currentPrice2',100); 
});
const minusBtn2 = document.getElementById('minus-btn2').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity2','currentPrice2',100); 
});




//increase value function

function increaseProductPrice(currentQuantity,currentPrice,individualPrice){
    let currentValue = document.getElementById(currentQuantity).value;
    let currentQuantityNum = parseFloat(currentValue);
    let increaseQuantityNum = currentQuantityNum  + 1;
    let currentTotalQuantity = document.getElementById(currentQuantity).value =increaseQuantityNum;


    let currentPriceValue = document.getElementById(currentPrice).innerText;
    let currentPriceValueNum = parseFloat(currentPriceValue);
    let totalPrice = individualPrice * increaseQuantityNum;
    let currentTotalPrice = document.getElementById(currentPrice).innerText = totalPrice;
 }


// //decrease value function

function decreaseProductPrice(currentQuantity,currentPrice,individualPrice){
    let currentValue = document.getElementById(currentQuantity).value;

    if(currentValue <=1){
        return currentValue;
    }

    else{
        let currentQuantityNum = parseFloat(currentValue);
        let decreaseQuantityNum = currentQuantityNum  - 1;
        let currentTotalQuantity = document.getElementById(currentQuantity).value =decreaseQuantityNum;


        let currentPriceValue = document.getElementById(currentPrice).innerText;
        let currentPriceValueNum = parseFloat(currentPriceValue);
        let totalPrice = individualPrice * decreaseQuantityNum;
        let currentTotalPrice = document.getElementById(currentPrice).innerText = totalPrice;
    
    }

}







