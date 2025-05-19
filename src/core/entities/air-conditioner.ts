import { ACMode } from '../types/ac-mode';
import { Device } from './device';
import { DeviceStatus } from '../types/device-status';

export class AirConditioner extends Device {
  isOn: boolean;
  currentTemperature: number;
  targetTemperature: number;
  mode: ACMode;
  fanSpeed: number; // 0–100

  constructor(
    id: string,
    name: string,
    isOn = false,
    currentTemperature = 22,
    targetTemperature = 24,
    mode: ACMode = ACMode.AUTO,
    fanSpeed = 50
  ) {
    super(id, name, DeviceStatus.OFFLINE);
    this.isOn = isOn;
    this.currentTemperature = currentTemperature;
    this.targetTemperature = targetTemperature;
    this.mode = mode;
    this.fanSpeed = fanSpeed;
  }

  togglePower(): void {
    this.isOn = !this.isOn;
  }

  setTargetTemperature(temp: number): void {
    this.targetTemperature = temp;
  }

  setMode(mode: ACMode): void {
    this.mode = mode;
  }

  setFanSpeed(speed: number): void {
    this.fanSpeed = Math.min(100, Math.max(0, speed));
  }
}
