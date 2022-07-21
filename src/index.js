// import _ from 'lodash';
import './style.css';
const listView = document.getElementById('list');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');


function reload(){
 fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/')
  .then(response => response.json())
  .then(json => {
    listView.innerHTML= '';
    for (let i = 0; i <json['result'].length; i += 1) {
        if (json.result[i].user === 'alan'){
            const item = document.createElement('li');
        item.classList = 'item';
        item.textContent = `${json.result[i].user} : ${json.result[i].score} `;
        listView.appendChild(item);
        }
         
    }  
  }); 
}

reload();

//Submit button 
submitBtn.addEventListener('click', () => {
  const user =  document.getElementById('user').value;
  const scoreValue =  document.getElementById('score').value;
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
  method: 'POST',
  body: JSON.stringify({
    user : user ,
    score : scoreValue
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  reload();
  });

  refreshBtn.addEventListener('click', () => {
    listView.innerHTML= '';
    reload();
  });