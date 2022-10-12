/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

    
const convert = document.getElementById('submit-btn');
convert.addEventListener('click',kiloweightConverter);

convert.onclick = function() {

return false;
}

// Converter

function kiloweightConverter() {
    const kilograms = document.getElementById('search').value;
    document.getElementById('output').style.visibility = 'visible'

    document.getElementById('svarai').innerHTML = kilograms * 2.2046;
    document.getElementById('gramai').innerHTML = kilograms / 0.0010000;
    document.getElementById('uncijos').innerHTML = kilograms * 35.274;

   
}




