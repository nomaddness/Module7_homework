//Task 4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
this.name = name;
this.power = power;
this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function () {
console.log(this.name + " is plugged!");
this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function () {
console.log(this.name + " is unplugged!");
this.isPlugged = false;
};

// Прибор 1
function Lamp(name, brand, power, bulbType) {
this.name = name;
this.brand = brand;
this.power = power;
this.bulbType = bulbType;
this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
this.name = name;
this.brand = brand;
this.power = power;
this.type = type;
this.functionality = functionality;
this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)
