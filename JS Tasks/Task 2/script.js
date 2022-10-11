/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

function Calculator() {
const clickCalculator = document.getElementById('btn__element');
clickCalculator.addEventListener('click', e => document.getElementById('btn__state')
.innerHTML = ++ document.getElementById ('btn__state').innerHTML);
}

Calculator();