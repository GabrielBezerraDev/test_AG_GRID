import { Component, OnInit } from '@angular/core';

type RESERVADO = "RESERVADO";
type DISPONIVEL = "DISPONÍVEL";
export interface IQuarto{
  nome: string;
  quartos: number;
  banheiros: number;
  price: string;
  status: IStatus;
}

export interface IStatus{
  reservado: RESERVADO;
  disponivel: DISPONIVEL;
}




@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrl: './test-table.component.scss'
})
export class TestTableComponent implements OnInit {

  ngOnInit(): void {
      this.gerarListaDeQuartos(6);
  }

  public listaQuartos: IQuarto[] = [];
  

  // Função para gerar um preço aleatório entre 500 e 2000 reais
  public gerarPrecoAleatorio(): string {
    const preco = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
    return `R$ ${preco},00`;
  }


  // public gerarStatusAleatorio(): string {
  //   const statusPossiveis = ["RESERVADO", "DISPONÍVEL"];
  //   const indice = Math.floor(Math.random() * statusPossiveis.length);
  //   return statusPossiveis[indice];
  // }

  public gerarListaDeQuartos(numQuartos: number): void {

    for (let i = 1; i <= numQuartos; i++) {
      const nome = `Quarto ${i}`;
      const quartos = Math.floor(Math.random() * 5) + 1;
      const banheiros = Math.floor(Math.random() * 3) + 1;
      const price = this.gerarPrecoAleatorio();
      const status: IStatus = {
        reservado: "RESERVADO",
        disponivel: "DISPONÍVEL"
      };

      const quarto: IQuarto = {
        nome,
        quartos,
        banheiros,
        price,
        status
      };

      this.listaQuartos.push(quarto);
    }
    console.log(this.listaQuartos);

  }


}
