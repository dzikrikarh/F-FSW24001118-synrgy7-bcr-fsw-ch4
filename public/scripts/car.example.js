class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div>
        <img src="${this.image}" alt="${this.manufacture}">
        <h3>${this.model} (${this.type})</h3>
        <h4>Rp ${this.rentPerDay.toLocaleString()} / hari</h4>
        <p>${this.description}</p>
        <p>${this.capacity} orang</p>
        <p>${this.transmission}</p>
        <p>Tahun ${this.year}</p>
      </div>
    `;
  }

  render() {
    return `
      <div class="col">
        <div class="card custom-card">
          <div class="card-img">
            <img src="${this.image}" class="card-img-top" alt="${this.manufacture}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.model} (${this.type})</h5>
            <p class="card-text">Rent Price: Rp ${this.rentPerDay.toLocaleString()}</p>
            <p class="card-text">${this.description}</p>
            <p class="card-text"><span class="icon icon-capacity"></span>${this.capacity} orang</p>
            <p class="card-text"><span class="icon icon-transmission"></span>${this.transmission}</p>
            <p class="card-text"><span class="icon icon-year"></span>Tahun: ${this.year}</p>
            <button class="card-button">Pilih Mobil</button>
          </div>
        </div>
      </div>
    `;
  }

}
