import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  title = 'vehicles-front';
  vehicles: Array<Vehicle> = [];

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }

  count(brand: string){
    return this.vehicles.filter(x => x.marca == brand).length
  }

  ngOnInit() {
    this.getVehicles();
  }
}
