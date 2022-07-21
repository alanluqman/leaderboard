const listView = document.getElementById('list');

/// Get data from API
export const reload = async () => {
 await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/')
  .then(response => response.json())
  .then(json => {
    listView.innerHTML= '';
    for (let i = 0; i <json['result'].length; i += 1) {
        if (json.result[i].user === 'alan luqman'){
            const item = document.createElement('li');
        item.classList = 'item';
        item.textContent = `${json.result[i].user} : ${json.result[i].score} `;
        listView.appendChild(item);
        }  
    }  
  }); 
}

//// Add Item to API
export const postItem =  async () => {
  const user =  document.getElementById('user').value;
  const scoreValue =  document.getElementById('score').value;
  if (user === '' || scoreValue === ""){
    document.getElementById('error').innerHTML = '* DO NOT leave input fields blank, Please.';
  } 
  else {
    document.getElementById('error').innerHTML = '';
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
    method: 'POST',
    body: JSON.stringify({
        user : user ,
        score : scoreValue
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    }).then((response) => response.json()).then((json) => console.log(json));
    reload();
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
    }
  }


  ///// refresh
  export const refresh = () => {
    listView.innerHTML= '';
    reload();
  }