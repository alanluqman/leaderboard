// Create new game
 
 const newGame = async (gameName) => {
  const connect = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: gameName
    }),
    headers: { 'Content-type': 'application/JSON' }
  });

   const receivedData = connect.json();
   const gameID = receivedData.result;
 console.log('this is  ID :'+gameID);
  return gameID;
};
 
console.log(newGame('oingpong'));