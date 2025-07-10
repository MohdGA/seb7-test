const fs = require('node:fs/promises');
const { resolve } = require('node:path');

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous opreation
  setTimeout(() => {
    const sum = 2+2;
   return resolve(sum);
  },1000);
});

async function add() {
  const sum = await myPromise;
  return sum;
};

try{
  console.log(add());
  console.log(sum);
}catch(error){
  console.log('Problem at: ' + error);
}




