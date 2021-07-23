
function handleProductChange(product,isIncrease) {
      const productCount = document.getElementById(product +'-count');
      const productNum = parseInt(productCount.value);
// Product counting if 
      let productNewCount = productNum;
        if (isIncrease == true ) {
          productNewCount = productNum + 1;
      }
      if (isIncrease == false && productNum>0) {
          productNewCount = productNum - 1;
      }
      productCount.value = productNewCount;
      const priceProduct = document.getElementById(product +'-price');
// Product prices if 
    let productItemCount = 0;
    if (product == 'phone') {
      productItemCount = productNewCount * 1219;
    }
    if (product == 'case') {
      productItemCount = productNewCount * 59;
    }
    priceProduct.innerText = '$'+productItemCount;
  totalPrices();
}
  
function totalPrices() {

  const phoneNum= getInputValue('phone');
  const caseNum = getInputValue('case');

  const amount = phoneNum * 1219 + caseNum * 59;
  const tex = Math.round(amount * 0.1);
  const grandTotal = amount + tex;

  document.getElementById('total-price').innerText = '$'+amount;
  document.getElementById('tax-amount').innerText ='$'+ tex;
  document.getElementById('grand-total').innerText ='$'+ grandTotal;


}

function getInputValue(product) {
   const productt = document.getElementById(product+'-count');
  const productNum = parseInt(productt.value);
  return productNum;
}


 