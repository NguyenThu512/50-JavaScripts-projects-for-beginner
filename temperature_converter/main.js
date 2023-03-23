const $ = document.getElementById.bind(document);
const inputC = $('celsius');
const inputF = $('fahrenheit');
const inputK = $('kelvin');

inputC.onchange = function(e){
    let value = parseFloat(e.target.value);
    inputF.value = (value * 1.8 + 32).toFixed(2);
    inputK.value = (value + 273.32).toFixed(2);
}

inputF.onchange = function(e){
    let value = parseFloat(e.target.value);
    inputC.value = ((value - 32) / 1.8).toFixed(2);
    inputK.value = ((value - 32) / 1.8 + 273.32).toFixed(2);
}

inputK.onchange = function(e){
    let value = parseFloat(e.target.value);
    inputC.value = (value - 273.32).toFixed(2);
    inputF.value = ((value - 273.32) * 1.8 + 32).toFixed(2);
}