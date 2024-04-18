import { Component, Input } from '@angular/core';
import { IQuarto } from '../../test-table.component';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrl: './row-table.component.scss'
})
export class RowTableComponent {

  @Input() rowData: IQuarto;
  @Input() statusReserva: string = this;
  public valueRating: number = 0;


  public changeRoomStatus():void{

  }

}

