// Родительская функция электроприборов
class ElectricalAppliances { constructor(power) {
  this.power = power;
  this.connected = false
  }

  // Подлючение к источнику питания
  plugged(){
  this.connected = true;
  console.log(`Прибор подключен к питанию, потребляемая мощность: ${this.power} Вт`)
  }

  // Отключение от источника питания
  unplugged(){
    this.connected = false;
    console.log('Прибор отключен')
  }
}


// Монитор, наследование и расширение
class Monitor extends ElectricalAppliances { constructor(screen){
  super(30);
  this.screen = screen;
  }
}


// Компьютер, наследование и расширение
class Computer extends ElectricalAppliances { constructor(RAM){
  super(200);
  this.RAM = RAM;
  }
}


// Приборы
const monitor = new Monitor(144);
const computer = new Computer(32);


// Подключение
monitor.plugged();
computer.plugged();


console.log(monitor);
console.log(computer);