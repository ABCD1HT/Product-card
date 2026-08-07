function showTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов.`)
}

showTemperature("Москва", 29);


const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT){
    console.log("Досветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);
checkSpeed(299792458);
checkSpeed(7789);


const productName = "Телефон";
const productPrice = 10000;

function buyProduct(budget) {
  if (budget >= productPrice) 
    console.log(`${productName} приобретён. Спасибо за покупку!`)
  else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(10000);
buyProduct(5000);


const userName = "Абдулла";
const userAge = 17;
const student = true;

function getUserSummary(name, age, studentStatus) {
  const statusText = studentStatus ? "студент" : "не студент";
  console.log(`Пользователь: ${name}, возраст: ${age}, статус: ${statusText}.`);
}

getUserSummary(userName, userAge, student);
