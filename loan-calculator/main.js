const $ = document.getElementById.bind(document);
const loanEl = $('loan-amount');
const interestEl = $('interest-rate');
const monthEl = $('months-to-pay');
const resultEl = $('result');

function calPayment(){
    let loanValue = loanEl.value;
    let interestValue = interestEl.value;
    let months = monthEl.value;
    let interest = (loanValue * (interestValue * 0.01)) / months;
    let payment = (loanValue/months+interest).toFixed(2);
    resultEl.innerText = `${payment}`;
}
