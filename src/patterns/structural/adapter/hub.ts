import { Stateful } from './stateful.interface';

export class Hub {
  devises: Stateful[]

  setDevice(device: Stateful) {
    this.devises.push(device)
  }

  turnThemOn() {
    this.devises.forEach((device) => device.turnOn())
  }

  turnThemOff() {
    this.devises.forEach((device) => device.turnOff())
  }
}
