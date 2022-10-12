/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let list = {};



  function loadData(element){
      try{
      const card = document.getElementById("output");
      element.forEach(element => {
          const container = document.createElement('div');
          const login = document.createElement('p');
          login.innerText = element.login;
          const picture = document.createElement('img');
          picture.src = element.avatar_url;
          const pictureContainer = document.createElement('div');
          pictureContainer.append(picture);
          login.className = "loginContainer";
          pictureContainer.className = "imageContainer";
          container.className = "mainContainer";
          container.append(login);
          container.append(pictureContainer);
          card.append(container);
      });
      }catch(err){
          console.error(err);
      }
  }

  fetch(ENDPOINT)
      .then(result => result.json())
      .then((output) => {
          console.log('Output: ', output);
          list = output;
          
          
  })
  .catch(err => 
    {console.log(err);
  });
  
  
  const element = document.getElementById("btn");
  element.addEventListener("click",printAll);
  
  
  function printAll(){
      document.getElementById("message").style.visibility="hidden";
     loadData(list);
  }

  // lyg ir viskas veikia :)
 