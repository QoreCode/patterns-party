import { DeviceStatus } from '../types/device-status';
import { Device } from './device';

export class Clock extends Device {
  timeZone: string;
  currentTime: Date;

  constructor(
    id: string,
    name: string,
    timeZone: string = "UTC",
    currentTime: Date = new Date()
  ) {
    super(id, name, DeviceStatus.ONLINE);
    this.timeZone = timeZone;
    this.currentTime = currentTime;
  }

  // Update current time
  updateTime(newTime: Date): void {
    this.currentTime = newTime;
  }

  // Get current time formatted as a string
  getFormattedTime(): string {
    return this.currentTime.toLocaleTimeString("en-US", {
      timeZone: this.timeZone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  setTimeZone(tz: string): void {
    this.timeZone = tz;
  }

  isNoon(): boolean {
    const hours = this.currentTime.getHours();
    return hours === 12 && this.currentTime.getMinutes() === 0 && this.currentTime.getSeconds() === 0;
  }

  isMidnight(): boolean {
    const hours = this.currentTime.getHours();
    return hours === 0 && this.currentTime.getMinutes() === 0 && this.currentTime.getSeconds() === 0;
  }

  isAM(): boolean {
    const hours = this.currentTime.getHours();
    return hours < 12;
  }

  isPM(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 12;
  }

  isMorning(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 6 && hours < 12;
  }

  isAfternoon(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 12 && hours < 18;
  }

  isEvening(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 18 && hours < 24;
  }

  isNight(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 0 && hours < 6;
  }
}
