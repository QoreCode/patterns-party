import { Device } from './device';
import { LampColor } from '../types/lamp-color';

export class Lamp extends Device {
  isOn: boolean;
  brightness: number; // 0–100
  color: LampColor;

  constructor(id: string, name: string, isOn = false, brightness = 100, color: LampColor = LampColor.WHITE) {
    super(id, name);
    this.isOn = isOn;
    this.brightness = brightness;
    this.color = color;
  }

  toggle() {
    this.isOn = !this.isOn;
  }

  setBrightness(value: number) {
    this.brightness = Math.max(0, Math.min(100, value));
  }

  setColor(color: LampColor) {
    this.color = color;
  }
}
