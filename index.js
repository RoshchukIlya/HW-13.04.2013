// 1
const numbers = [5, 2, 8, 3, 1, 4];

// Сортируем массив по возрастанию
numbers.sort(function (a, b) {
  return a - b;
});

// 2
const strokes = ['asd', 'fgh', 'tre', 'weq', 'lkj'];
const indexTre = strokes.indexOf('tre');
strokes.splice(indexTre, 1);

// 3
const peoples = [
  {
    name: 'Vasya',
    age: 63,
  },
  {
    name: 'Petya',
    age: 24,
  },
  {
    name: 'Vova',
    age: 42,
  },
  {
    name: 'Masha',
    age: 34,
  },
];

peoples.sort(function (a, b) {
  return a.age - b.age;
});

// 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Находим сумму элементов, расположенных на четных позициях
const sum = numbers2.filter(function (value, index) {
  return index % 2 === 0;
}).reduce(function (acc, value) {
  return acc + value;
}, 0);

// 5
const words = ['apple', 'banana', 'avocado', 'orange', 'kiwi'];
// Определяем букву, с которой мы будем искать элементы
const letter = 'a';
// Находим количество элементов, начинающихся с этой буквы
const count = words.filter(function (word) {
  return word.charAt(0) === letter;
}).length;

// 6
const products = [
  { название: 'Тетрадь', цена: 50 },
  { название: 'Ручка', цена: 20 },
  { название: 'Карандаш', цена: 10 },
  { название: 'Ластик', цена: 5 },
  { название: 'Калькулятор', цена: 100 }
];

// Используем метод reduce() для нахождения суммарной стоимости всех товаров
const totalCost = products.reduce(function (sum, product) {
  return sum + product.цена;
}, 0);

// 7
const numbers3 = [4, 7, 1, 9, 2, 5];
// Используем методы массива для нахождения максимального и минимального значения
const maxNumber = Math.max(...numbers3);
const minNumber = Math.min(...numbers3);

// 8
const strokes2 = ['jiunkj', 'jhvgih', 'adcads', 'adscasdw', 'kjklj']
const sentence = strokes2.join('');

// 9
const peoples2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 },
  { name: 'Eve', age: 45 }
];
// Используем метод reduce() для нахождения суммы возрастов всех элементов
const totalAge = peoples2.reduce(function (sum, person) {
  return sum + person.age;
}, 0);
// Находим средний возраст
const averageAge = totalAge / peoples2.length;

// 10
const numbers4 = [1, 2, 3, 4, 5];
// Используем метод map() для создания нового массива, содержащего квадраты элементов исходного массива
const squares = numbers4.map(function (number) {
  return number * number;
});