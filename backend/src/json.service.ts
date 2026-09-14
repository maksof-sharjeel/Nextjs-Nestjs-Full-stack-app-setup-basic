import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface Database {
  users: any[];
}

@Injectable()
export class JsonService {
  private dbPath = path.join(__dirname, '..', '..', 'db.json');
  private db: Database = { users: [] };

  constructor() {
    this.loadDatabase();
  }

  private loadDatabase() {
    try {
      const data = fs.readFileSync(this.dbPath, 'utf-8');
      this.db = JSON.parse(data);
    } catch (error) {
      this.db = { users: [] };
      this.saveDatabase();
    }
  }

  private saveDatabase() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.db, null, 2));
  }

  getUsers() {
    return this.db.users;
  }

  getUser(id: number) {
    return this.db.users.find(user => user.id === id);
  }

  createUser(user: any) {
    const newId = this.db.users.length > 0 
      ? Math.max(...this.db.users.map(u => u.id)) + 1 
      : 1;
    const newUser = {
      id: newId,
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.db.users.push(newUser);
    this.saveDatabase();
    return newUser;
  }

  updateUser(id: number, updates: any) {
    const index = this.db.users.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    this.db.users[index] = {
      ...this.db.users[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.saveDatabase();
    return this.db.users[index];
  }

  deleteUser(id: number) {
    const index = this.db.users.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    const deleted = this.db.users.splice(index, 1)[0];
    this.saveDatabase();
    return deleted;
  }
}
