function showProperty(obj){
  for(let property in obj){
    if(obj.hasOwnProperty(property)){
      console.log(property,':', obj[property])
    }
  }
}


const person = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 20
}

showProperty(person)