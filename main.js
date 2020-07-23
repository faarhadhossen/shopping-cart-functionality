//first btn

const plusBtn = document.getElementById('plus-btn').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity'); 
});
const minusBtn = document.getElementById('minus-btn').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity'); 
});

// second btn

const plusBtn2 = document.getElementById('plus-btn2').addEventListener('click',()=>{
    increaseProductPrice('currentQuantity2'); 
});
const minusBtn2 = document.getElementById('minus-btn2').addEventListener('click',()=>{
    decreaseProductPrice('currentQuantity2'); 
});




//increase value function

function increaseProductPrice(currentQuantity){
    let currentValue = document.getElementById(currentQuantity).value;
    let currentQuantityNum = parseFloat(currentValue);
    let increaseQuantityNum = currentQuantityNum  + 1;
    let currentTotalQuantity = document.getElementById(currentQuantity).value =increaseQuantityNum;

    return currentTotalQuantity ;
}


// //decrease value function

function decreaseProductPrice(currentQuantity){
    let currentValue = document.getElementById(currentQuantity).value;

    if(currentValue <=1){
        return currentValue;
    }

    else{
        let currentQuantityNum = parseFloat(currentValue);
        let decreaseQuantityNum = currentQuantityNum  - 1;
        let currentTotalQuantity = document.getElementById(currentQuantity).value =decreaseQuantityNum;
    
        return currentTotalQuantity ;
    }

}







