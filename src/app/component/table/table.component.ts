import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef,  GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface IDataTable{
    policial: string;
    arma: string,
    price: string;
    ccaf: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public gridApi!: GridApi;
  theme = "ag-theme-quartz";

public rowData: Array<IDataTable> = [
  {policial:"Sargento Márcio", arma:"AM4",price:"7000",ccaf:"Ativado"},
  {policial:"Sub Valdenor", arma:"Glock",price:"3000",ccaf:"Ativado"},
  {policial:"Sargento Bentes", arma:"Revolvér",price:"2500",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"},
  {policial:"Sargento Márcio", arma:"AM4",price:"7000",ccaf:"Ativado"},
  {policial:"Sub Valdenor", arma:"Glock",price:"3000",ccaf:"Ativado"},
  {policial:"Sargento Bentes", arma:"Revolvér",price:"2500",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"},
  {policial:"Sargento Márcio", arma:"AM4",price:"7000",ccaf:"Ativado"},
  {policial:"Sub Valdenor", arma:"Glock",price:"3000",ccaf:"Ativado"},
  {policial:"Sargento Bentes", arma:"Revolvér",price:"2500",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"},
  {policial:"Cabo Maycon", arma:"Clock",price:"3000",ccaf:"Ativado"}
];

public colDefs: Array<ColDef> =
[
  {field: "policial",headerName: "Nome do agente"},
  {field: "arma",headerName:"Arma do agente"},
  {field: "price",headerName:"Preço da arma"},
  {field: "ccaf",headerName:"CCAF está ativo?"}
]

onBtnExport() {
  this.gridApi.exportDataAsCsv();
}

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
}
}

