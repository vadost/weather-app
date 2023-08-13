import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static serialize(data: any): string {
    return JSON.stringify(data);
  }

  private static unserialize(data: any): string {
    let storagedata;
    try {
      storagedata = JSON.parse(data);
    } catch (err) {
      storagedata = data;
    }
    return storagedata;
  }

  setItem(key: string, data: any): void {
    const serializedData = LocalStorageService.serialize(data);
    localStorage.setItem(key, serializedData);
  }

  getItem(key: string): any {
    const data = localStorage.getItem(key);
    return LocalStorageService.unserialize(data);
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}
