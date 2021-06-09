import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class MemoryService implements InMemoryDbService {
  createDb() {
    let pdv = [
      {
        "Nombre": "OXXO",
        "Código Postal": "01500",
        "Colonia": "Anzures",
      },
      {
        "Nombre": "7 eleven",
        "Código Postal": "01600",
        "Colonia": "Polanco",
      }
    ]
    return { pdv }
  }
}
