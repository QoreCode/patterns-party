import { Device } from './device';

export class House {
  public id: string;
  public name: string;
  private devices: Device[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addDevice(device: Device): void {
    this.devices.push(device);
  }

  removeDeviceById(deviceId: string): void {
    this.devices = this.devices.filter(device => device.id !== deviceId);
  }

  getDeviceById(deviceId: string): Device | undefined {
    return this.devices.find(device => device.id === deviceId);
  }

  getAllDevices(): Device[] {
    return this.devices;
  }

  getDevicesByType<T extends Device>(type: new (...args: any[]) => T): T[] {
    return this.devices.filter(device => device instanceof type) as T[];
  }
}
