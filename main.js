//save price after first load
const firstPrice1 = parseFloat(document.getElementById('current-price1').innerText);
const firstPrice2 = parseFloat(document.getElementById('current-price2').innerText);
  //plus1 button handler
  document.getElementById('plus-item1').onclick=function(){
    const item = quantity('current-item1');
    document.getElementById('current-item1').value = item + 1;
        const currentPrice = itemPrice('current-price1');
        const itemPrice1 = currentPrice + firstPrice1;
        document.getElementById('current-price1').innerText =  itemPrice1;
        if (item == 1) {
            document.getElementById('minus-item1').disabled = false;
        }
        //subtotal
        var firstSubtotal = parseFloat(document.getElementById('sub-total').innerText);
        var subTotal = firstSubtotal + firstPrice1;
        document.getElementById('sub-total').innerText = subTotal;
        //vat
        var firstVat = parseFloat(document.getElementById('vat').innerText);
        var vat = 0.05 * subTotal;
        var roundVat = Math.round(vat);
        document.getElementById('vat').innerText = roundVat;
        //total
        var total = subTotal + roundVat ;
        var roundTotal = Math.round(total);
        document.getElementById('total').innerText = roundTotal;
    
};
//minus1 button handler
document.getElementById('minus-item1').onclick=function(){
    const item = quantity('current-item1');
    if(item == 1){
        document.getElementById('minus-item1').disabled = true;
    }else{
        document.getElementById('current-item1').value = item - 1;
        const currentPrice = itemPrice('current-price1');
        const itemPrice2 = currentPrice - firstPrice1;
        document.getElementById('current-price1').innerText = itemPrice2;
        //subtotal
        var firstSubtotal = parseFloat(document.getElementById('sub-total').innerText);
        var subTotal = firstSubtotal - firstPrice1;
        document.getElementById('sub-total').innerText = subTotal; 
        //vat
        var firstVat = parseFloat(document.getElementById('vat').innerText);
        var vat = 5/100 * subTotal;
        var roundVat = Math.round(vat);
        document.getElementById('vat').innerText = roundVat;
        //total
        var total = subTotal + roundVat ;
        var roundTotal = Math.round(total);
        document.getElementById('total').innerText = roundTotal;
    }
    
};
//plus2 button handler
document.getElementById('plus-item2').onclick=function(){
    const item = quantity('current-item2');
    document.getElementById('current-item2').value = item + 1;
        const currentPrice = itemPrice('current-price2');
        const itemPrice2 = currentPrice + firstPrice2;
        document.getElementById('current-price2').innerText = itemPrice2;
        if (item == 1) {
            document.getElementById('minus-item2').disabled = false;
        }
         //subtotal
        var firstSubtotal = parseFloat(document.getElementById('sub-total').innerText);
        var subTotal = firstSubtotal + firstPrice2;
        document.getElementById('sub-total').innerText = subTotal;  
        //vat
        var firstVat = parseFloat(document.getElementById('vat').innerText);
        var vat = 5/100 * subTotal;
        var roundVat = Math.round(vat);
        document.getElementById('vat').innerText = roundVat;
        //total
        var total = subTotal + roundVat ;
        var roundTotal = Math.round(total);
        document.getElementById('total').innerText = roundTotal;
  
};
//minus2 button handler
document.getElementById('minus-item2').onclick=function(){
    const item = quantity('current-item2');
    if(item == 1){
        document.getElementById('minus-item2').disabled = true;
    }else{
        document.getElementById('current-item2').value = item - 1;
        const currentPrice = itemPrice('current-price2');
        document.getElementById('current-price2').innerText = currentPrice - firstPrice2;
          //subtotal
        var firstSubtotal = parseFloat(document.getElementById('sub-total').innerText);
        var subTotal = firstSubtotal - firstPrice2;
        document.getElementById('sub-total').innerText = subTotal;  
        //vat
        var firstVat = parseFloat(document.getElementById('vat').innerText);
        var vat = 5/100 * subTotal;
        var roundVat = Math.round(vat);
        document.getElementById('vat').innerText = roundVat;
        //total
        var total = subTotal + roundVat ;
        var roundTotal = Math.round(total);
        document.getElementById('total').innerText = roundTotal;
    }
    
};
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
    return price;
    if (price >0) {
        return price;
    } else {
        return 0;
    }
}