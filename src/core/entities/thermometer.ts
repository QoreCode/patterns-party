import { Device } from './device';

export class Thermometer extends Device {
  currentTemperature: number;
  unit: "C" | "F";

  constructor(id: string, name: string, currentTemperature: number, unit: "C" | "F" = "C") {
    super(id, name);
    this.currentTemperature = currentTemperature;
    this.unit = unit;
  }

  getTemperatureView(): string {
    return `${this.currentTemperature}°${this.unit}`;
  }

  setTemperature(value: number) {
    this.currentTemperature = value;
  }
}
