import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class MemoryService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      pdv : [
        {
          "id": 1,
          "nombre": "OXXO",
          "cp": "01500",
          "colonia": "Anzures",
        },
        {
          "id": 2,
          "nombre": "7 eleven",
          "cp": "01600",
          "colonia": "Polanco",
        }
      ]
    }
  }
}
