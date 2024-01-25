// Родительская функция электроприборов
function ElectricalAppliances(power){
  this.power = power; // Мощность
  this.connected = false
}

// Подлючение к источнику питания
ElectricalAppliances.prototype.plugged = function() {
  this.connected = true
  console.log(`Прибор подключен к питанию, потребляемая мощность: ${this.power} Вт`)
}

// Отключение от источника питания
ElectricalAppliances.prototype.unplugged = function() {
  this.connected = false
  console.log('Прибор отключен')
}

// Монитор, наследование и расширение
function Monitor(screen){
  ElectricalAppliances.call(this, 30); // Мощность 30 Вт
  this.screen = screen // Частота обновления экрана
}

Monitor.prototype = Object.create(ElectricalAppliances.prototype);
Monitor.prototype.constructor = Monitor;


// Компьютер, наследование и расширение
function Computer(RAM){
  ElectricalAppliances.call(this, 200); // Мощность 200 Вт
  this.RAM = RAM; // Оперативная память
}

Computer.prototype = Object.create(ElectricalAppliances.prototype);
Computer.prototype.constructor = Computer;


// Приборы
const monitor = new Monitor(144);
const computer = new Computer(32);


// Подключение
monitor.plugged();
computer.plugged();


console.log(monitor);
console.log(computer);
