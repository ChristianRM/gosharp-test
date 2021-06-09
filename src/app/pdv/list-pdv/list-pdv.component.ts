import { Component, OnInit } from '@angular/core';
import { Pdv } from '../pdv.model'
import { PdvService } from '../pdv.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-list-pdv',
  templateUrl: './list-pdv.component.html',
  styleUrls: ['./list-pdv.component.css']
})
export class ListPdvComponent implements OnInit {
  addForm = new FormGroup({
    nombre: new FormControl('',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9 ]*')
        ]
      )),
    colonia: new FormControl('',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9(#.,/) ]*')
        ]
      )),
    cp: new FormControl('',
      Validators.compose(
        [
          Validators.required, 
          Validators.pattern('[0-9]*'),
          Validators.minLength(3),
          Validators.maxLength(7)
        ]
      ))



  })

  get nombre() {
    console.log(this.addForm.get('nombre'))
    return this.addForm.get('nombre')
  }
  get cp() { return this.addForm.get('cp') }
  get colonia() { return this.addForm.get('colonia') }
  id: number = 3;
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
      id: this.id,
      nombre: this.nombre?.value,
      cp: this.cp?.value,
      colonia: this.colonia?.value
    };
    this.pdvService.createPdv(data).subscribe(response => {
      console.log(response)
      this.getPdvs();
      this.resetValues();
    });
  }


  resetValues() {
    this.id++;
    this.addForm.reset()
  }

}
