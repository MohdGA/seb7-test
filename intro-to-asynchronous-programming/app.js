const fs = require('node:fs/promises');

const readDataFiles = async () => {
  const userData = await fs.readFile('test.txt', 'utf8');
  console.log(userData);
  const profileData = await fs.readFile('test2.txt', 'utf8');
  console.log(profileData);
  const userHistory = await fs.readFile('test3.txt', 'utf8');
  console.log(userHistory);
}

readDataFiles();
console.log('run this as soon as possible');

try{
  console.log(hi);
}catch(error){
  console.log("You have a problem in: " + error)
};