// setter and getter
class Thermostat {
    constructor(f) {
      let c = 5/9 * (f - 32);
      this._f = c;
    }
    get temperature() {
      return this._f;
    }
    set temperature(c) {
      return this._f = c;
    }
  }
  
  const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
  let temp = thermos.temperature; // 24.44 градусів за Цельсієм
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 градусів за Цельсієм