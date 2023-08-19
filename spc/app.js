let codes = {
    Anna: 10,
    Olga: 1,
    Ivan: 5
  };
  function getScore(){ 
  let sum = 0;
  for (let key in codes) {
    sum += codes[key];
  }
  console.log(sum); 
}
getScore()
  