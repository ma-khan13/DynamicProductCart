function clickedBtn(productQuantity,productPrice, price , quantityPlus , type) {
    let phoneQuantity = document.getElementById(productQuantity)
    let phoneQuantityNumber = phoneQuantity.value;
    if (quantityPlus) {
        phoneQuantity.value = parseFloat(phoneQuantityNumber) + 1;
        totalPhonePrice = document.getElementById(productPrice).innerText = phoneQuantity.value * price;
    } else if(phoneQuantityNumber > 0){
        phoneQuantity.value = parseFloat(phoneQuantityNumber) - 1;
        let phonePrice = document.getElementById(productPrice);
        let pevPrice = phonePrice;
        pevPrice.innerText = parseFloat(pevPrice.innerText) - price;
    }
    getTotal();
}
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    clickedBtn('phone-quantity' , 'phone-price', 1219 , true)
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    clickedBtn('phone-quantity' , 'phone-price', 1219 , false )
})
document.getElementById('case-btn-plus').addEventListener('click', function () {
    clickedBtn('case-quantity' , 'case-price', 59 , true)
})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    clickedBtn('case-quantity' , 'case-price', 59 , false)
})

function getTotal() {
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total'); 
    const subTotalPrice = subTotal.innerText = parseInt(phonePrice) + parseInt(casePrice);
    const totalTax = tax.innerText = subTotalPrice / 10;
    total.innerText = subTotalPrice + totalTax;
}
getTotal()