import { DeviceStatus } from '../types/device-status';

export abstract class Device {
  id: string;
  name: string;
  status: DeviceStatus;

  protected constructor(id: string, name: string, status: DeviceStatus = DeviceStatus.OFFLINE) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  setStatus(status: DeviceStatus) {
    this.status = status;
  }

  isOnline(): boolean {
    return this.status === DeviceStatus.ONLINE;
  }
}
