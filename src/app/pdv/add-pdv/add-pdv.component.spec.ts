import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPdvComponent } from './add-pdv.component';

describe('AddPdvComponent', () => {
  let component: AddPdvComponent;
  let fixture: ComponentFixture<AddPdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
