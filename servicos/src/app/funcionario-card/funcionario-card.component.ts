import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles : [`
    .card-block{
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('obj') funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px' : this.funcionario.id, // ou concatenar o + 'px'
      backgroundColor : this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    }
  }

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  // getClassesCss(){
  //  return ['badge', 'badge-default'];
  // }

}
