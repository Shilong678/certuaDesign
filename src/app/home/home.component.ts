import { Component, OnInit } from "@angular/core";
import { HomeService } from './home.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  distributorProp: Array<any>;
  supplierProp: Array<any>;
  distService: Array<any>;
  partners: Array<string>;
  supService: Array<any>;
  constructor(private _service: HomeService) {}

  ngOnInit() {
    this.partners = this._service.getPartner();
    this.supService = this._service.getSupplierService();
    this.distService = this._service.getDistributorService();
    this.distributorProp = this._service.getDistributorProposition();
    this.supplierProp = this._service.getSupplierProposition();
  }
}
