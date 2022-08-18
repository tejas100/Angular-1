import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age: number;
  address: string;
  train: string;
  package: string;
  amt: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'      , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000        },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'       , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000       },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'       , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000       },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'    , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000          },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'         , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000     },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'       , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000       },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'     , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000         },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'       , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000       },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'     , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000         },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'       , age: 10, address: "Mysuru", train: "Yes", package: "Gold", amt: 5000       },
];


@Component({
  selector: 'app-vappoint',
  templateUrl: './vappoint.component.html',
  styleUrls: ['./vappoint.component.css']
})

export class VappointComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'Email','age','address','trainer','package','amt'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
