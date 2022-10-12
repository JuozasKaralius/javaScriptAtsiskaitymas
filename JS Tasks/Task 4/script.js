/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

let list = {};
function loadData(cars){
	const card = document.getElementById("output");

	for(let i=0;i < cars.length;i++){
		const container = document.createElement('div');
		const made = document.createElement('div');
		made.innerText = cars[i].brand;
		
		made.className = "brandContainer";
		container.className = "generalContainer";
		const model = document.createElement('div');
		model.innerText = cars[i].models;
		model.className = "modelContainer";
		container.append(made);
		container.append(model);

		card.append(container);
	}	
}
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
        // console.log('Output: ', output);
		list = output;
		loadData(list);
        
}).catch(err => console.error(err));
