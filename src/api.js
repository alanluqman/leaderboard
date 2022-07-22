const listView = document.getElementById('list');
const refreshIcon = document.getElementById('refreshIcon');

/// sorting function
function compareScore(a, b) {
  return b.score - a.score;
}

/// Get data from API
export const reload = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8ymaCVJym5ZfSjBjs5DW/scores/')
    .then((response) => response.json())
    .then((json) => {
      const sorted = json.result.sort(compareScore);
      listView.innerHTML = '';
      for (let i = 0; i < sorted.length; i += 1) {
        const item = document.createElement('li');
        item.classList = 'item';
        switch (i) {
          case 0:
            item.innerHTML = `<i class="fas fa-award gold"></i>  ${sorted[i].user} : ${sorted[i].score} `;
            break;
          case 1:
            item.innerHTML = `<i class="fas fa-award silver"></i>   ${sorted[i].user} : ${sorted[i].score} `;
            break;
          case 2:
            item.innerHTML = `<i class="fas fa-award bronz"></i>   ${sorted[i].user} : ${sorted[i].score} `;
            break;

          default:
            item.innerHTML = ` ${sorted[i].user} : ${sorted[i].score} `;
        }

        listView.appendChild(item);
      }
    });
  refreshIcon.classList.remove('spin');
};

/// / Add Item to API
export const postItem = async () => {
  const user = document.getElementById('user').value;
  const scoreValue = document.getElementById('score').value;
  if (user === '' || scoreValue === '') {
    document.getElementById('error').innerHTML = '* DO NOT leave input fields blank, Please.';
  } else {
    document.getElementById('error').innerHTML = '';
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8ymaCVJym5ZfSjBjs5DW/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score: scoreValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
    reload();
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  }
};

/// // refresh
export const refresh = () => {
  refreshIcon.classList.add('spin');
  listView.innerHTML = '';
  reload();
};