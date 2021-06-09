import { Component, OnInit } from '@angular/core';
import { Pdv } from '../pdv.model'
import { PdvService } from '../pdv.service'

@Component({
  selector: 'app-list-pdv',
  templateUrl: './list-pdv.component.html',
  styleUrls: ['./list-pdv.component.css']
})
export class ListPdvComponent implements OnInit {
  pdv = {
    id: 3,
    nombre: '',
    cp: '',
    colonia: ''
  }
  add = false;
  pdvs: Pdv[] = [];

  constructor(private pdvService: PdvService) { }
  ngOnInit(): void {
    this.getPdvs()
  }

  private getPdvs() {
    this.pdvService.getPdvs().subscribe(pdvs => this.pdvs = pdvs);
  }

  addPdv() {
    const data = {
      id: this.pdv.id,
      nombre: this.pdv.nombre,
      cp: this.pdv.cp,
      colonia: this.pdv.colonia
    };
    this.pdvService.createPdv(data).subscribe(response => {
      console.log(response)
      this.getPdvs();
      this.resetValues();
    });
  }


  resetValues() {
    this.pdv.id++;
    this.pdv.nombre = "";
    this.pdv.cp = "";
    this.pdv.colonia = "";
    this.add = false;
  }

}
