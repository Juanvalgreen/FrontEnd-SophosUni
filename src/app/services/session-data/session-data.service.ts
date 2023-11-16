import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor() { }


    storeData(key: string, data: any) {
      window.sessionStorage.setItem(key, JSON.stringify(data));
    }


    getData(key: string): any {
      const storedData = window.sessionStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    }


    removeData(key: string) {
      window.sessionStorage.removeItem(key);
    }





}
