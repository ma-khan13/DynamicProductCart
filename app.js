


// function clickedBtm(productQuantity,productPrice, price) {
//     // document.getElementById('phone-btn-plus').addEventListener('click', function () {
//     let phoneQuantity = document.getElementById(productQuantity)
//     let phoneQuantityNumber = phoneQuantity.value;
//     phoneQuantity.value = parseFloat(phoneQuantityNumber) + 1;
//     phoneTotalPrice = document.getElementById(productPrice).innerText = phoneQuantity.value * price
//     getTotal();
// // })
// }

document.getElementById('phone-btn-plus').addEventListener('click', function () {
    let phoneQuantity = document.getElementById('phone-quantity')
    let phoneQuantityNumber = phoneQuantity.value;
    phoneQuantity.value = parseFloat(phoneQuantityNumber) + 1;
    phoneTotalPrice = document.getElementById('phone-price').innerText = phoneQuantity.value * 1219
    getTotal();
    // clickedBtm('phone-quantity' , 'phone-price', 1219)
})

// clickedBtm()
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    let phoneQuantity = document.getElementById('phone-quantity')
    let phoneQuantityNumber = phoneQuantity.value;
    if (phoneQuantityNumber > 0) {
        phoneQuantity.value = parseFloat(phoneQuantityNumber) - 1
        let phonePrice = document.getElementById('phone-price');
        let  currentPrice = phonePrice.innerText;
        phonePrice.innerText = parseFloat(currentPrice) - 1219;
        getTotal();
    }
})




document.getElementById('case-btn-plus').addEventListener('click', function () {
    let caseQuantity = document.getElementById('case-quantity')
    let caseQuantityNumber = caseQuantity.value;
    caseQuantity.value = parseFloat(caseQuantityNumber) + 1;
    document.getElementById('case-price').innerText = caseQuantity.value * 59;
    getTotal()
    // clickedBtm('case-quantity' , 'case-price', 59)

})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    let caseQuantity = document.getElementById('case-quantity')
    let caseQuantityNumber = caseQuantity.value;
    if (caseQuantityNumber > 0) {
        caseQuantity.value = parseFloat(caseQuantityNumber) - 1
        let casePrice = document.getElementById('case-price');
        let  currentPrice = casePrice.innerText;
        casePrice.innerText = parseFloat(currentPrice) - 59;
        getTotal()
    }
})

function getTotal() {
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotal = document.getElementById('sub-total').innerText = parseFloat(phonePrice) + parseFloat(casePrice);
    const tax = document.getElementById('tax').innerText = (parseFloat(phonePrice) / 10 + parseFloat(casePrice) / 10).toFixed(2)
    document.getElementById('total').innerText = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);
}

getTotal()