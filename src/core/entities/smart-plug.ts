import { Device } from './device';

export class SmartPlug extends Device {
  isOn: boolean;
  powerConsumptionWatts: number;

  constructor(id: string, name: string, isOn = false, powerConsumptionWatts = 0.0) {
    super(id, name);
    this.isOn = isOn;
    this.powerConsumptionWatts = powerConsumptionWatts;
  }

  toggle() {
    this.isOn = !this.isOn;
  }

  setPowerConsumption(value: number) {
    this.powerConsumptionWatts = value;
  }
}
