//first btn

const plusBtn = document.getElementById('plus-btn').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity','currentPrice',1200); 
    sum ('currentPrice', 'currentPrice2','subtotal','tax','total')
});
const minusBtn = document.getElementById('minus-btn').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity','currentPrice',1200); 
    sum ('currentPrice', 'currentPrice2','subtotal','tax','total')


});

// second btn

const plusBtn2 = document.getElementById('plus-btn2').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity2','currentPrice2',100); 
    sum ('currentPrice', 'currentPrice2','subtotal','tax','total')

});
const minusBtn2 = document.getElementById('minus-btn2').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity2','currentPrice2',100); 
    sum ('currentPrice', 'currentPrice2','subtotal','tax','total')

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


function sum (price1,price2,subTotal,tax,total){
    let price1InnerValue = document.getElementById(price1).innerText;
    let price1InnerValueNum = parseFloat(price1InnerValue);
    let price2InnerValue = document.getElementById(price2).innerText;
    let price2InnerValueNum = parseFloat(price2InnerValue);
    let subTotalInnerValue = document.getElementById(subTotal).innerText;
    let subTotalInnerValueNum = parseFloat(subTotalInnerValue);
    let subTotalAmount = price1InnerValueNum + price2InnerValueNum;

    let totalsubTotalAmount = subTotalAmount + subTotalInnerValueNum;

    let finalSubTotal = document.getElementById(subTotal).innerText = subTotalAmount;

    let taxInnerValue = document.getElementById(tax).innerText;
    let taxInnerValueNum = parseFloat(taxInnerValue);

    let taxTotal = taxInnerValueNum;
    let taxNow = document.getElementById(tax).innerText = taxTotal;

    let totalInnerValue = document.getElementById(total).innerText;
    let totalInnerValueNum = parseFloat(totalInnerValue);



    let finalAmount = subTotalAmount + taxTotal;

    let finalTotal = document.getElementById(total).innerText = finalAmount;

}






