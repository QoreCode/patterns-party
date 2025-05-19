import { DeviceStatus } from '../types/device-status';

export class Hub {
  id: string;
  name: string;
  ipAddress: string;
  status: DeviceStatus;

  constructor(id: string, name: string, ipAddress: string, status: DeviceStatus = DeviceStatus.OFFLINE) {
    this.id = id;
    this.name = name;
    this.ipAddress = ipAddress;
    this.status = status;
  }

  setStatus(status: DeviceStatus) {
    this.status = status;
  }
}
