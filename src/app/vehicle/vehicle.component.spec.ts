import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with four rows including header', () => {
    const fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    component.vehicles = [{
      "id": 1,
      "marca": "Renault",
      "linea": "Kangoo",
      "referencia": "VU Express",
      "modelo": 2017,
      "kilometraje": 93272,
      "color": "Blanco",
      "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
    },{
      "id": 1,
      "marca": "Renault",
      "linea": "Kangoo",
      "referencia": "VU Express",
      "modelo": 2017,
      "kilometraje": 93272,
      "color": "Blanco",
      "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
  },{
        "id": 1,
        "marca": "Renault",
        "linea": "Kangoo",
        "referencia": "VU Express",
        "modelo": 2017,
        "kilometraje": 93272,
        "color": "Blanco",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
    }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let rows = compiled.querySelectorAll('tr');
    expect(rows.length).toEqual(4);
  });

});
