import { Component, OnInit } from "@angular/core";
import { TeriffsService, Filter } from "./teriffs.service";
import { observable, Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  filterFields: Array<string> = [];
  filters: { [key: string]: string } = {};
  products: Array<any> = [];
  filteredData: Array<any> = [];

  constructor(public teriffService: TeriffsService) {}

  ngOnInit() {
    this.products = this.teriffService.getAllProducts();
    this.filteredData = this.products;
    this.filterFields = this.teriffService.getFilterFields();
  }

  filterChangeHandler(field, event) {
    const value = event.target.value;
    this.filters[field] = value;
    const filterIds = Object.keys(this.filters)
      .map(id => Number(this.filters[id]))
      .filter(id => id > 0);
    console.log("filterids-", filterIds);
    this.filteredData = this.teriffService.getFilteredData(
      filterIds,
      this.products
    );
  }

  getFilters(field) {
    return this.teriffService.getFilters(field);
  }

  showInfo($event) {
    console.log("you clicked: ", $event.name);
  }
}
