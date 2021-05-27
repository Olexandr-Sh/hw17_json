let car = {
  brand: 'ford fusion',
  age: 5,
  engine: 2.5,
  color: 'burgundy',
  graduationYear: 2013,
};

let carJson = JSON.stringify(car);
console.log(typeof carJson, carJson);

let idNumber = {
  number: 35,
};

let choise = {
  car: 'Mazda 6',
  models: [{ model: 'Grand touring' }, { model: 'Sport' }],
  code: idNumber,
};

idNumber.occupiedBy = choise;

alert( JSON.stringify(choise, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

