//! 1--------------------------------------------------------
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'], };
//! 2---------------------------------------------
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner : {
//   name: 'Генри',
//   phone: '982-126-1588',
//   email: 'henry.carter@aptmail.com',

//   }
//   };
//   !3-------------------------------------------
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };

//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки
// !4--------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Генри",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки
// //!5----------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Пиши код выше этой строки
//!6-------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Генри",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;

// apartment.rating = 4.7;

// apartment.owner.name = "Генри Сибола";

// apartment.tags.push("trusted");
//!7------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Генри Сибола",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// console.log(apartment.area);
// apartment.rooms = 3;
// console.log(apartment.rooms);
// apartment.location = {};
// apartment.location.country = "Ямайка";
// console.log(apartment.location.country);
// apartment.location.city = "Кингстон";
// console.log(apartment.location.city);
//!8-----------------
// const name = "Ремонтный дроид";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

//!9-----------------
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials.email);
// console.log(credentials.password);
//!10------------------------
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {

//   keys.push(key);
//   values.push(apartment[key]);
// }
//!11-------------
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Просторная квартира в центре";
// apartment.rating = 4;
// apartment.price = 2153;

// console.log(apartment);
// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     console.log("keys :", keys);
//     values.push(apartment[key]);

// Пиши код выше этой строки
//   }
// }
//!12-----------------------
// let object = { name: "Mango", age: 2 };
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   const array = [];
//   for (const key in object) {
//     console.log(key);

//     if (object.hasOwnProperty(key)) {
//       array.push(key);
//     }
//   }
//   propCount = array.length;

//   // Пиши код выше этой строки
//   return propCount;
// }
// //!13
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]);
// }
// //!14
// function countProps(object) {
//   // Пиши код ниже этой строки

//   let propCount = [];

//   propCount = Object.keys(object);

//   return propCount.length;

//   // Пиши код выше этой строки
// }
// //!15
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// //!16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   let arrayOfSalaries = Object.values(salaries);
//   for (let sale of arrayOfSalaries) {
//     totalSalary += sale;
//   }

//   // Пиши код выше этой строки
//   return totalSalary;
// }
// //!17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
//!18
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }
//!19
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let array = [];
//   for (let product of products) {
//     if (propName in product) {
//       array.push(product[propName]);
//     }
//   }
//   return array;
//   // Пиши код выше этой строки
// }
//!20
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (let product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }
//!21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today,  tomorrow} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//!22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//!23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday: highYesterday, today:highToday, tomorrow:highTomorrow, highIcon =  'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
//const highYesterday = highTemperatures.yesterday;
//const highToday = highTemperatures.today;
//const highTomorrow = highTemperatures.tomorrow;
//const highIcon = highTemperatures.icon;

// Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//!24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//!25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Пиши код ниже этой строки

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
//!26
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
//!27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//!28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
//!29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};

//!30
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
// const {text} = data;
// const task = {category, priority, text, completed, ...data};
//    return task;
// }

//!31
// Пиши код ниже этой строки
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Пиши код выше этой строки
// }

//!32
// Пиши код ниже этой строки
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// Пиши код выше этой строки
// }
//!33
// Пиши код ниже этой строки
// function findMatches(arr, ...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args){
// if (arr.includes(arg)){
// matches.push(arg)
// }
// }
// Пиши код выше этой строки
//   return matches;
// }

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//!34
const bookShelf = {
  // Пиши код ниже этой строки
  books: ["Последнее королевство", "Страж снов"],
  getBooks() {
    return "Возвращаем все книги";
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  // Пиши код выше этой строки
};

//!35
const bookShelf = {
  books: ["Последнее королевство", "Мгла", "Страж снов"],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки

    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);

    // Пиши код выше этой строки
  },
};

//!36
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
};

//!37
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  getPotions() {
    return this.potions;
  },
  // Пиши код выше этой строки
};

//!38
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
    // Пиши код выше этой строки
  },
};
//!39
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(potionName);
    console.log(potionIndex);
    const newArray = this.potions.splice(potionIndex, 1);
    console.log(newArray); //что удалено
    console.log(this.potions);
    // Пиши код выше этой строки
  },
};
//!40
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
    const newArray = this.potions.splice(potionIndex, 1, newName);
  },
};
//!41
const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potionName === potion.name) {
        const potionIndex = this.potions.indexOf(potion);
        if (potionIndex === -1) {
          return `Зелья ${potionName} нет в инвентаре!`;
        }

        this.potions.splice(potionIndex, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        const potionIndex = this.potions.indexOf(potion);
        if (potionIndex === -1) {
          return `Зелья ${potionName} нет в инвентаре!`;
        }

        potion.name = newName;
      }
    }
  },
  // Пиши код выше этой строки
};
