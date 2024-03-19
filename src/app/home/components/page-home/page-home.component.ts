import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableComponent } from '../../../component/table/table.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent implements OnInit {

  public teste: Observable<string> = new Observable<string>();

  ngOnInit(): void {
    this.testando();
  }

  testando():void{
    this.teste.subscribe({
      next: () => {
        console.log("Funcionou");
      },
      error: () => {
        console.log("Funcionou o ERRO");
      }
    })
  }

}
