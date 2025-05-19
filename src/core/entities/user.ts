import { UserRole } from '../types/user-role';

export class User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    role: UserRole = UserRole.USER,
    createdAt: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
  }

  isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  updateEmail(newEmail: string) {
    this.email = newEmail;
  }

  rename(newName: string) {
    this.name = newName;
  }
}
