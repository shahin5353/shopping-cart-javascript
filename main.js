
//save price after first load
const firstPrice1 = parseFloat(document.getElementById('current-price1').innerText);
const firstPrice2 = parseFloat(document.getElementById('current-price2').innerText);
  //plus1 button handler
document.getElementById('plus-item1').onclick=function(){
    const item = quantity('current-item1');
    document.getElementById('current-item1').value = item + 1;
    priceUpdate('current-price1',firstPrice1);
    if (item == 1) {
        document.getElementById('minus-item1').disabled = false;
    }
    const subTotal = getSubTotal(firstPrice1);
    const totalTax = getTax(subTotal);
    const totalPrice = getTotal(subTotal,totalTax);
};
//minus1 button handler
document.getElementById('minus-item1').onclick=function(){
    const item = quantity('current-item1');
    if(item == 1){
        document.getElementById('minus-item1').disabled = true;
    }else{
        document.getElementById('current-item1').value = item - 1;
        priceUpdate('current-price1',-firstPrice1);
        const subTotal = getSubTotal(-firstPrice1);
        const totalTax = getTax(subTotal);
        const totalPrice = getTotal(subTotal,totalTax);
    }  
};
//plus2 button handler
document.getElementById('plus-item2').onclick=function(){
    const item = quantity('current-item2');
    document.getElementById('current-item2').value = item + 1;
    priceUpdate('current-price2',firstPrice2);
    if (item == 1) {
        document.getElementById('minus-item2').disabled = false;
    }
    const  subTotal = getSubTotal(firstPrice2);
    const totalTax = getTax(subTotal);
    const totalPrice = getTotal(subTotal,totalTax);
};
//minus2 button handler
document.getElementById('minus-item2').onclick=function(){
    const item = quantity('current-item2');
    if(item == 1){
        document.getElementById('minus-item2').disabled = true;
    }else{
        document.getElementById('current-item2').value = item - 1;
        priceUpdate('current-price1',firstPrice2);
        const subTotal = getSubTotal(-firstPrice2);
        const totalTax = getTax(subTotal);
        const totalPrice = getTotal(subTotal,totalTax);
    } 
};
//item1 handler
document.getElementById('remove-item1').onclick=function(){
    document.getElementById('item1').style.display="none";
     const currentPrice1 = parseFloat(document.getElementById('current-price1').innerText);
     const subTotal = getSubTotal(-currentPrice1);
     const totalTax = getTax(subTotal);
     const totalPrice = getTotal(subTotal,totalTax);
}
//item2 handler
document.getElementById('remove-item2').onclick=function(){
    document.getElementById('item2').style.display="none";
     const currentPrice2 = parseFloat(document.getElementById('current-price2').innerText);
     const subTotal = getSubTotal(-currentPrice2);
     const totalTax = getTax(subTotal);
     const totalPrice = getTotal(subTotal,totalTax);
}
//function
function quantity(id){
    const currentItem =parseFloat( document.getElementById(id).value);
    if (currentItem >0) {
        return currentItem;
    } else {
        return 0;
    }
}
function itemPrice(id){
    const price = parseFloat(document.getElementById(id).innerText);
    if (price >0) {
        return price;
    } else {
        return 0;
    }
}
function priceUpdate(currentPriceId,firstPriceId){
    const currentPrice = itemPrice(currentPriceId);
    const newPrice = currentPrice + firstPriceId
    document.getElementById(currentPriceId).innerText = newPrice;
    return newPrice;
}
function getSubTotal(firstPriceId){
    const firstSubtotal = parseFloat(document.getElementById('sub-total').innerText);
    const subTotal = firstSubtotal + firstPriceId;
    document.getElementById('sub-total').innerText = subTotal;
    return subTotal;
}
function getTax(subTotalVal){
    const tax = 5/100 * subTotalVal;
    const roundTax = Math.round(tax);
    document.getElementById('tax').innerText = roundTax;
    return roundTax;
}
function getTotal(subTotalVal,totalTaxVal){
    const total = subTotalVal + totalTaxVal ;
    const roundTotal = Math.round(total);
    document.getElementById('total').innerText = roundTotal;
    return roundTotal;
}