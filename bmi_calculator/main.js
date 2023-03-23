const $ = document.getElementById.bind(document);
const inputH = $('height');
const inputW = $('weight');
const inputBMI = $('result');
const btn = $('btn');
const bmiInfo = $('bmi-info');

btn.onclick = function(){
    let height = inputH.value;
    let weight = inputW.value;

    if(height && weight){
        height/=100
        let bmi = weight/(height*height);
        inputBMI.value = bmi;

        if (bmi < 18.5) {
            bmiInfo.innerText = "Under weight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiInfo.innerText = "Normal weight";
        } else if (bmi > 24.9 && bmi <= 29.9) {
            bmiInfo.innerText = "Overweight";
        } else if (bmi > 29.9) {
            bmiInfo.innerText = "Obesity";
        }
    } else {
        inputBMI.value = NaN;
        bmiInfo.innerText = "Unknown";
    }
}