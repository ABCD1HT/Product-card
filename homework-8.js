const userProfile = {
  name: "Абдулла",
  lastName: "Алиев",
  age: 25,
  email: "abcd@gmail.com",
  country: "Россия",
  city: "Москва",
  job: "студент",
  relationshipStatus: "нет"
};

const car = {
  brand: "BMW",
  model: "X5",
  year: 2021,
  color: "черный",
  transmission: "автомат"
};  

car.owner = userProfile;

function addMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return;
  }
  carObject.maxSpeed = 250;
}

addMaxSpeed(car);


function getObjectProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

getObjectProperty(car, "brand");


const products = ["книга", "мяч", "ручка"];


const books = [
  { title: "Война и мир", 
    author: "Лев Толстой",
    year: 1869, 
    coverColor: "красный", 
    genre: "роман" 
  },

  { title: "Чистый код", 
    author: "Роберт Мартин", 
    year: 2008, 
    coverColor: "белый", 
    genre: "программирование" 
  },

  { title: "Мастер и Маргарита", 
    author: "Михаил Булгаков", 
    year: 1967, 
    coverColor: "зеленый", 
    genre: "фэнтези" 
  }
];

books.push({
  title: "Анна Каренина", 
  author: "Лев Толстой", 
  year: 1877, 
  coverColor: "черный", 
  genre: "роман" 
});

const harryPotterBooks = [
  { title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг", 
    year: 1997, 
    coverColor: "красный", 
    genre: "фэнтези" 
  },
  { title: "Гарри Поттер и тайная комната", 
    author: "Джоан Роулинг", 
    year: 1998, 
    coverColor: "синий", 
    genre: "фэнтези" 
  }
];

const allBooks = [...books, ...harryPotterBooks];


function checkRareBooks(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const updatedBooks = checkRareBooks(allBooks);
console.log(updatedBooks);