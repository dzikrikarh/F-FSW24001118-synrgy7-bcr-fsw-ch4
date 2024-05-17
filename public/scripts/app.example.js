class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverTypeSelect = document.getElementById("driver-type");
    this.dateInput = document.getElementById("date-input");
    this.timeInput = document.getElementById("time-input"); 
    this.passengerInput = document.getElementById("passenger-input");
  
    this.carContainerElement.innerHTML = '';
  }
  timeOptions() {
    for (let i = 0; i < 24; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = `${i.toString().padStart(2, '0')}.00 WIB`;
      this.timeInput.add(option);
    }
  }
  async init() {
    // await this.load();
    this.timeOptions();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = async () => {

    const cars = await Binar.listCars();
    Car.init(cars);

    const driverType = this.driverTypeSelect.value;
    const date = this.dateInput.value;
    const time = this.timeInput.value;
    const passengers = this.passengerInput.value;
  
    const filteredCars = Car.list.filter((car) => {
      const availableDate = new Date(car.availableAt).toISOString().split('T')[0];
      const availableTime = new Date(car.availableAt).getHours();
      const availableTimezoneOffset = new Date(car.availableAt).getTimezoneOffset() / 60;
      const adjustedAvailableTime = (availableTime + availableTimezoneOffset + 7) % 24;
  
      if (driverType === 'true' && car.available === false) return false;
      if (driverType === 'false' && car.available === true) return false;
      if (date && availableDate !== date) return false;
      if (time && adjustedAvailableTime !== parseInt(time)) return false;
      if (passengers && car.capacity < passengers) return false;
  
      return true;
    });
  
    this.carContainerElement.innerHTML = '';
    filteredCars.forEach((car) => {
      const node = document.createElement('div');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    // Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
