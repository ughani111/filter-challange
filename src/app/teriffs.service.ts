import { Injectable } from '@angular/core';

enum Operator { LessThan= 0, GreaterThan = 1 }

export interface Filter{
  id: number,
  field: string,
  label: string,
  operator: Operator,
  value: any
}

@Injectable({
  providedIn: 'root'
})
  
export class TeriffsService {
  private filtersArray: Array<Filter> = [
    { id: 1, field: 'download', label: 'below 30mbps', operator: Operator.LessThan, value: 30 },
    { id: 2, field: 'download', label: 'above 30mbps', operator: Operator.GreaterThan, value: 30 },
    { id: 3, field: 'price', label: 'less then 200', operator: Operator.LessThan, value: 200 },
    { id: 4, field: 'price', label: 'more then 200', operator: Operator.GreaterThan, value: 200 },
    { id: 5, field: 'benifits', label: 'less then 3', operator: Operator.LessThan, value: 3 },
    { id: 6, field: 'benifits', label: 'more then 3', operator: Operator.GreaterThan, value: 3 },
  ];

  private products : Array<any> = [
    { name: "gold", price: 229.99, currency: "€", download: 24, upload: 12, allbenifits: ["fast", "reliable", "continuous"], benifits: 3 },
    { name: "silver", price: 199.99, currency: "€", download: 34, upload: 12, allbenifits: ["fast", "reliable", "continuous", "support", "maintainance"], benifits: 5 },
    { name: "platinum", price: 299.99, currency: "€", download: 24, upload: 12, allbenifits: ["fast", "reliable", "continuous", "satisfaction"], benifits: 4 },
    { name: "normal", price: 199.99, currency: "€", download: 54, upload: 12, allbenifits: ["fast", "reliable", "continuous"], benifits: 3 },
    { name: "extra", price: 499.99, currency: "€", download: 84, upload: 12, allbenifits: ["fast", "reliable"], benifits: 2 },
    { name: "slow", price: 299.99, currency: "€", download: 104, upload: 12, allbenifits: ["fast"], benifits: 1 },
    { name: "fast", price: 349.99, currency: "€", download: 44, upload: 12, allbenifits: ["fast", "reliable", "continuous"], benifits: 3 }
  ]
  constructor() { }

  public getAllProducts() {
    return this.products
  }

  public getFilters(field) {
    return this.filtersArray.filter(obj=> obj.field === field);
  }
  
  public getFilterFields() {
    return ["download", "benifits", "price"];
  }
  
  getFilteredData(filterIds: Array<number>, data: Array<any>): Array<any> {
    let filteredData = data;
    for(let fId of filterIds) {
      const currentFilter = this.filtersArray.find(filter => filter.id == fId);
      switch(currentFilter.operator) {
        case Operator.LessThan:
          filteredData = filteredData.filter(row => Number(row[currentFilter.field]) < Number(currentFilter.value));
          break;
        case Operator.GreaterThan:
          filteredData = filteredData.filter(row => Number(row[currentFilter.field]) > Number(currentFilter.value));
          break;
      }
    }
    console.log(filteredData);
    return filteredData;
  }
}
