function hasProperty(str, obj){
  return obj.hasOwnProperty(str)
}

const person = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 20
}

let str_1 = 'firstName';

console.log(hasProperty(str_1, person))