import { Routes } from '@angular/router';

export const routes: Routes =
[
  {
    path: "",
    pathMatch: "full",
    redirectTo: "test-table"
  }
  ,
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "test-table",
    loadChildren: () => import("./modules/test-table/test-table.module").then(m => m.TestTableModule)
  }
];
