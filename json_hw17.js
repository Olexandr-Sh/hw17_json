// let car = {
//   brand: 'ford fusion',
//   age: 5,
//   engine: 2.5,
//   color: 'burgundy',
//   graduationYear: 2013,
// };

// let carJson = JSON.stringify(car);
// console.log(typeof carJson, carJson);

// let idNumber = {
//   number: 35,
// };

// let choise = {
//   car: 'Mazda 6',
//   models: [{ model: 'Grand touring' }, { model: 'Sport' }],
//   code: idNumber,
// };

// idNumber.occupiedBy = choise;

// alert( JSON.stringify(choise, function replacer(key, value) {
//   alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }), 2);

// let deserialization = JSON.parse(carJson);
// console.log(deserialization);

// let xhr = new XMLHttpRequest();
// xhr.open("POST", '/server', true);

// xhr.setRequestHeader("Content-type", "http://jsonplaceholder.typicode.com/users");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
//   }
// };
// xhr.send(document);

let url = 'http://jsonplaceholder.typicode.com/users';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  console.log(data);

  let user = data.find((element) => {
    return element.name === 'Kurtis Weissnat';
  });
  console.log(user);

  let userCompany = data.filter((cn) => {
    return cn.company.name === 'Keebler LLC';
  });
  console.log(userCompany);

  // Якщо б шукали по віку писали б наступне
  // let userAge = data.filter((uAge) => {
  //   return uAge.age >= 30;
  // });
  // console.log(userAge);

  let userName = data.filter((letter) => {
    return letter.name[0] === 'C';
  });
  console.log(userName);

  let userCity = data.filter((uCity) => {
    return uCity.address.city[0] === 'R';
  });
  console.log(userCity);
}
xhr.send();

let url2 = 'https://jsonplaceholder.typicode.com/users/1/posts';
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2);

xhr2.setRequestHeader('Content-Type', 'application/json');

xhr2.onload = () => {
  let data2 = JSON.parse(xhr2.response);
  console.log(data2);
}
xhr2.send();

